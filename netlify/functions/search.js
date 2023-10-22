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
    match_threshold: 0.7,
    match_count: 5,
  });
  return { data, error };
}

export async function handler(event) {
  try {
    const pathArray = event.path.split('/');
    const action = pathArray[pathArray.length - 1]; // Getting the last element of the array

    let result;
    let body;
    switch (action) {
      case 'vectorSearch':
        body = JSON.parse(event.body); // Parse the request body to get the embedding data
        result = await findProductsUsingVectors(body.embedding);
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
