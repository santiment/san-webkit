export const idleImport = <T>(factory: () => Promise<T>): Promise<T> =>
  new Promise((resolve) => requestIdleCallback(() => factory().then(resolve)))
