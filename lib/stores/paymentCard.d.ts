export declare const paymentCard$: {
  set: (this: void, value: SAN.PaymentCard | null) => void
  query(): Promise<void>
  subscribe(
    run: import('svelte/store').Subscriber<SAN.PaymentCard | null>,
    invalidate?: any,
  ): import('svelte/store').Unsubscriber
  clear(): void
  refetch(): Promise<void>
  setDefault(): void
}
