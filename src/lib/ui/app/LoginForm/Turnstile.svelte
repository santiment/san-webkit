<script lang="ts">
  import { onMount } from 'svelte'

  import { newHeadScript } from '$lib/analytics/intercom/utils.js'

  type TProps = { onSuccess?: (token: string) => void; onError?: (error: string) => void }

  let { onSuccess, onError }: TProps = $props()

  let widgetId: ReturnType<(typeof turnstile)['render']>

  export function getToken() {
    return widgetId && turnstile?.getResponse(widgetId)
  }

  onMount(() => {
    let isDestroyed = false

    const headScript = newHeadScript(
      undefined,
      { src: 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit', defer: true },
      mountTurnstile,
    )

    function mountTurnstile() {
      if (isDestroyed) return
      if (!turnstile) return

      widgetId = turnstile.render('#turnstile-container', {
        sitekey: process.env.TURNSTILE_SITEKEY as string,
        callback: onSuccess,
        'error-callback': onError,
      })
    }

    return () => {
      isDestroyed = true
      headScript.remove()

      if (widgetId) {
        turnstile?.remove(widgetId)
      }
    }
  })
</script>

<div id="turnstile-container"></div>
