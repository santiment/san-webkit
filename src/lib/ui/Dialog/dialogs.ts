import { BROWSER } from 'esm-env'
import {
  getAllContexts,
  getContext,
  mount,
  unmount,
  untrack,
  type ComponentConstructorOptions,
} from 'svelte'

type TController<Resolved, Rejected> = {
  lock: () => void
  lockWarn: () => void
  unlock: () => void

  close: () => void
  resolve: (value?: Resolved) => void
  reject: (value?: Rejected) => void
}

type TGenericComponent<Props extends Record<string, any> = any> = new (
  options: ComponentConstructorOptions<Props>,
) => any

const CTX = 'DialogController'
export const getDialogControllerCtx = <Resolved = unknown, Rejected = unknown>() =>
  getContext(CTX) as { Controller: TController<Resolved, Rejected> }

export const dialogs$ = {
  new<TComponent extends TGenericComponent>(component: TComponent) {
    const ALL_CTX = getAllContexts()

    type TProps = TComponent extends TGenericComponent<infer Props> ? Props : never

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
          props: { ...props, Controller },
        })
        Controller._unmount = () => unmount(mounted)

        return promise
      })

    return showDialog as TProps extends Record<string, never>
      ? () => Promise<any>
      : (props: TProps) => Promise<any>
  },
}
