import { siteInfo } from '../utils/settings';

// Query Supabase database using netlify/functions/supabase-query.js:
async function fetchData(action, method = 'GET', body = null) {
  const url = `${siteInfo.fnPath}/search/${action}`;
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (body) options.body = JSON.stringify(body);

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error occurred while fetching data:', error);
    throw error;
  }
}

export async function findProductsUsingVectors(embedding) {
  const action = 'vectorSearch';
  return await fetchData(action, 'POST', { embedding });
}
