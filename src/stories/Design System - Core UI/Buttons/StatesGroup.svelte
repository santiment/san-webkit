<script lang="ts">
  import type { ComponentProps, Snippet } from 'svelte'

  import Button from '$ui/core/Button/index.js'

  let {
    title,
    withIcons = false,
    buttons = defaultButtons,
    ...rest
  }: ComponentProps<typeof Button> & {
    title: string
    withIcons?: boolean
    buttons?: Snippet<[ComponentProps<typeof Button>]>
  } = $props()

  let active = $state(false)

  const buttonProps = $derived({ active, onclick, ...rest })

  function onclick() {
    active = !active
  }
</script>

{#snippet defaultButtons(props: ComponentProps<typeof Button>)}
  <div class="flex flex-col items-start gap-2">
    <Button {...props}>Button</Button>

    {#if withIcons}
      <Button {...props} icon="info">Button</Button>
      <Button {...props} icon="info" iconOnRight>Button</Button>
    {/if}
  </div>
{/snippet}

<div class="flex flex-col gap-2">
  <h4 class="text-base font-bold">{title}</h4>
  <div class="flex gap-8">
    <div class="flex flex-col gap-2">
      <h6 class="text-xs text-waterloo">Default</h6>
      {@render buttons(buttonProps)}
    </div>
    <div class="flex flex-col gap-2">
      <h6 class="text-xs text-waterloo">Loading</h6>
      {@render buttons({ ...buttonProps, loading: true })}
    </div>
    <div class="flex flex-col gap-2">
      <h6 class="text-xs text-waterloo">Disabled</h6>
      {@render buttons({ ...buttonProps, disabled: true })}
    </div>
  </div>
</div>
