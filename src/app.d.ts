// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
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
