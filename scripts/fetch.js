export const fetchGql = (query, variables = null) =>
  fetch('https://api.santiment.net/graphql', {
    headers: {
      'Content-Type': 'application/json',
      authorization: null,
      origin: 'https://app.santiment.net',
    },
    body: JSON.stringify({ query, variables }),
    method: 'post',
    credentials: 'include',
  })
    .then((response) => response.json())
    .then((response) => response.data)
