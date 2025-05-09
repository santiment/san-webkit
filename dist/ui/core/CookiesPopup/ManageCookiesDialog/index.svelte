<script module lang="ts">
  import { track } from '../../../../analytics/index.js'
  import { saveBoolean } from '../../../../utils/localStorage.js'
  import { setCookie } from '../../../../utils/cookies.js'

  import Component from './index.svelte'

  export const COOKIE_POLICY_ACCEPTED = 'COOKIE_POLICY_ACCEPTED'

  export const Cookies = {
    Basic: 'BASIC_COOKIES',
    Functional: 'FUNCTIONAL_COOKIES',
    Performance: 'PERFORMANCE_COOKIES',
  } as const

  export const showManageCookiesDialog$ = () => dialogs$.new(Component)

  export function applyCookies(isFunctionalAccepted = false, isPerformanceAccepted = false) {
    saveBoolean(Cookies.Basic, true)
    saveBoolean(Cookies.Functional, isFunctionalAccepted)
    saveBoolean(Cookies.Performance, isPerformanceAccepted)
    saveBoolean(COOKIE_POLICY_ACCEPTED, true)
    setCookie(COOKIE_POLICY_ACCEPTED, true)

    track.event('Cookie policy accepted', { category: 'User' })

    window.gtag?.('consent' as any, 'update', {
      security_storage: 'granted',
      ad_storage: isFunctionalAccepted ? 'granted' : 'denied',
      ad_user_data: isFunctionalAccepted ? 'granted' : 'denied',
      ad_personalization: isFunctionalAccepted ? 'granted' : 'denied',
      analytics_storage: isFunctionalAccepted ? 'granted' : 'denied',
      functionality_storage: isFunctionalAccepted ? 'granted' : 'denied',
      performance_cookies: isPerformanceAccepted ? 'granted' : 'denied',
    })
  }
</script>

<script lang="ts">
  import Button from '../../Button/Button.svelte'
  import Dialog, { dialogs$, type TDialogProps } from '../../Dialog/index.js'
  import { useDeviceCtx } from '../../../../ctx/device/index.svelte.js'
  import { cn } from '../../../utils/index.js'
  import Switch from '../../Switch/index.js'

  import Section from './Section.svelte'

  const { resolve, Controller }: TDialogProps = $props()

  const { device } = useDeviceCtx()

  let isFunctionalAccepted = $state(false)
  let isPerformanceAccepted = $state(false)

  function onSaveClick() {
    applyCookies(isFunctionalAccepted, isPerformanceAccepted)
    resolve()
    Controller.close(true)
  }

  function onAllowAllClick() {
    applyCookies(true, true)
    resolve()
    Controller.close(true)
  }
</script>

<Dialog class="mx-auto flex max-w-[600px] flex-col">
  <header
    class="flex items-center justify-between border-b px-5 py-3 md:px-4 md:py-3.5 md:text-fiord"
  >
    <h2 class="text-base">Cookie settings</h2>
    <Button
      icon="close"
      class="size-3 fill-waterloo"
      iconSize={12}
      onclick={() => Controller.close(true)}
    />
  </header>
  <div
    class={cn(
      'h-[393px] overflow-y-auto px-6 pb-0 pt-5 md:h-full md:px-4 md:pt-6',
      device.$.isMobile && 'text-base',
    )}
  >
    <p class="text-fiord">
      When you visit our website, we may store cookies on your browser for your security and to help
      us better understand user behavior and inform us about which parts of our website you have
      visited. The information does not usually directly identify you, but it can give you a safe
      and more personalized web experience. Because we respect your right to privacy, you can choose
      not to allow some types of cookies. Blocking some types of cookies may impact your experience
      on the site. <a
        href="https://santiment.net/cookies/"
        target="_blank"
        rel="noreferrer"
        class="link-pointer">Learn more</a
      >
    </p>

    <div class="mb-6"></div>

    <Section
      title="Strictly Necessary Cookies"
      description="These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information."
    >
      <div class="text-black">Always Active</div>
    </Section>

    <Section
      title="Functional Cookies"
      description="These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance."
    >
      <Switch
        checked={isFunctionalAccepted}
        onclick={(event) => event.stopPropagation()}
        onCheckedChange={() => (isFunctionalAccepted = !isFunctionalAccepted)}
      />
    </Section>

    <Section
      title="Performance Cookies"
      description="These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly."
    >
      <Switch
        checked={isPerformanceAccepted}
        onclick={(event) => event.stopPropagation()}
        onCheckedChange={() => (isPerformanceAccepted = !isPerformanceAccepted)}
      />
    </Section>
  </div>
  <div
    class={cn(
      'flex gap-3 px-6 py-5 md:flex-col-reverse md:px-5 md:py-6 [&>button]:justify-center [&>button]:px-3 md:[&>button]:px-2 md:[&>button]:py-2',
      device.$.isMobile && 'text-base',
    )}
  >
    <Button variant={device.$.isMobile ? 'border' : 'fill'} onclick={onSaveClick}>
      Save cookie settings
    </Button>
    <Button variant={device.$.isMobile ? 'fill' : 'border'} onclick={onAllowAllClick}>
      Allow all
    </Button>
  </div>
</Dialog>
