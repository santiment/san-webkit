<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import Breadcrumbs from './Breadcrumbs.svelte'
  import { Page } from './types'
  import Aside from './Aside.svelte'

  export let page: Page
  export let title: string
</script>

<div class="wrapper row">
  <main class="column">
    <Breadcrumbs bind:page />

    <h2 class="h4 txt-m mrg-xl mrg--b">{title}</h2>

    <slot />

    <nav class="row justify mrg-a mrg--t">
      <button
        class="pagination btn row v-center"
        class:disabled={page < Page.Top}
        on:click={() => (page -= 1)}
      >
        <Svg id="pointer" w="14" h="8" class="$style.back" />
        Back
      </button>

      <button class="pagination btn row v-center" on:click={() => (page += 1)}>
        Next
        <Svg id="pointer" w="14" h="8" />
      </button>
    </nav>
  </main>

  <Aside />
</div>

<style lang="scss">
  .wrapper {
    flex: 1;
  }

  main {
    flex: 1;
    padding: 24px 48px;
    max-height: 549px;
    overflow: auto;
  }

  .pagination {
    gap: 8px;
    margin: 50px 0 0;
    background: none !important;
    --fill: var(--waterloo);
    --color-hover: var(--green);

    &.disabled {
      fill: var(--mystic);
    }
  }
  .back {
    transform: rotate(180deg);
  }
</style>
