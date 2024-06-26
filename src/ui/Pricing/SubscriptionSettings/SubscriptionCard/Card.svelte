<script>
  import Svg from '@/ui/Svg/svelte'
  import { dataPreloader } from '@/ui/PaymentDialog/index.svelte'

  export let title
  export let label = ''
  export let price
  export let billingTitle = ''
  export let discount
  export let badge
  export let link
  export let badgeIcon
  export let isFullAccess = false
  export let action, subaction
  export let green = false
  export let orange = false
  export let yellow = false
  export let blue = false
  export let disabled = false
  export let isChecked = false
  export let isActive = false
  export let shouldHideBillingInfo = false
  export let onActionClick, onSubactionClick
</script>

<article
  class="relative column fluid"
  class:green
  class:orange
  class:yellow
  class:blue
  class:wide={isFullAccess}
>
  <h4 class="caption txt-m c-waterloo mrg-l mrg--b">{label}</h4>
  <h2 class="h4 txt-m mrg-xs mrg--b">{title}</h2>

  <slot />

  {#if badge || isChecked}
    <div class="badge txt-m row hv-center body-3" class:check={isChecked} class:active={isActive}>
      {#if isChecked}
        <Svg id="checkmark-large" w="14" h="10" />
      {:else}
        {#if badgeIcon}<Svg {...badgeIcon} class="mrg-s mrg--r" />{/if}
        {badge}
      {/if}
    </div>
  {/if}

  <div class="actions row v-center mrg-a mrg--t">
    {#if onActionClick}
      <svelte:element
        this={link ? 'a' : 'button'}
        role={link ? 'link' : 'button'}
        tabindex="0"
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
    {/if}

    {#if subaction && onSubactionClick}
      <button class="btn-2 subaction mrg-m mrg--l" on:click={onSubactionClick}>{subaction}</button>
    {/if}

    {#if billingTitle && !shouldHideBillingInfo}
      <div class="billing caption txt-m c-waterloo txt-right mrg-a mrg--l">
        {billingTitle}
        <h3 class="body-1 price c-black">
          {price}{#if discount}/mo{/if}
        </h3>
      </div>
    {/if}
  </div>
</article>

<style lang="scss">
  article {
    padding: 16px 16px 16px 24px;
    border-radius: 8px;
    background: var(--athens);

    & > :global(p) {
      color: var(--fiord);
    }
  }

  .wide {
    & > :global(p) {
      max-width: 300px;
    }
  }

  .green {
    background: var(--green-light-1);
    --badge-color: var(--green);
    --accent: var(--green);
  }

  .orange {
    background: var(--orange-light-1);
    --badge-color: var(--orange);
    --accent: var(--orange);
  }

  .blue {
    background: var(--blue-light-1);
    --primary: var(--blue);
    --primary-hover: var(--blue-hover);
    --accent: var(--blue);
    --badge: var(--white);
    --badge-color: var(--blue);
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

  .actions {
    padding-top: 22px;
  }

  .btn-1 {
    display: inline-flex;
    --bg: var(--primary, var(--green));
    --bg-hover: var(--primary-hover, var(--green-hover));
  }

  .btn-2 {
    --bg: var(--white);
    --v-padding: 7px;
  }

  :global(.phone-xs),
  :global(.phone) {
    .btn-1 {
      --v-padding: 8px;
    }

    h2 {
      font: var(--h3);
    }

    .actions {
      padding-top: 16px;
      flex-direction: column;
      align-items: flex-start;
    }

    .subaction {
      margin: 8px 0 0 0;
    }

    h4,
    .billing {
      font: 500 var(--body-3);
    }

    h4 {
      margin: 6px 0;
    }

    .billing {
      display: flex;
      align-items: center;
      margin-top: 12px;
    }

    .price {
      margin-left: 8px;
      font: 500 var(--h4);
    }
  }
</style>
