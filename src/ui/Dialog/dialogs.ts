import type { SvelteComponentDev } from 'svelte/internal'
import { writable } from 'svelte/store'

export enum DialogLock {
  FREE,
  LOCKED,
  WARN,
}

export type DialogController = {
  resolve: () => void
  reject: () => void
  locking: DialogLock
}

export type SvelteComponentModule = {
  new (options: { target: Element; props?: any }): SvelteComponentDev
}

type DialogsStore = Array<{ Component: SvelteComponentModule; props: any }>

type Props = {
  [key: string]: any
} & {
  strict?: boolean
  DialogPromise?: {
    resolve: (value: unknown) => void
    reject: (reason?: any) => void
    locking: DialogLock
  }
}

const DIALOGS = [] as DialogsStore
const { subscribe, update } = writable<DialogsStore>(DIALOGS)

const pipeCatch = (e) => e && Promise.reject(e)

export const dialogs = {
  subscribe,
  show(Component: SvelteComponentModule, props: Props = {}): Promise<unknown> {
    const { strict } = props
    delete props.strict

    const promise = new Promise(
      (resolve, reject) =>
        (props.DialogPromise = { resolve, reject, locking: DialogLock.FREE }),
    )

    update((dialogs) => {
      dialogs.push({ Component, props })
      return dialogs
    })

    return strict ? promise : promise.catch(pipeCatch)
  },
  hide(index: number): void {
    update((dialogs) => {
      dialogs.splice(index, 1)
      return dialogs
    })
  },
  has(Component: SvelteComponentModule): boolean {
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
