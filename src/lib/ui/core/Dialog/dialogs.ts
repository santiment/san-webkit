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

  close: () => void
  resolve: GResolved
  reject: GRejected
}

export type TDialogResolve<T = undefined> = T extends undefined ? () => void : (value: T) => void
export type TDialogReject<T = undefined> = T extends undefined ? () => void : (value: T) => void

export type TDialogProps<GResolved = undefined, GRejected = undefined> = {
  resolve: TDialogResolve<GResolved>
  reject: TDialogReject<GRejected>
  Controller: TController<TDialogResolve<GResolved>, TDialogReject<GRejected>>
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

        const { promise, resolve, reject } = Promise.withResolvers()

        const Controller = {
          lock: () => {},
          lockWarn: () => {},
          unlock: () => {},

          close: () => {},
          resolve,
          reject,

          _unmount: () => {},
        }

        const context = new Map(ALL_CTX)
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