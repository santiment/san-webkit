<script lang="ts">
  import Button from '$ui/core/Button/index.js'
  import { downloadFile } from '$lib/utils/index.js'

  type TProps = {
    src: string
    alt?: string
    scale: number
    maxScale: number
    onzoomin: () => void
    onzoomout: () => void
    onclose: () => void
  }

  const { src, alt, scale, maxScale, onzoomin, onzoomout, onclose }: TProps = $props()
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class="fixed bottom-4 left-1/2 z-[100001] -translate-x-1/2"
  onclick={(e) => e.stopPropagation()}
>
  <div
    class="flex gap-2 duration-200 animate-in fade-in slide-in-from-bottom-2 hover:[&_button:not(:disabled)]:fill-white [&_button]:fill-mystic"
  >
    <div class="flex items-center justify-between rounded bg-rhino text-mystic">
      <Button
        class="size-8 center disabled:fill-waterloo"
        icon="minus"
        variant="plain"
        disabled={scale <= 1}
        onclick={onzoomout}
        explanation="Zoom out"
      />

      <div class="px-2">{Math.round(scale * 100)}%</div>

      <Button
        class="size-8 center disabled:fill-waterloo"
        icon="plus"
        variant="plain"
        disabled={scale >= maxScale}
        onclick={onzoomin}
        explanation="Zoom in"
      />
    </div>

    <Button
      class="size-8 rounded bg-rhino center"
      icon="download"
      variant="plain"
      onclick={() => downloadFile(src, alt ?? 'download')}
      explanation="Download"
    />

    <Button
      class="size-8 rounded bg-rhino center"
      icon="shrink"
      variant="plain"
      onclick={onclose}
      explanation="Close"
    />
  </div>
</div>
