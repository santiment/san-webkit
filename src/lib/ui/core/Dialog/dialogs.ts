import { BROWSER } from 'esm-env'
import {
  getAllContexts,
  getContext,
  mount,
  unmount,
  untrack,
  type ComponentConstructorOptions,
} from 'svelte'

type TController<GResolved, GRejected> = {
  lock: () => void
  lockWarn: () => void
  unlock: () => void
  checkIsLocked: (isForced?: boolean) => boolean

  close: (isForced?: boolean) => void
  resolve: GResolved
  reject: GRejected
}

enum Locking {
  FREE,
  LOCKED,
  LOCKED_WARN,
}

export type TDialogResolve<T = undefined> = T extends undefined ? () => void : (value: T) => void
export type TDialogReject<T = undefined> = T extends undefined ? () => void : (value: T) => void

export type TDialogProps<GResolved = undefined, GRejected = undefined> = {
  resolve: TDialogResolve<GResolved>
  reject: TDialogReject<GRejected>
  Controller: TController<TDialogResolve<GResolved>, TDialogReject<GRejected>>
  source?: string
}

type TGenericComponent<Props extends Record<string, any> = any> = new (
  options: ComponentConstructorOptions<Props>,
) => any

export const CTX = 'DialogController'
export const getDialogControllerCtx = <Resolved = unknown, Rejected = unknown>() =>
  getContext(CTX) as { Controller: TController<Resolved, Rejected> }

export const dialogs$ = {
  new<TComponent extends TGenericComponent>(component: TComponent) {
    const ALL_CTX = getAllContexts()

    type TComponentProps = TComponent extends TGenericComponent<infer Props> ? Props : never
    type TProps = Omit<TComponentProps, 'Controller' | 'resolve' | 'reject'>

    type TResolve = TComponentProps extends Record<'resolve', infer Resolve> ? Resolve : never
    type TReturn = Promise<TResolve extends (args: any) => any ? Parameters<TResolve>[0] : unknown>

    const showDialog = (props: TProps) =>
      untrack(() => {
        if (!BROWSER) return Promise.reject()

        // NOTE: Promise.withResolvers() has a bug on iOS 17
        // const { promise, resolve, reject } = Promise.withResolvers()
        let resolve: (value: unknown) => void = () => {}
        let reject: (reason?: unknown) => void = () => {}
        const promise = new Promise((promiseResolve, promiseReject) => {
          resolve = promiseResolve
          reject = promiseReject
        })

        let locking = Locking.FREE

        // const context = new Map(ALL_CTX)
        const context = ALL_CTX
        const Controller = {
          lock: (): any => (locking = Locking.LOCKED),
          lockWarn: (): any => (locking = Locking.LOCKED_WARN),
          unlock: (): any => (locking = Locking.FREE),
          checkIsLocked: (isForced?: boolean) => {
            // NOTE: Enforcing boolean check
            if (isForced === true) return false

            if (locking === Locking.LOCKED) return true

            if (
              locking === Locking.LOCKED_WARN &&
              confirm('Do you want to close the dialog?') === false
            ) {
              return true
            }

            return false
          },

          close: () => {},
          resolve,
          reject,

          _unmount: () => {},
          _context: context,
        }

        context.set(CTX, { Controller })

        const mounted = mount(component, {
          target: document.body,
          context,
          props: { ...props, resolve, reject, Controller },
        })
        Controller._unmount = () => unmount(mounted)

        if (process.env.NODE_ENV !== 'production' && BROWSER) {
          // @ts-expect-error
          if (!window.__STORYBOOK_DIALOGS__) window.__STORYBOOK_DIALOGS__ = new Set()

          //@ts-expect-error
          window.__STORYBOOK_DIALOGS__.add(() => unmount(mounted))
        }

        return promise
      })

    return showDialog as TProps extends Record<string, never>
      ? () => TReturn
      : (props: TProps) => TReturn
  },
}
