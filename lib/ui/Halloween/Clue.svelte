<script>let isClueShown = false;
</script>

<button class="btn c-waterloo keep mrg-m mrg--t" on:click={() => (isClueShown = true)}>
  Keep hunting to double down and get 54% discount
</button>
{#if isClueShown}
  <div class="divider fluid mrg-xxl mrg--t mrg--b" />
  <div class="clue-wrapper">
    <p class="mrg-l mrg--b">
      We’ve hidden one more treasure somewhere on the Sanbase. Get through the riddle and find a
      Special offer if you want to double your discount!
    </p>
    <div class="clue">
      <p class="txt-m">Here is the clue:</p>
      <p>Try seeking information about SAN token to find an extra discount option</p>
    </div>
  </div>
{/if}

<style>
  .divider {
    height: 1px;
    background-color: var(--porcelain);
  }

  .clue-wrapper {
    padding: 0 24px;
  }

  .clue {
    border: 1px solid var(--orange);
    border-radius: 6px;
    padding: 12px 44px;
  }

  .keep {
    --color-hover: var(--casper);
    max-width: 228px;
    text-decoration: underline;
  }
</style>
