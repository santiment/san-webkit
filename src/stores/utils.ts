if (process.browser) {
  if (!window.__SAPPER__) {
    window.__SAPPER__ = { session: {} }
  }
}

export const getSessionValue = () => window.__SAPPER__.session
export const setSessionValue = (value) => Object.assign(getSessionValue(), value)
