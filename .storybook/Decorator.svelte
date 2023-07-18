<script lang="ts">
  import { Device } from 'webkit/responsive'
  import Dialogs from 'webkit/ui/Dialog/Dialogs.svelte'
  import { UI$$ } from 'webkit/stores/ui'
  import { CurrentUser$$ } from 'webkit/stores/user'
  import { Customer$$ } from 'webkit/stores/customer'
  import { Device$$, getDeviceInfo } from 'webkit/stores/responsive'

  export let currentUser: null | SAN.CurrentUser
  export let customer: undefined | SAN.Customer

  CurrentUser$$(currentUser)
  Customer$$(customer)
  UI$$()
  const { device$ } = Device$$(getDeviceInfo(Device.Desktop))

  document.body.classList.add(Device.Desktop)
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
      & > h1 {
        margin-bottom: 32px;
      }

      & > h2 {
        margin: 32px 0 16px !important;
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
