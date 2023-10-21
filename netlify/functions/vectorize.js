/* eslint-env node */

export async function handler(event) {
  // if (event.httpMethod !== 'POST')
  //   return { statusCode: 405, body: 'Method Not Allowed' };

  // const token = process.env.OPENAI_API_KEY;
  // const { model, payload, temperature } = JSON.parse(event.body);

  // const { context, input } = payload;

  // let headers = {};

  // headers = {
  //   'Content-Type': 'application/json',
  //   Authorization: `Bearer ${token}`,
  // };
  console.log(event);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from Search' }),
  };
}
