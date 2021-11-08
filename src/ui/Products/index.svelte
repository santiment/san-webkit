<script>
  import Tooltip from '@/ui/Tooltip.svelte'
  import { business } from './business'
  import { chain } from './chain'

  export let isOpened
</script>

<Tooltip activeClass="$style.opened" bind:isOpened>
  <div
    slot="trigger"
    class="mrg-s mrg--r toggle"
    style="background: url({process.env
      .MEDIA_PATH}/illus/products/toggle.svg) no-repeat 50%"
  />

  <div slot="tooltip" class="dropdown row">
    <div class="column mrg-xl mrg--r">
      <h3>SAN Business</h3>
      {#each business as { title, href, desc, logo, onClick }}
        <a {href} class="product" on:click={onClick}>
          <div
            class="icon"
            style="--logo: url({process.env
              .MEDIA_PATH}/illus/products/{logo}.svg)"
          />
          <h2 class="body-2 txt-m">{title}</h2>
          <p>{desc}</p>
        </a>
      {/each}
    </div>

    <div class="column chain">
      <h3>SAN Chain</h3>
      {#each chain as { title, href, desc, logo, active, note }}
        <a {href} class="product">
          <div
            class="icon"
            class:active
            style="--logo: url({process.env
              .MEDIA_PATH}/illus/products/{logo}.svg)"
          />
          <h2 class="body-2 txt-m">{title}</h2>
          <p>{desc}</p>
          {#if note}
            <span class="note">{note}</span>
          {/if}
        </a>
      {/each}
    </div>
  </div>
</Tooltip>

<style>
  .body-2 {
    color: var(--black);
  }

  .toggle {
    width: 32px;
    height: 32px;
    background: url(webkit/illus/products/toggle.svg) no-repeat 50%;
    cursor: pointer;
    border-radius: 4px;
    transition: transform 0.2s ease-in-out;
    margin-right: 40px;
  }
  .opened {
    background-color: var(--athens) !important;
    transform: rotate(90deg);
  }

  .dropdown {
    padding: 32px 32px 24px;
  }

  h3 {
    margin: 0 0 20px;
  }
  h2 {
    color: var(--black);
  }

  h3,
  p {
    color: var(--waterloo);
  }

  .icon {
    width: 40px;
    height: 40px;
    background: var(--logo) no-repeat 50%, var(--athens);
    position: absolute;
    left: 16px;
    top: 12px;
    border-radius: 4px;
  }

  .product {
    width: 292px;
    padding: 12px 16px 12px 68px;
    position: relative;
    cursor: pointer;
    border-radius: 4px;
  }
  .product:hover {
    background: var(--athens);
  }
  .product:hover .icon {
    background-color: var(--white);
  }

  .active {
    background-color: var(--green-light-1) !important;
  }

  .note {
    color: var(--orange);
    margin-top: 4px;
    padding: 1px 8px;
    background-color: var(--orange-light-1);
    border-radius: 4px;
    display: inline-block;
  }
</style>
