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

// @ts-ignore Setting the global fetcher during the build process
globalThis.__VITE_GQL_FETCHER = fetcher

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
