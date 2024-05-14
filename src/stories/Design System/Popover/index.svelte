<script>
  import Button from '$lib/ui/Button'
  import Popover from '$lib/ui/Popover/Popover.svelte'
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
