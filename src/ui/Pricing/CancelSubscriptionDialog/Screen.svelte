<script>
  export let loading
  export let isFeedbackScreen
  export let onCancellationClick
  export let onServiceClick
</script>

<section class="txt-center">
  <h2 class="h4 mrg-xl mrg--b">
    <slot name="title" />
  </h2>

  <div class="help column">
    <h3 class="txt-m mrg-xs mrg--b row v-center">
      <slot name="subtitle" />
    </h3>

    <slot name="help" />
  </div>

  <div
    class="column mrg-xxl mrg--t"
    class:reveal={isFeedbackScreen}
    class:revealed={isFeedbackScreen}
  >
    <button
      class="cancel btn-2 btn-1 btn--l"
      class:loading
      class:disabled={loading}
      on:click={onCancellationClick}
    >
      Continue cancellation
    </button>

    <button class="contact btn-2 btn--l mrg--t mrg-l" on:click={onServiceClick}>
      Contact Customer Service
    </button>
  </div>
</section>

<slot name="right" />

<style lang="scss">
  h3 {
    color: var(--rhino);
  }

  .help {
    min-width: 385px;
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
