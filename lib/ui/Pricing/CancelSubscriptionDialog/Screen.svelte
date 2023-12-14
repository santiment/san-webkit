<script>
  export let loading
  export let onCancellationClick
  export let onServiceClick
</script>

<section class="txt-center">
  <h2 class="h4 txt-m mrg-xl mrg--b">
    <slot name="title" />
  </h2>

  <div class="help column">
    {#if $$slots.subtitle}
      <h3 class="c-waterloo txt-b mrg-xs mrg--b">
        <slot name="subtitle" />
      </h3>
    {/if}

    <slot name="help" />
  </div>

  <div class="column mrg-xxl mrg--t">
    <button class="cancel btn-2 btn-1 btn--l" class:loading on:click={onCancellationClick}>
      Continue cancellation
    </button>

    <button class="contact btn-2 btn--l mrg-m mrg--t" on:click={onServiceClick}>
      Contact Customer Service
    </button>
  </div>
</section>

<slot name="right" />

<style >/**
@include dac(desktop, tablet, phone) {
  main {
    background: red;
  }
}
*/
/**
@include dacnot(desktop) {
  main {
    background: red;
  }
}
*/
.help {
  padding: 24px 32px;
  background: var(--athens);
  border-radius: 4px;
}

.cancel {
  --border: var(--green);
  --color-hover: var(--green-hover);
}

.contact {
  background: none;
}</style>
