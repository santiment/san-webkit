// NOTE: Promise.withResolvers() has a bug on iOS 17
// const { promise, resolve, reject } = Promise.withResolvers()
export function controlledPromisePolyfill() {
    let resolve = () => { };
    let reject = () => { };
    const promise = new Promise((pResolve, pReject) => {
        resolve = pResolve;
        reject = pReject;
    });
    return { promise: promise, resolve: resolve, reject: reject };
}
export const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
