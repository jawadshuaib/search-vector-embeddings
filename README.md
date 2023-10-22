# Search Vector Embeddings

This project demonstrates that vectorized search yields qualitatively better results than traditional SQL queries. SQL uses exact string comparisons while vector based search uses dimensional similarity between strings. The later method offers greater flexibility as it performs well even in absence of exact word matches.

View live app: https://search-vector-embeddings.netlify.app/

## Try it out

### Install the dependencies

    $ npm install

### Run & Start Testing

Make sure netlify cli is installed. We will need it to run netlify headless functions. Environment variables are fetched directly from the server for security purposes.

    $ netlify dev
