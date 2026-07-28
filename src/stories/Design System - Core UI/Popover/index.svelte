<script>
  import Button from '$ui/core/Button/index.js'
  import Popover from '$ui/core/Popover/index.js'
</script>

<main class="flex justify-center gap-10 py-40">
  <section class="flex min-w-48 flex-col gap-4">
    <h2>Click popover</h2>

    <Popover>
      {#snippet children({ props })}
        <Button variant="border" {...props}>Open popover</Button>
      {/snippet}

      {#snippet content()}
        <div class="max-w-60">
          <strong>Popover content</strong>
          <p>A little more content makes the spacing easier to review.</p>
        </div>
      {/snippet}
    </Popover>
  </section>

  <section class="flex min-w-48 flex-col gap-4 border-l pl-10">
    <h2>Hover popover</h2>

    <Popover openOnHover>
      {#snippet children({ props })}
        <Button variant="border" {...props}>Hover over me</Button>
      {/snippet}

      {#snippet content()}
        <div class="max-w-60">
          <strong>Hover content</strong>
          <p>Move the pointer between the trigger and this content.</p>
        </div>
      {/snippet}
    </Popover>
  </section>

  <section class="flex min-w-48 flex-col gap-4 border-l pl-10">
    <h2>Interactive popover</h2>

    <Popover>
      {#snippet children({ props })}
        <Button variant="border" {...props}>Open actions</Button>
      {/snippet}

      {#snippet content({ close })}
        <div class="flex max-w-60 flex-col gap-3">
          <p>The button stays usable inside the floating content.</p>
          <Button onclick={close}>Close popover</Button>
        </div>
      {/snippet}
    </Popover>
  </section>
</main>
