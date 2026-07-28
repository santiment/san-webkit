<script>
  import Button from '$ui/core/Button/index.js'
  import Popover from '$ui/core/Popover/index.js'
</script>

<main class="flex justify-center py-40">
  <Popover side="bottom" align="start" matchTriggerWidth contentProps={{ alignOffset: -24 }}>
    {#snippet children({ props })}
      <Button variant="border" {...props}>Long Trigger Button</Button>
    {/snippet}

    {#snippet content()}
      <section>
        This content matches the trigger width and has a <strong>24px</strong> cross-axis offset.
      </section>
    {/snippet}
  </Popover>
</main>
