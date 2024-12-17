<script module lang="ts">
  export const CookiesStyle = {
    API: '--fill: #dae0fd; --shadow: #5275ff;',
    SHEETS: '--fill: #b0ebdb; --shadow: #21b074;',
  } as const

  type TCookiesStyle = typeof CookiesStyle
  type TCookiesStyles = TCookiesStyle[keyof TCookiesStyle]
</script>

<script lang="ts">
  import { onMount } from 'svelte'
  import {
    showManageCookiesDialog$,
    COOKIE_POLICY_ACCEPTED,
    applyCookies,
  } from './ManageCookiesDialog/index.svelte'
  import Svg from '$ui/core/Svg/Svg.svelte'
  import { getSavedBoolean } from '$lib/utils/localStorage.js'
  import Button from '$lib/ui/core/Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'

  const {
    class: className = '',
    style,
    isVisible: initIsVisible = !getSavedBoolean(COOKIE_POLICY_ACCEPTED),
  }: {
    class?: string
    style?: string | TCookiesStyles
    isVisible?: boolean
  } = $props()

  const showManageCookiesDialog = showManageCookiesDialog$()

  let isVisible = $state<boolean>(initIsVisible)

  function onAllowAllClick() {
    applyCookies(true, true)
    isVisible = false
  }

  onMount(() => {
    window.gtag?.('consent' as any, 'default', {
      security_storage: 'granted',
      functionality_storage: 'denied',
      performance_cookies: 'denied',
      analytics_storage: 'granted',

      // Consent v2
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    })
  })
</script>

{#if isVisible}
  <div
    class={cn(
      'fixed bottom-5 left-5 right-0 z-[101] max-w-[450px] rounded border bg-white pb-5 pl-[110px] pr-[43px] pt-5 shadow md:bottom-0 md:left-0 md:max-w-full md:rounded-b-none md:rounded-t-[10px] md:px-5 md:py-6 md:text-center md:text-base',
      className,
    )}
    {style}
  >
    <Svg
      illus
      id="cookies"
      class="absolute left-6 inline-block !h-[88px] !w-[70px] md:static md:!h-[128px] md:!w-[102px] md:rotate-[270deg]"
    />
    <h2 class="mb-2 text-base font-medium md:mb-4 md:text-[20px] md:leading-[30px]">
      We are using cookies to improve your experience!
    </h2>
    <p class="mb-6 text-waterloo">
      By clicking “Allow all”, you agree to use of all cookies. Visit our
      <a href="https://santiment.net/cookies/" target="_blank" rel="noreferrer" class="link-pointer"
        >Cookies Policy</a
      > to learn more.
    </p>
    <footer
      class="flex gap-4 md:flex-col md:gap-3 [&>button]:justify-center md:[&>button]:w-full md:[&>button]:p-2.5"
    >
      <Button variant="fill" onclick={onAllowAllClick}>Allow all</Button>
      <Button
        variant="border"
        onclick={() => showManageCookiesDialog({}).then(() => (isVisible = false))}
        >Manage cookies</Button
      >
    </footer>
  </div>
{/if}
