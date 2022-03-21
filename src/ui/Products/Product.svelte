<script lang="ts">
  import Svg from '@/ui/Svg/svelte'

  export let id
  export let title
  export let href
  export let desc
  export let dimensions
  export let active
  export let accent
  export let note = undefined
  export let isCompact = false

  const [w, h] = dimensions
  const large = !isCompact
</script>

<a {href} class="product" class:compact={isCompact} class:large style="--accent:{accent}" on:click>
  {#if large}
    <div class="icon row hv-center" class:active>
      <Svg illus id="products/{id}" {w} {h} />
    </div>
  {:else}
    <Svg id="pointer" w="14" h="9" class="$style.pointer" />
  {/if}

  <h2 class="body-2 txt-m c-black">{title}</h2>
  <p class="c-waterloo">{desc}</p>
  {#if note}
    <span class="note">{note}</span>
  {/if}
</a>

<style lang="scss">
  .icon {
    width: 40px;
    height: 40px;
    background: var(--athens);
    position: absolute;
    left: 16px;
    top: 12px;
    border-radius: 4px;
  }

  .product {
    width: 292px;
    position: relative;
    cursor: pointer;
  }
  .large {
    padding: 12px 16px 12px 68px;
    border-radius: 4px;

    &:hover {
      background: var(--athens);

      .icon {
        background-color: var(--white);
      }
    }
  }

  .compact {
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
    padding: 1px 8px;
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
