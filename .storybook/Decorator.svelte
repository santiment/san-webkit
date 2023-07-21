<script lang="ts">
  import { setContext } from 'svelte'
  import { Device } from '@/responsive'
  import Dialogs from '@/ui/Dialog/Dialogs.svelte'
  import { UI$$ } from '@/stores/ui'
  import { CurrentUser$$ } from '@/stores/user'
  import { Customer$$ } from '@/stores/customer'
  import { Device$$, getDeviceInfo } from '@/stores/responsive'
  import Dialog from './Dialog.svelte'

  export let currentUser: null | SAN.CurrentUser
  export let customer: undefined | SAN.Customer

  CurrentUser$$(currentUser)
  Customer$$(customer)
  UI$$()
  const { device$ } = Device$$(getDeviceInfo(Device.Desktop))

  document.body.classList.add(Device.Desktop)

  setContext('Dialog', Dialog)
</script>

<svelte:window on:resize={device$.onResize} />

<slot />

<Dialogs />

<style lang="scss">
  :global {
    #storybook-root {
      min-height: 100vh;
    }

    .sbdocs {
      & h1 {
        margin-bottom: 32px;
      }

      & h2 {
        // margin: 32px 0 16px !important;
      }

      * + h2 {
        margin-top: 32px;
      }
    }

    .prismjs {
      font-family: monospace;
    }

    .monospace {
      font: var(--caption);
      font-family: monospace !important;
    }
  }
</style>
