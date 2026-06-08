<script>
  import Button from '$ui/core/Button/index.js'
  import Popover from '$ui/core/Popover/index.js'
</script>

<div class="p-6">
  <Popover>
    {#snippet children({ props })}
      <Button {...props}>Trigger</Button>
    {/snippet}

    {#snippet content()}
      123
    {/snippet}
  </Popover>

  <Popover>
    {#snippet children({ props })}
      <Button {...props}>Popover with button</Button>
    {/snippet}

    {#snippet content()}
      <Button>Button</Button>
    {/snippet}
  </Popover>
</div>
