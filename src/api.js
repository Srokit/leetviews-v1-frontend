
const urlBase = 'http://localhost:3000';

export const apiGetAiHint = async (dialogue) => {
  // Fetch using post method passing dialogue in body as json
  const response = await fetch(urlBase + '/hint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      dialogue,
    })
  });
  const body = await response.json();
  return body.data;
}

