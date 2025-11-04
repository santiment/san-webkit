<script lang="ts">
  import { onMount } from 'svelte'

  import { newHeadScript } from '$lib/analytics/intercom/utils.js'
  import { controlledPromisePolyfill } from '$lib/utils/promise.js'

  let widgetId: ReturnType<(typeof turnstile)['render']>
  let controller = controlledPromisePolyfill<string>()

  export function getToken() {
    return controller.promise
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
        callback: (token) => controller.resolve(token),
        'error-callback': (error) => {
          console.error(error)
          controller.reject(error)
        },
        'expired-callback': () => {
          controller.reject('expired-callback')
          turnstile.reset()

          controller = controlledPromisePolyfill<string>()
        },
      })
    }

    return () => {
      isDestroyed = true
      headScript.remove()
      controller.reject()

      if (widgetId) {
        turnstile?.remove(widgetId)
      }
    }
  })
</script>

<div id="turnstile-container"></div>
