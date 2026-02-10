<script lang="ts">
  import Button from '$ui/core/Button/index.js'

  type TProps = {
    close: () => void
    src: string
    alt?: string
  }

  const { close, src, alt }: TProps = $props()

  let scale = $state(1)
  let imgElement: HTMLImageElement

  function handleZoom(delta: number) {
    scale = Math.max(0.25, Math.min(3, scale + delta))
  }

  export async function handleDownload() {
    try {
      const response = await fetch(src)
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)

      const link = document.createElement('a')

      link.href = url
      link.download = alt || 'download'
      link.click()

      URL.revokeObjectURL(url)
    } catch (e) {
      console.error(e)
    }
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div onclick={(e) => e.target === e.currentTarget && close()} class="relative flex h-screen center">
  <div
    class="overflow-hidden rounded transition-transform duration-200 ease-out"
    style:transform={`scale(${scale})`}
  >
    <img bind:this={imgElement} {src} {alt} />
  </div>

  <div
    class="absolute bottom-10 left-1/2 z-50 -translate-x-1/2 [&_button]:fill-mystic hover:[&_button]:fill-white"
  >
    <div class="flex gap-2" onclick={(e) => e.stopPropagation()}>
      <div class="flex items-center justify-between rounded bg-rhino text-mystic">
        <Button
          class="h-8 w-8 center disabled:fill-waterloo"
          icon="minus"
          variant="plain"
          onclick={() => handleZoom(-0.25)}
          explanation="Zoom out"
        ></Button>

        <div class="px-2">{Math.round(scale * 100)}%</div>

        <Button
          class="h-8 w-8 center disabled:fill-waterloo"
          icon="plus"
          variant="plain"
          onclick={() => handleZoom(0.25)}
          explanation="Zoom in"
        ></Button>
      </div>

      <Button
        class="h-8 w-8 rounded bg-rhino center"
        icon="download"
        variant="plain"
        onclick={handleDownload}
        explanation="Download"
      ></Button>
      <Button
        class="h-8 w-8 rounded bg-rhino center"
        icon="shrink"
        onclick={close}
        variant="plain"
        explanation="Close"
      ></Button>
    </div>
  </div>
</div>
