<script context="module">import { track } from './../../analytics';
import { saveBoolean } from './../../utils/localStorage';
import { setCookie } from './../../utils/cookie';
import { dialogs } from './../../ui/Dialog';
import { IsMobile } from './../../stores/responsive';
import { setSessionValue } from './../../stores/utils';
import ManageCookiesDialog from './index.svelte';
export const COOKIE_POLICY_ACCEPTED = 'COOKIE_POLICY_ACCEPTED';
export const Cookies = {
    Basic: 'BASIC_COOKIES',
    Functional: 'FUNCTIONAL_COOKIES',
    Performance: 'PERFORMANCE_COOKIES',
};
export const showManageCookiesDialog = (props) => dialogs.show(ManageCookiesDialog, Object.assign({ strict: true }, props));
export function applyCookies(isFunctionalAccepted = false, isPerformanceAccepted = false) {
    saveBoolean(Cookies.Basic, true);
    saveBoolean(Cookies.Functional, isFunctionalAccepted);
    saveBoolean(Cookies.Performance, isPerformanceAccepted);
    saveBoolean(COOKIE_POLICY_ACCEPTED, true);
    setCookie(COOKIE_POLICY_ACCEPTED, true);
    setSessionValue({ isCookiesVisible: false });
    track.event('Cookie policy accepted', { category: 'User' });
    window.gtag?.('consent', 'update', {
        security_storage: 'granted',
        ad_storage: isFunctionalAccepted ? 'granted' : 'denied',
        ad_user_data: isFunctionalAccepted ? 'granted' : 'denied',
        ad_personalization: isFunctionalAccepted ? 'granted' : 'denied',
        analytics_storage: isFunctionalAccepted ? 'granted' : 'denied',
        functionality_storage: isFunctionalAccepted ? 'granted' : 'denied',
        performance_cookies: isPerformanceAccepted ? 'granted' : 'denied',
    });
}
</script>

<script>import Dialog from './../../ui/Dialog';
import Toggle from './../../ui/Toggle.svelte';
import Section from './Section.svelte';
export let DialogPromise;
let closeDialog;
let isFunctionalAccepted = false;
let isPerformanceAccepted = false;
const toggleHandler = (fn) => (e) => {
    e.stopPropagation();
    fn();
};
function onSaveClick() {
    applyCookies(isFunctionalAccepted, isPerformanceAccepted);
    DialogPromise.resolve();
    closeDialog();
}
function onAllowAllClick() {
    applyCookies(true, true);
    DialogPromise.resolve();
    closeDialog();
}
</script>

<Dialog
  {...$$props}
  title="Cookie settings"
  bind:closeDialog
  class="dialog-YkSLv0"
  titleClassName="title-F2essR"
>
  <div class="cookies" class:body-2={$IsMobile}>
    <p>
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

    <div class="mrg-xl mrg--b" />

    <Section
      title="Strictly Necessary Cookies"
      description="These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information."
    >
      <div class="c-black">Always Active</div>
    </Section>

    <Section
      title="Functional Cookies"
      description="These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance."
    >
      <Toggle
        isActive={isFunctionalAccepted}
        on:click={toggleHandler(() => (isFunctionalAccepted = !isFunctionalAccepted))}
      />
    </Section>

    <Section
      title="Performance Cookies"
      description="These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly."
    >
      <Toggle
        isActive={isPerformanceAccepted}
        on:click={toggleHandler(() => (isPerformanceAccepted = !isPerformanceAccepted))}
      />
    </Section>
  </div>
  <div class="bottom row txt-center" class:body-2={$IsMobile}>
    <button class="btn--s {$IsMobile ? 'btn-2' : 'btn-1'}" on:click={onSaveClick}>
      Save cookie settings
    </button>
    <button class="btn--s {$IsMobile ? 'btn-1' : 'btn-2'}" on:click={onAllowAllClick}
      >Allow all</button
    >
  </div>
</Dialog>

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
:global(.dialog-YkSLv0) {
  max-width: 600px !important;
}

.cookies {
  padding: 20px 24px 0;
  height: 393px;
  overflow-y: auto;
}

p {
  color: var(--fiord);
}

.bottom {
  padding: 20px 24px;
  gap: 12px;
}

:global(body:not(.desktop)) :global(.dialog-YkSLv0) {
  height: 100%;
}
:global(body:not(.desktop)) :global(.title-F2essR) {
  padding: 14px 16px !important;
  color: var(--fiord);
}
:global(body:not(.desktop)) .cookies {
  height: 100%;
  padding: 24px 16px 0;
}
:global(body:not(.desktop)) .btn--s {
  padding: 8px 0;
}
:global(body:not(.desktop)) .bottom {
  padding: 24px 20px;
  flex-direction: column-reverse;
}</style>
