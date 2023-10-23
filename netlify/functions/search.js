/* eslint-env node */
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const { SUPABASE_URL, SUPABASE_KEY } = process.env;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error('SUPABASE_URL and SUPABASE_KEY must be provided');
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function findProductsUsingVectors(embedding) {
  const { data, error } = await supabase.rpc('match_products', {
    query_embedding: embedding,
    match_threshold: 0.8,
    match_count: 5,
  });
  return { data, error };
}

async function simpleSqlQuery(tableName, query) {
  const { data, error } = await supabase
    .from(tableName)
    .select()
    .ilike('name', `%${query}%`)
    .limit(5);

  return { data, error };
}

async function advanceSqlQuery(tableName, query) {
  const words = query.split(/\s+/).filter(Boolean); // Split the query into words

  const searchPromises = words.map(async (word) => {
    const { data, error } = await supabase
      .from('products')
      .select()
      .ilike('name', `%${word}%`)
      .order('name'); // You can customize the order here

    if (error) {
      console.error('Error querying the database:', error);
      return [];
    }

    return data;
  });

  const searchResults = await Promise.all(searchPromises);
  const mergedResults = [].concat(...searchResults);

  // Filter out duplicate results using a Set
  const uniqueResults = Array.from(
    new Set(mergedResults.map(JSON.stringify)),
  ).map(JSON.parse);

  const data = uniqueResults.slice(0, 5); // Limit the results to 5

  return { data, error: 'Error with advance sql search' };
}

// We will try two methods to find products:
// The first is using a simple SQL match
// If that doesn't work, then we query each word in the string separately
async function findProductsUsingSql(query) {
  const { data: sData, error: sError } = await simpleSqlQuery(
    'products',
    query,
  );
  if (sData.length === 0) {
    const { data: aData, error: aError } = await advanceSqlQuery(
      'products',
      query,
    );
    return { data: aData, error: aError };
  } else {
    return { data: sData, error: sError };
  }
}

export async function handler(event) {
  try {
    const pathArray = event.path.split('/');
    const action = pathArray[pathArray.length - 1]; // Getting the last element of the array

    let result;
    let body;
    switch (action) {
      case 'vectors':
        body = JSON.parse(event.body); // Parse the request body to get the embedding data
        result = await findProductsUsingVectors(body.embedding);
        if (result.error) throw result.error;
        break;
      case 'sql':
        body = JSON.parse(event.body); // Parse the request body to get the embedding data
        result = await findProductsUsingSql(body.query);
        if (result.error) throw result.error;
        break;
      default:
        return {
          statusCode: 404,
          body: JSON.stringify({ error: 'Case not found' }),
        };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(result.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}

// create or replace function match_products (
//   query_embedding vector(1536),
//   match_threshold float,
//   match_count int
// )
// returns table (
//   id bigint,
//   name varchar,
//   similarity float
// )
// language sql stable
// as $$
//   select
//     products.id,
//     products.name,
//     1 - (products.nameEmbedding <=> query_embedding) as similarity
//   from products
//   where 1 - (products.nameEmbedding <=> query_embedding) > match_threshold
//   order by similarity desc
//   limit match_count;
// $$;
