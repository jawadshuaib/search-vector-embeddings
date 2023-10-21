/* eslint-env node */

export async function handler(event) {
  if (event.httpMethod !== 'POST')
    return { statusCode: 405, body: 'Method Not Allowed' };

  const token = process.env.OPENAI_API_KEY;
  const { model, input } = JSON.parse(event.body);

  const response = await fetch('https://api.openai.com/v1/embeddings', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    method: 'POST',
    body: JSON.stringify({ input, model }),
  });

  const { data } = await response.json();

  // let headers = {};

  // headers = {
  //   'Content-Type': 'application/json',
  //   Authorization: `Bearer ${token}`,
  // };
  console.log(event);

  return {
    statusCode: 200,
    body: JSON.stringify({ embedding: data[0].embedding }),
  };
}
