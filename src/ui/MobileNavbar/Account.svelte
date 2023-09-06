<script lang="ts">
  import { SANBASE_ORIGIN } from '@/utils/links'
  import Svg from '@/ui/Svg/svelte'
  import Profile from '@/ui/Profile/svelte'
  import { getCustomer$Ctx } from '@/stores/customer'

  let className = ''
  export { className as class }
  export let user: any
  export let isFullLink: boolean

  const { customer$ } = getCustomer$Ctx()

  $: ({ isPro } = $customer$)

  function getFullLink(link, slug = '') {
    const pathname = link && link.startsWith('/') ? SANBASE_ORIGIN : ''

    return pathname + link + slug
  }
</script>

<section class="column gap-l body-2 {className}">
  {#if user}
    {@const accountLink = isFullLink ? getFullLink('/account') : '/account'}

    <Profile
      {user}
      class="txt-m relative"
      feature="profile"
      source="mobile-nav-menu"
      placeholderSize={24}
    >
      {#if user.username && user.email}
        <div class="body-3 txt-r c-waterloo">{user.email}</div>
      {/if}

      {#if isPro}
        <crown class="row hv-center"><Svg id="crown" w="12" /></crown>
      {/if}
    </Profile>

    <a href={accountLink} on:click={window.__onLinkClick} class="btn-2 row hv-center">
      Account settings
    </a>

    {#if !isPro}
      <a href="/pricing" class="btn-1 btn--orange btn--s row hv-center">
        <Svg id="crown" w="12" class="mrg-s mrg--r" />
        Upgrade
      </a>
    {/if}
  {:else}
    <a href="/sign-up" on:click={window.__onLinkClick} class="btn-2 sign-up row hv-center">
      Sign up
    </a>
    <a href="/login" on:click={window.__onLinkClick} class="btn-2 row hv-center">Log in</a>
  {/if}
</section>

<style>
  Profile {
    --img-size: 48px;
  }

  .sign-up {
    --color: var(--green);
    --color-hover: var(--green-hover);

    --border: var(--green);
  }

  crown {
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    fill: var(--orange);
    background-color: var(--orange-light-2);
    top: 24px;
    left: 24px;
  }

  .btn-2,
  .btn-1 {
    padding: 8px 0;
  }
</style>
