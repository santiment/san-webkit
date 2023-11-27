let hasBooted = false

export function setupKitClientSession<T>(data: T) {
  if (process.browser) {
    if (hasBooted) {
      Object.assign(window.__SESSION__, data)
    } else {
      window.__SESSION__ = data || {}
      hasBooted = true
    }
  }
}
