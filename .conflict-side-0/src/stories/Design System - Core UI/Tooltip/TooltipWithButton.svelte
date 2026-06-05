<script>
  import Button from '$ui/core/Button/Button.svelte'
  import Tooltip from '$ui/core/Tooltip/Tooltip.svelte'
</script>

<main class="flex justify-center gap-4 py-40">
  <Tooltip closeOnOutsideClick={false} position="bottom-start">
    {#snippet children({ ref })}
      <Button variant="border" {ref}>Open Tooltip</Button>
    {/snippet}

    {#snippet content()}
      <section class="max-w-64">
        Pass [closeOnOutsideClick={false}] to keep the tooltip open when clicking outside its
        content.
      </section>
    {/snippet}
  </Tooltip>

  <Button variant="fill">Some Button</Button>

  <Tooltip position="bottom-end" closeOnOutsideClick={true}>
    {#snippet children({ ref })}
      <Button variant="border" {ref}>Open Tooltip</Button>
    {/snippet}

    {#snippet content()}
      <section class="max-w-64">
        This tooltip’s content extends to the left and can sit behind the button next to it. If that
        button opens a popover, the tooltip should close by default when clicking this button or
        anywhere else outside the actual tooltip content.
      </section>
    {/snippet}
  </Tooltip>
</main>
