import { BROWSER } from 'esm-env'
import {
  getAllContexts,
  getContext,
  mount,
  unmount,
  untrack,
  type Component,
  type ComponentProps,
} from 'svelte'

import { controlledPromisePolyfill } from '$lib/utils/index.js'

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

type TRequiredKeys<T> = { [K in keyof T]-?: object extends Pick<T, K> ? never : K }[keyof T]

export type TDialogResolve<T = undefined> = T extends undefined ? () => void : (value: T) => void
export type TDialogReject<T = undefined> = T extends undefined ? () => void : (value: T) => void

export type TDialogProps<GResolved = undefined, GRejected = undefined> = {
  resolve: TDialogResolve<GResolved>
  reject: TDialogReject<GRejected>
  Controller: TController<TDialogResolve<GResolved>, TDialogReject<GRejected>>
  source?: string
}

export const CTX = 'DialogController'
export const getDialogControllerCtx = <Resolved = unknown, Rejected = unknown>() =>
  getContext(CTX) as { Controller: TController<Resolved, Rejected> }

export const dialogs$ = {
  new<GComponent extends Component<any>>(component: GComponent) {
    const ALL_CTX = getAllContexts()

    type TComponentProps = ComponentProps<GComponent>
    type TProps = Omit<TComponentProps, 'Controller' | 'resolve' | 'reject'>

    type TResolve = TComponentProps extends Record<'resolve', infer Resolve> ? Resolve : never
    type TReturn = Promise<TResolve extends (args: any) => any ? Parameters<TResolve>[0] : unknown>

    const showDialog = (props: TProps) =>
      untrack(() => {
        if (!BROWSER) return Promise.reject()

        const { promise, resolve, reject } = controlledPromisePolyfill()

        let locking = Locking.FREE
        let lockMessage = 'Do you want to close the dialog?'

        // const context = new Map(ALL_CTX)
        const context = ALL_CTX
        const Controller = {
          lock: (): any => (locking = Locking.LOCKED),
          lockWarn: (msg?: string): any => {
            locking = Locking.LOCKED_WARN
            if (msg) lockMessage = msg
          },
          unlock: (): any => (locking = Locking.FREE),

          checkIsLocked: (isForced?: boolean) => {
            // NOTE: Enforcing boolean check
            if (isForced === true) return false

            if (locking === Locking.LOCKED) return true

            if (locking === Locking.LOCKED_WARN && confirm(lockMessage) === false) {
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

    type TShowDialog = () => TReturn
    type TShowDialogStrict = (props: TProps) => TReturn

    return showDialog as TRequiredKeys<TProps> extends never
      ? TShowDialog & TShowDialogStrict
      : TShowDialogStrict
  },
}
