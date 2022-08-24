export declare const ANNUAL_DISCOUT_FRAGMENT =
  '\n  annualDiscount:checkAnnualDiscountEligibility {\n    isEligible\n    discount {\n      percentOff\n      expireAt\n    }\n  }\n'
export declare const queryCustomerData: () => Promise<any>
export declare type CustomerData = {
  isLoggedIn: boolean
  sanBalance: number
  isEligibleForTrial: boolean
  annualDiscount?: SAN.AnnualDiscount
}
export declare const DEFAULT: CustomerData
export declare const customerData$: {
  fetched: boolean
  set: (this: void, value: CustomerData) => void
  setValue(value: any): any
  setDefault(): void
  query(): Promise<any>
  subscribe(
    run: import('svelte/store').Subscriber<CustomerData>,
    invalidate: any,
  ): import('svelte/store').Unsubscriber
  clear(): void
  refetch(): any
}
