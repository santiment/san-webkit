<script lang="ts">
  import { trackAuth } from '$lib/analytics/events/auth.js'
  import { notification } from '$ui/core/Notifications/index.js'
  import Option from './Option.svelte'

  type Props = {
    isSignUp?: boolean
    onclick: () => Promise<void>
  }

  const { isSignUp = false, onclick }: Props = $props()

  let loading = $state(false)

  function onLoginClick() {
    if (!('ethereum' in window) || !window.ethereum) {
      return notification.error("We can't detect Metamask!", { content: noMetamask })
    }

    loading = true

    trackAuth('metamask', isSignUp)

    onclick().catch((e) => {
      console.warn(e)
      loading = false
    })
  }
</script>

<Option title="Metamask" {loading} onclick={onLoginClick} icon="metamask" {isSignUp} />

{#snippet noMetamask()}
  <div>
    <p class="mb-2">We can auth you with Metamask account. It's secure and easy.</p>
    <a href="https://metamask.io/#how-it-works" class="link-pointer">How Metamask works?</a>
  </div>
{/snippet}
