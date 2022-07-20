<script>
  export let reasons
  export let loading
  export let disabled
  export let isFeedbackScreen
  export let onCancellationClick
  export let onServiceClick
</script>

<section class="txt-center">
  <h2 class="h4 txt-m mrg-xl mrg--b">
    <slot name="title" />
  </h2>

  <div class="help column">
    <h3 class="c-waterloo txt-b mrg-xs mrg--b">
      <slot name="subtitle" />
    </h3>

    <slot name="help" />
  </div>

  <div
    class="column mrg-xxl mrg--t"
    class:reveal={isFeedbackScreen}
    class:revealed={isFeedbackScreen && reasons.size > 0}
  >
    <button
      class="cancel btn-2 btn-1 btn--l"
      class:disabled
      class:loading
      on:click={onCancellationClick}
    >
      Continue cancellation
    </button>

    <button class="contact btn-2 btn--l mrg-m mrg--t" class:disabled on:click={onServiceClick}>
      Contact Customer Service
    </button>
  </div>
</section>

<slot name="right" />

<style lang="scss">
  .help {
    padding: 24px 32px;
    background: var(--athens);
    border-radius: 4px;
  }

  .cancel {
    --border: var(--green);
    --color-hover: var(--green-hover);

    &.disabled {
      --border: var(--porcelain);
      background: var(--athens);
    }
  }

  .contact {
    background: none;
  }
</style>
