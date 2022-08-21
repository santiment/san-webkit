<script>
  import Svg from '@/ui/Svg/svelte'
  import { dataPreloader } from '@/ui/PaymentDialog/index.svelte'

  export let title
  export let label
  export let price
  export let billing
  export let discount
  export let badge
  export let link
  export let badgeIcon
  export let action, subaction
  export let green = false
  export let orange = false
  export let yellow = false
  export let disabled = false
  export let isChecked = false
  export let isActive = false
  export let onActionClick, onSubactionClick
</script>

<article class="relative fluid" class:green class:orange class:yellow>
  <h4 class="caption txt-m c-waterloo mrg-l mrg--b">{label}</h4>
  <h2 class="h4 txt-m mrg-xs mrg--b">{title}</h2>

  <slot />

  {#if badge || isChecked}
    <div class="badge txt-m row hv-center" class:check={isChecked} class:active={isActive}>
      {#if isChecked}
        <Svg id="checkmark-large" w="14" h="10" />
      {:else}
        {#if badgeIcon}<Svg {...badgeIcon} class="mrg-s mrg--r" />{/if}
        {badge}
      {/if}
    </div>
  {/if}

  <div class="actions mrg-xl mrg--t">
    <svelte:element
      this={link ? 'a' : 'button'}
      class="btn-1 v-center"
      class:disabled
      {...link}
      on:click={onActionClick}
      use:dataPreloader
    >
      {action}
      {#if link}
        <Svg id="external-link" w="12" class="mrg-s mrg--l" />
      {/if}
    </svelte:element>

    {#if subaction}
      <button class="btn-2 mrg-m mrg--l" on:click={onSubactionClick}>{subaction}</button>
    {/if}
  </div>

  {#if billing && !(discount && subaction)}
    <div class="billing caption txt-m c-waterloo txt-right">
      {billing}:
      <h3 class="body-1 c-black">
        {price}{#if discount}/mo{/if}
      </h3>
    </div>
  {/if}
</article>

<style lang="scss">
  article {
    padding: 16px 16px 16px 24px;
    border-radius: 8px;
    background: var(--athens);
    min-width: 350px;

    & > :global(p) {
      max-width: 318px;
      color: var(--fiord);
    }
  }

  .green {
    background: var(--green-light-1);
    --badge-color: var(--green);
  }

  .orange {
    background: var(--orange-light-1);
    --badge-color: var(--orange);
  }

  .green,
  .orange {
    --primary: var(--orange);
    --primary-hover: var(--orange-hover);
    --badge: var(--white);
  }

  .yellow {
    background: var(--yellow-light-1);
    --primary: var(--fiord);
    --primary-hover: var(--black);

    & > :global(p) {
      color: var(--waterloo);
    }
  }

  .disabled {
    --color: var(--mystic);
    --primary: var(--athens);
    border: 1px solid var(--porcelain);
  }

  .badge {
    background: var(--badge, var(--porcelain));
    --color: var(--badge-color, var(--fiord));
    fill: var(--color);
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 6px 12px;
    border-radius: 6px;
  }

  .check {
    border-radius: 50%;
    width: 32px;
    height: 32px;
  }

  .active {
    fill: var(--white);
    background: var(--green);
  }

  .btn-1 {
    display: inline-flex;
    --bg: var(--primary, var(--green));
    --bg-hover: var(--primary-hover, var(--green-hover));
  }

  .btn-2 {
    --bg: var(--white);
  }

  .billing {
    position: absolute;
    bottom: 16px;
    right: 16px;
  }
</style>
