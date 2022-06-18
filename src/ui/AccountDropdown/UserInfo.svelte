<script>
  import { checkIsActiveSubscription } from '@/utils/subscription'
  import ProfileNames from '@/ui/Profile/Names.svelte'

  export let user

  const { subscription } = user
  const hasActiveSubscription = subscription && checkIsActiveSubscription(subscription)
</script>

<section>
  <ProfileNames {user} />

  <div class="caption c-waterloo">
    {#if !hasActiveSubscription}
      <a
        class="upgrade btn-1 btn--orange btn--s mrg-m mrg--t v-center body-3"
        href="https://app.santiment.net/pricing"
        on:click={window.__onLinkClick}
      >
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
