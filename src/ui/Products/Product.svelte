<script lang="ts">
  import Svg from '@/ui/Svg/svelte'

  export let id: string
  export let title: string
  export let href: string
  export let desc: string
  export let dimensions
  export let active: boolean
  export let accent: string
  export let note: string | undefined = undefined
  export let isCompact = false

  const [w, h] = dimensions
  const large = !isCompact
</script>

<a
  {href}
  class="product row"
  class:compact={isCompact}
  class:large
  style="--accent:{accent}"
  on:click
>
  {#if large}
    <div class="icon row hv-center mrg-m mrg--r" class:active>
      <Svg illus id="products/{id}" {w} {h} />
    </div>
  {:else}
    <Svg id="pointer" w="14" h="9" class="$style.pointer" />
  {/if}

  <div>
    <h2 class="body-2 txt-m c-black">{title}</h2>
    <p class="c-waterloo">{desc}</p>
    {#if note}
      <span class="note caption">{note}</span>
    {/if}
  </div>
</a>

<style lang="scss">
  .icon {
    width: var(--product-icon-size, 40px);
    min-width: var(--product-icon-size, 40px);
    height: var(--product-icon-size, 40px);
    background: var(--athens);
    border-radius: 4px;
  }

  .product {
    position: relative;
    cursor: pointer;
  }

  .large {
    width: 292px;
    padding: 12px 16px;
    border-radius: 4px;

    &:hover {
      background: var(--athens);

      .icon {
        background-color: var(--white);
      }
    }
  }

  .compact {
    width: 260px;
    margin: 0 0 12px;

    &:last-child {
      margin: 0;
    }

    &:hover {
      --black: var(--accent);
      fill: var(--accent);

      .pointer {
        display: block;
      }
    }
  }

  .pointer {
    position: absolute;
    top: 9px;
    right: 0;
    display: none;
  }

  .note {
    color: var(--orange);
    margin-top: 4px;
    padding: 4px 8px;
    background: var(--orange-light-1);
    border-radius: 4px;
    display: inline-block;
  }

  .active {
    background: var(--product-active-bg, var(--green-light-1)) !important;
    --product-color-1: var(--product-active-1, var(--green));
    --product-color-2: var(--product-active-2, #89e1c9);
    --product-color-3: var(--product-active-1, var(--green));
  }
</style>
