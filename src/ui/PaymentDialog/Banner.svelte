<script lang="ts">
  export let name: string
  export let price: string
</script>

<div class="banner mrg-l mrg--b">
  <div class="txt-m mrg-xs mrg--b">Enjoy your 14-day free trial of Sanbase {name}!</div>
  <div>
    Your card will be charged <span class="txt-b">{price}</span> after the trial period ends. You
    won't be charged if you cancel anytime before <span class="txt-b">03/03/22</span>
  </div>
</div>

<style>
  .banner {
    background: var(--green-light-1);
    padding: 16px 24px;
  }
</style>
