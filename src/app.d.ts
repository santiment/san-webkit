// See https://kit.svelte.dev/docs/types#app

import type { TCustomer } from '$lib/ctx/customer/api.ts'
import type { DeviceType } from '$lib/ctx/device/index.ts'

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}

    interface Locals {
      customer: TCustomer | undefined
      theme: 'night-mode' | ''
      device: DeviceType
      isCookiesVisible: boolean
      isLiteVersion: boolean
    }
  }
}

export {}

declare global {
  interface Window {
    Intercom?: (...args: any[]) => void

    getPageType?: (pathname: string) => string

    gtag?: Gtag.Gtag
  }
}
