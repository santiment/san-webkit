// See https://kit.svelte.dev/docs/types#app

import type { TCustomer } from '$lib/ctx/customer/api.ts'
import type { DeviceInfo } from '$lib/ctx/device/index.svelte.ts'

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
      device: DeviceInfo
      isCookiesVisible: boolean
      isLiteVersion: boolean
    }
  }

  type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
    k: infer I,
  ) => void
    ? I
    : never
}

export {}

declare global {
  interface Window {
    Intercom?: (...args: any[]) => void
    intercomSettings: any

    getPageType?: (pathname: string) => string

    gtag?: Gtag.Gtag

    __updateLegacyStoresOnPlanChange?: any

    __trackLegacyWebkitEvent?: (eventName: string, data: any) => void

    onGdprAccept?: () => void

    __SESSION__?: object
  }

  namespace NodeJS {
    interface ProcessEnv {
      IS_DEV_MODE: boolean
      IS_LOGGING_ENABLED: boolean

      IS_PROD_BACKEND: boolean

      BULLETSHELL: boolean
    }
  }
}
