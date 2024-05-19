<script>
  import Button from '$ui/core/Button'
  import Popover from '$ui/core/Popover/Popover.svelte'
</script>

<div class=" p-6">
  <Popover>
    {#snippet children({ ref })}
      <Button {ref}>Trigger</Button>
    {/snippet}

    {#snippet content()}
      123
    {/snippet}
  </Popover>
</div>
