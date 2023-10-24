# Search Vector Embeddings

This project demonstrates that vectorized search yields qualitatively better results than traditional SQL queries.

We will be using sample data from an e-commerce store to compare results.

SQL uses exact string comparisons while vector based search uses dimensional similarity between strings. The later method offers greater flexibility as it performs well even in absence of exact word matches.

![Vector search](https://search-vector-embeddings.netlify.app/vector-based-search.png)

View live app: https://search-vector-embeddings.netlify.app/

Having said that, it is also possible to use a similar methodology using SQL as well - called Levenshtein Distance. However, it is not commonly used due to performance, scalability and indexing issues. In terms of the time and space complexity, it would be classified as O(m \* n). Searching embeds on a database that supports vectors is not only more scalable, but also easily indexable.

![Search comparison](https://search-vector-embeddings.netlify.app/sql-search.png)

## Try it out

Supabase provides support for storing vectors. I calculated vectors for each product using OpenAI's text-embedding-ada-002 algorithm, and uploaded them to Supabase. The "vector" extension should be enabled on Supabase to create a column with embeddings.

After that, a serverless function needs to be created on Supabase to act as a proxy between the database and your code. I used the following configuration:

```sql
create or replace function match_products (
query_embedding vector(1536),
match_threshold float,
match_count int
)
returns table (
id bigint,
name varchar,
similarity float
)
language sql stable
as $$
select
tableProducts.id,
tableProducts.name,
1 - (tableProducts.nameEmbedding <=> query_embedding) as similarity
from tableProducts
where 1 - (tableProducts.nameEmbedding <=> query_embedding) > match_threshold
order by similarity desc
limit match_count;
$$
```

### Install the dependencies

    $ npm install

### Environment Variables

Make sure netlify cli is installed. We will need it to run netlify headless functions. Environment variables are fetched directly from the server for security purposes.

Environment variables that need to be setup:
$ OPENAI_API_KEY
$ SUPABASE_URL
$ SUPABASE_KEY

### Run & Start Testing

    $ netlify dev
