export declare const ui$: {
  subscribe: (
    this: void,
    run: import('svelte/store').Subscriber<{
      nightMode: boolean
    }>,
    invalidate?:
      | ((
          value?:
            | {
                nightMode: boolean
              }
            | undefined,
        ) => void)
      | undefined,
  ) => import('svelte/store').Unsubscriber
  toggleNightMode(): void
}
