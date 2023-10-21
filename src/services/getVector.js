import { siteInfo } from '../utils/settings';

export default async function getVector(input) {
  const model = 'text-embedding-ada-002';
  try {
    const response = await fetch(`${siteInfo.fnPath}/test`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input, model }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    return { error: error.message };
  }
}
