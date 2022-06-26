<script>
  import { onMount } from 'svelte'
  import Svg from '@/ui/Svg/svelte'
  import Background from './Background.svelte'

  let hasPrevious = true
  let hasNext = !true

  let highlightedNode
  $: console.log(highlightedNode)

  function onClose() {
    highlightedNode = null
  }

  function onNext() {}

  function onPrevious() {}

  onMount(() => {
    highlightedNode = document.querySelector('#test')
  })
</script>

<button class="btn-2" id="test">Test</button>

{#if highlightedNode}
  {@const rect = highlightedNode.getBoundingClientRect()}

  <Background {rect} />

  <div class="border" style="top:{rect.bottom + 14}px;left:{rect.x - 7}px">
    <h2 class="body-1 txt-m mrg-m mrg--b">New master select</h2>

    <button class="close btn" on:click={onClose}>
      <Svg id="close" w="12" />
    </button>

    <p>Paste the concrete smart contract address for fetching relevant metrics for it</p>

    <div class="row v-center mrg-xl mrg--t">
      <div class="dots mrg-a mrg--r">1</div>

      {#if hasPrevious}
        <div class="btn-2 mrg-s mrg--r" on:click={onPrevious}>Previous</div>
      {/if}

      <div class="btn-1 btn--accent" on:click={hasNext ? onNext : onClose}>
        {hasNext ? 'Next' : 'Close'}
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .border {
    position: absolute;
    z-index: 99999;
    background: var(--white);
    padding: 20px 24px 32px;
    max-width: 400px;
  }

  h2 {
    margin-right: 30px;
  }

  .close {
    position: absolute;
    top: 23px;
    right: 23px;
    --fill: var(--waterloo);
    --fill-hover: var(--green);
  }
</style>
