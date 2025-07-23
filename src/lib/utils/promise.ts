// NOTE: Promise.withResolvers() has a bug on iOS 17
// const { promise, resolve, reject } = Promise.withResolvers()
export function controlledPromisePolyfill() {
  let resolve: (value?: unknown) => void = () => {}
  let reject: (reason?: unknown) => void = () => {}
  const promise = new Promise((pResolve, pReject) => {
    resolve = pResolve
    reject = pReject
  })

  return { promise, resolve: resolve!, reject: reject! }
}
