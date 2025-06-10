/**
 * @param {any} _input
 * @param {any} init
 */
export const fetcher = (_input, init) =>
  fetch('https://api.santiment.net/graphql', {
    // @ts-ignore
    headers: {
      'Content-Type': 'application/json',
      authorization: null,
      origin: 'https://app.santiment.net',
    },
    body: init.body,
    method: 'post',
    credentials: 'include',
  })

/**
 * @param {any} query
 * @param {any} variables
 */
export const fetchGql = (query, variables = null) =>
  fetcher(undefined, {
    body: JSON.stringify({ query, variables }),
  })
    .then((response) => response.json())
    .then((response) => response.data)
