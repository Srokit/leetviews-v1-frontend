
export const apiGetAiHint = async () => {
  const response = await fetch('http://localhost:3000/hint');
  const body = await response.json();
  return body.data.hint;
}

