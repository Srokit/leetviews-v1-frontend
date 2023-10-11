
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

export const apiPostTestCode = async (code) => {
  // Fetch using post method passing code in body as json
  const response = await fetch(urlBase + '/testcode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      code,
      questId: 0,
    })
  });
  const body = await response.json();
  return body.data;
}

