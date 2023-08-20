<script lang="ts">
  import { onDestroy, setContext } from 'svelte'
  import { Device } from '@/responsive'
  import Dialogs from '@/ui/Dialog/Dialogs.svelte'
  import { UI$$ } from '@/stores/ui'
  import { CurrentUser$$ } from '@/stores/user'
  import { Customer$$ } from '@/stores/customer'
  import { Device$$, getDeviceInfo } from '@/stores/responsive'
  import Dialog from './Dialog.svelte'
  import { paymentCard$ } from '@/stores/paymentCard'

  export let currentUser: null | SAN.CurrentUser
  export let customer: undefined | SAN.Customer
  export let server: any
  export let ui = undefined as undefined | Record<string, any>
  export let bodyStyle = {} as Record<string, any>

  CurrentUser$$(currentUser)
  Customer$$(customer)
  UI$$(ui)
  const { device$ } = Device$$(getDeviceInfo(Device.Desktop))

  paymentCard$.clear()
  paymentCard$.setDefault()

  document.body.classList.add(Device.Desktop)
  Object.keys(bodyStyle || {}).forEach((key) => {
    document.body.style[key] = bodyStyle[key]
  })

  setContext('Dialog', Dialog)

  onDestroy(() => {
    server?.shutdown()

    Object.keys(bodyStyle || {}).forEach((key) => {
      document.body.style[key] = ''
    })
  })
</script>

<svelte:window on:resize={device$.onResize} />

<slot />

<Dialogs />

<style >/**
@include dac(desktop, tablet, phone) {
  main {
    background: red;
  }
}
*/
/**
@include dacnot(desktop) {
  main {
    background: red;
  }
}
*/
:global(#storybook-root) {
  min-height: 100vh;
}
:global(.sbdocs) :global(h1) {
  margin-bottom: 32px;
}
:global(.sbdocs) :global(*) + :global(h2) {
  margin-top: 32px;
}
:global(.prismjs) {
  font-family: monospace;
}
:global(.monospace) {
  font: var(--caption);
  font-family: monospace !important;
}</style>
