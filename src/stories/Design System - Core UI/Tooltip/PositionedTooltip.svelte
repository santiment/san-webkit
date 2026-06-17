<script>
  import Button from '$ui/core/Button/Button.svelte'
  import Tooltip from '$ui/core/Tooltip/Tooltip.svelte'
</script>

<main class="flex justify-center py-40">
  <Tooltip position="bottom-start" offset={-24} positionConfig={{ sameWidth: true }}>
    {#snippet children({ ref })}
      <Button variant="border" {ref}>Long Trigger Button</Button>
    {/snippet}

    {#snippet content()}
      <section>
        Here is some content for our Tooltip with text that is somewhat long.
        <br />
        Width of content is the same as trigger button. There is also <strong>24px</strong> offset on
        cross axis
      </section>
    {/snippet}
  </Tooltip>
</main>
