<script lang="ts">
  import Tooltip from '$ui/core/Tooltip/index.js'
  import Button from '$ui/core/Button/index.js'
</script>

<div class="flex h-screen w-full center">
  <Tooltip position="left" arrowSize={8}>
    {#snippet children({ ref })}
      <Button icon="plus" class="bg-white" {ref}></Button>
    {/snippet}

    {#snippet content()}
      <p>Add item to library</p>
    {/snippet}
  </Tooltip>
</div>
