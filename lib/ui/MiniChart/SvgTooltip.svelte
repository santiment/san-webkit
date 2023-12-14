<script>export let valueFormatted = '';
</script>

<tooltip class="c-fiord">
  {#if $$slots.value}
    <slot name="value" />
  {:else if valueFormatted}
    {valueFormatted}
  {/if}
</tooltip>

<style>
  tooltip {
    position: absolute;
    top: 0;
    left: 0;
    background: color-mix(in srgb, var(--white) 80%, transparent);
    border-radius: 4px;
    padding: 2px 4px;
    pointer-events: none;
  }
</style>
