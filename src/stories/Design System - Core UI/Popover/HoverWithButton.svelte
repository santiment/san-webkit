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
      <section class="max-w-64">This popover can stay open on another button click</section>
    {/snippet}
  </Popover>

  <Button variant="fill">Some Button</Button>

  <Popover openOnHover side="bottom" align="end" closeOnOutsideClick>
    {#snippet children({ props })}
      <Button variant="border" {...props}>Hover Popover</Button>
    {/snippet}

    {#snippet content()}
      <section class="max-w-64">This popover should close on click outside of its content</section>
    {/snippet}
  </Popover>
</main>
