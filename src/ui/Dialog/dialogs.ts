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

const { subscribe, update } = writable<DialogsStore>([])

const pipeCatch = (e) => e && Promise.reject(e)

export const dialogs = {
  subscribe,
  show(Component: SvelteComponentModule, props: any = {}): Promise<unknown> {
    const promise = new Promise(
      (resolve, reject) =>
        (props.DialogPromise = { resolve, reject, locking: DialogLock.FREE }),
    )

    update((dialogs) => {
      dialogs.push({ Component, props })
      return dialogs
    })

    return promise.catch(pipeCatch)
  },
  hide(index: number): void {
    update((dialogs) => {
      dialogs.splice(index, 1)
      return dialogs
    })
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
