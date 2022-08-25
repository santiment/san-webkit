export declare const subscription$: {
  set: (this: void, value: SAN.Subscription | null) => void
  query(): Promise<void>
  subscribe(
    run: import('svelte/store').Subscriber<SAN.Subscription | null>,
    invalidate: any,
  ): import('svelte/store').Unsubscriber
  clear(): void
  refetch(): Promise<void>
}
