<script>
  import Button from '$ui/core/Button/index.js'
  import Popover from '$ui/core/Popover/index.js'
</script>

<main class="flex justify-center gap-4 py-40">
  <Popover openOnHover side="bottom" align="start">
    {#snippet children({ props })}
      <Button variant="border" {...props}>Hover Popover</Button>
    {/snippet}

    {#snippet content()}
      <section class="max-w-64">
        This popover opens on hover and its content is aligned with the start of the trigger.
      </section>
    {/snippet}
  </Popover>

  <Button variant="fill">Some Button</Button>

  <Popover openOnHover side="bottom" align="end">
    {#snippet children({ props })}
      <Button variant="border" {...props}>Hover Popover</Button>
    {/snippet}

    {#snippet content()}
      <section class="max-w-64">
        This popover also opens on hover, with content aligned to the end of the trigger.
      </section>
    {/snippet}
  </Popover>
</main>
