import { BROWSER } from 'esm-env'
import { getContext, setContext } from 'svelte'

export type { TNominal } from './types/index.js'

export { keyify, exactObjectKeys } from './object.js'

export { useObserveFnCall, pipeGroupBy } from './observable.svelte.js'

export { onSupportClick } from './support.js'

export const getRandomKey = (): string => Math.floor(Math.random() * 0xffffffff).toString()

/**
 * Designed for cases when universal page load function should have a conditional query, which runs only on app boot
 */
export const BootFlag = {
  get(): boolean {
    // @ts-expect-error
    return BROWSER && (window.__BOOT_FLAG__ ?? false)
  },

  set() {
    // @ts-expect-error
    if (BROWSER) window.__BOOT_FLAG__ = true
  },
}

export function createCtx<CtxName extends string, CtxCreator extends (...args: any[]) => any>(
  CTX: CtxName,
  creator: CtxCreator,
) {
  type CtxValue = ReturnType<CtxCreator>

  const ctxCreator = (...args: Parameters<CtxCreator>): CtxValue => {
    const ctx = getContext(CTX) as CtxValue
    if (ctx) return ctx

    if (process.env.IS_LOGGING_ENABLED) {
      console.log(
        `%c[DEV ONLY] Context created`,
        'background:#d13939;color:black;padding:3px;border-radius:4px',
        CTX,
      )
    }

    return setContext(CTX, creator(...args))
  }

  /**
   * Used in cases where context initialization is not required.
   */
  const get = (allCtxs?: Map<string, any>) =>
    (allCtxs ? allCtxs.get(CTX) : getContext(CTX)) as CtxValue

  /**
   * Used in cases where context should be modified.
   */
  const set = ((...args) => {
    if (process.env.IS_LOGGING_ENABLED) {
      console.log(
        `%c[DEV ONLY] Context created (using .set)`,
        'background:#d13939;color:black;padding:3px;border-radius:4px',
        CTX,
      )
    }

    return setContext(CTX, creator(...args))
  }) as CtxCreator

  ctxCreator.get = get
  ctxCreator.set = set

  return ctxCreator as CtxCreator & { get: typeof get; set: typeof set }
}

export function Emitter<T extends Record<string, number | string>>(emit: any, events: T) {
  return Object.entries(events).reduce(
    (acc, [key, event]) =>
      Object.assign(acc, {
        [key]: () => emit(event),
      }),
    {},
  ) as { [K in keyof T]: () => void }
}

export const createValueMap = (inMin: number, inMax: number, outMin: number, outMax: number) => {
  const factor = (outMax - outMin) / (inMax - inMin)
  return (value: number) => (value - inMin) * factor + outMin
}

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

export { JobScheduler, type TJobScheduler, type TJob } from './job-scheduler.js'
