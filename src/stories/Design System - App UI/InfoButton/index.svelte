<script>
  import InfoButton from '$ui/app/InfoButton/index.js'
  import Button from '$ui/core/Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'
</script>

<div class="flex h-screen items-center justify-center gap-4">
  <div class="flex flex-col items-start gap-2">
    <h3>Regular info button. Popover on desktop and tablet, dialog on phones</h3>

    <InfoButton>
      Some <b>entity</b> info
    </InfoButton>

    <InfoButton title="Custom title">
      Some <b>entity</b> info

      {#snippet trigger({ isOpened, props })}
        <Button variant="plain" class={cn('bg-orange-light-1', isOpened && 'bg-orange')} {...props}>
          Custom Trigger
        </Button>
      {/snippet}
    </InfoButton>
  </div>
</div>
