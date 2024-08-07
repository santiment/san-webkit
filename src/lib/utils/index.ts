import { BROWSER } from 'esm-env'
import { getContext, setContext } from 'svelte'

export { useObserveFnCall, pipeGroupBy } from './observable.svelte.js'

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

  const ctxCreator = (...args: Parameters<CtxCreator>) => {
    const ctx = getContext(CTX) as CtxValue
    if (ctx) return ctx

    return setContext(CTX, creator(...args)) as CtxValue
  }

  /**
   * Used in cases where context initialization is not required.
   */
  ctxCreator.get = () => getContext(CTX) as CtxValue

  /**
   * Used in cases where context should be modified.
   */
  ctxCreator.set = (...args: Parameters<CtxCreator>) =>
    setContext(CTX, creator(...args)) as CtxValue

  return ctxCreator
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
