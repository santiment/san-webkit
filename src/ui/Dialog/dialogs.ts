import type { ComponentType, SvelteComponent } from 'svelte'

import { getAllContexts } from 'svelte'
import { writable } from 'svelte/store'
import { newDialogCtx } from './ctx'
import { DialogLock } from './types'

export { DialogLock } from './types'

export type DialogController = {
  resolve: (value: unknown) => void
  reject: (reason?: any) => void
  locking: DialogLock
}

type SvelteProps<T> = T extends ComponentType<infer Component>
  ? Component extends SvelteComponent<infer Props>
    ? Props
    : never
  : never

type DialogsStore = Array<{ Component: ComponentType; props: any }>

type Props = {
  [key: string]: any
} & {
  strict?: boolean
  single?: boolean
  DialogPromise?: {
    resolve: (value: unknown) => void
    reject: (reason?: any) => void
    locking: DialogLock
  }
}

type DialogComponentProps<T> = {
  [K in keyof SvelteProps<T> as K extends 'DialogPromise' | 'i' | 'DialogCtx'
    ? never
    : K]: SvelteProps<T>[K]
} & Partial<{
  strict: boolean
}>

const DIALOGS = [] as DialogsStore
const { subscribe, update } = writable<DialogsStore>(DIALOGS)

const pipeCatch = (e) => e && Promise.reject(e)

export const dialogs = {
  subscribe,
  show<T = unknown>(Component: ComponentType, props: Props = {}): Promise<T> {
    const promise = new Promise<T>(
      (resolve, reject) => (props.DialogPromise = { resolve, reject, locking: DialogLock.FREE }),
    )

    props.DialogCtx = newDialogCtx<T>(props.DialogPromise as SAN.Dialog.Promise)

    update((dialogs) => {
      dialogs.push({ Component, props })
      return dialogs
    })

    return props.strict ? promise : promise.catch(pipeCatch)
  },
  /** Only single entity of the Component can be mounted at the same time */
  showOnce<T = unknown>(Component: ComponentType, props: Props = {}): undefined | Promise<T> {
    return dialogs.has(Component) ? undefined : dialogs.show(Component, props)
  },

  __show<T extends ComponentType>(Component: T, props: DialogComponentProps<T> = {} as any) {
    if (dialogs.has(Component)) return Promise.reject('Dialog is already opened')

    const dialogProps = props as typeof props & {
      DialogPromise?: SAN.DialogController
      DialogCtx?: SAN.Dialog.Ctx
      CTX?: Record<string, any>
    }

    const promise = new Promise<T>((resolve, reject) => {
      dialogProps.DialogPromise = { resolve, reject, locking: DialogLock.FREE }
    })

    dialogProps.DialogCtx = newDialogCtx<T>(props.DialogPromise as SAN.Dialog.Promise)

    update((dialogs) => {
      dialogs.push({ Component, props: dialogProps })
      return dialogs
    })

    return props.strict ? promise : promise.catch(pipeCatch)
  },

  /**
   * Example:
   * ```html
   * <script context="module">
   *   export const showPaymentDialog$ = () => dialogs.WithCtx(PaymentDialog)
   * </script>
   *
   * <script>
   *   const showPaymentDialog = showPaymentDialog$()
   * ```
   */
  __WithCtx<T extends ComponentType, K extends (...args: any[]) => DialogComponentProps<T>>(
    Component: T,
    modifyProps: K = ((props: DialogComponentProps<T>) => props) as K,
  ) {
    const CTX = getAllContexts()

    return (...args: Parameters<K>) => {
      const props = Object.assign(modifyProps(...args) || {}, { CTX })
      return dialogs.__show(Component, props)
    }
  },

  hide(index: number): void {
    update((dialogs) => {
      dialogs.splice(index, 1)
      return dialogs
    })
  },
  has(Component: ComponentType): boolean {
    for (let i = DIALOGS.length - 1; i > -1; i--) {
      if (DIALOGS[i].Component === Component) return true
    }
    return false
  },
}

/*

Example:

<div id="dialogs">
  {#each $dialogs as { Component, props }, i}
    <svelte:component this={Component} {...props} {i} />
  {/each}
</div>

*/
