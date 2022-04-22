<script>
  import Svg from '@/ui/Svg/svelte'

  const features = [
    'Sanbase metrics - full historical and present-day data',
    'Access to 20 Sanbase alerts',
    'Access to 20 Sanbase alerts',
    'Access to 20 Sanbase alerts',
    'Access to 20 Sanbase alerts',
    'Access to 20 Sanbase alerts',
    'Access to 20 Sanbase alerts',
    'Access to 20 Sanbase alerts',
  ]
</script>

<div class="plan txt-center">
  <div class="name h4 txt-m c-accent">PRO</div>

  <div class="c-waterloo mrg-l mrg--t mrg--b">Advanced crypto metrics and market insights</div>

  <div class="h2 txt-m mrg-xs mrg--b">
    $49<span class="h4 txt-r c-waterloo mrg-xs mrg--l">/ mo</span>
  </div>

  <div class="body-2 c-waterloo">$44 if billed yearly</div>

  <button class="btn-1 fluid body-2 mrg-l mrg--t mrg--b" on:click>Start 14-day Free trial</button>

  {#each features as feature}
    <div class="row txt-left mrg-l mrg--t">
      <Svg id="checkmark-circle" w="16" class="$style.checkmark" />
      {feature}
    </div>
  {/each}
</div>

<style>
  .plan {
    --accent: var(--orange);
    --accent-hover: var(--orange-hover);
    --accent-light-1: var(--orange-light-1);
  }

  .name {
    padding: 4px 12px;
    background: var(--accent-light-1);
    border-radius: 4px;
    display: inline-block;
  }

  .btn-1 {
    --v-padding: 8px;
  }

  .checkmark {
    margin: 2px 10px 0 0;
    fill: var(--accent);
  }
</style>
