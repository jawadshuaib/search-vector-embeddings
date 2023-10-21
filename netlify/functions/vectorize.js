/* eslint-env node */
// https://search-vector-embeddings.netlify.app/.netlify/functions/vectorize
export async function handler(event) {
  if (event.httpMethod !== 'POST')
    return { statusCode: 405, body: 'Method Not Allowed' };

  const token = process.env.OPENAI_API_KEY;
  const { model, input } = JSON.parse(event.body);

  try {
    const response = await fetch('https://api.openai.com/v1/embeddings', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
      body: JSON.stringify({ input, model }),
    });

    const { data, error } = await response.json();

    if (data && data.length > 0)
      return {
        statusCode: 200,
        body: JSON.stringify({ embedding: data[0].embedding }),
      };

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  } catch (error) {
    return {
      statusCode: error.response ? error.response.status : 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
