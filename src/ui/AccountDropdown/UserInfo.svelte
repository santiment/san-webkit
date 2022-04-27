<script>
  import Svg from '@/ui/Svg/svelte'
  import { checkIsActiveSubscription } from '@/utils/subscription'
  import ProfileNames from '@/ui/Profile/Names.svelte'

  export let user

  const subscriptions = user.subscriptions.filter(checkIsActiveSubscription)
</script>

<section>
  <ProfileNames {user} />

  <div class="caption c-waterloo">
    {#if subscriptions.length === 0}
      <a
        class="upgrade btn-2 btn-1 btn--orange btn--s mrg-m mrg--t v-center body-3"
        href="https://app.santiment.net/pricing"
        on:click={window.__onLinkClick}
      >
        <Svg id="crown" w="13" h="10" class="mrg-s mrg--r" />
        Upgrade
      </a>
    {/if}
  </div>
</section>

<style>
  section {
    padding: 13px 20px 16px 16px;
    --img-size: 40px;
  }

  a {
    white-space: nowrap;
  }

  .upgrade {
    display: inline-flex;
  }
</style>
