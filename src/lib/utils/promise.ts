// NOTE: Promise.withResolvers() has a bug on iOS 17
// const { promise, resolve, reject } = Promise.withResolvers()
export function controlledPromisePolyfill<T = unknown>() {
  let resolve: (value?: T) => void = () => {}
  let reject: (reason?: unknown) => void = () => {}
  const promise = new Promise((pResolve, pReject) => {
    resolve = pResolve
    reject = pReject
  })

  return { promise: promise as Promise<T>, resolve: resolve!, reject: reject! }
}
