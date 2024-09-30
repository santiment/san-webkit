if (typeof window !== 'undefined') {
  if (!window.__SESSION__) window.__SESSION__ = {}
}

export const getSessionValue = () => window.__SESSION__
export const setSessionValue = <T>(value: T) => Object.assign(getSessionValue(), value)
