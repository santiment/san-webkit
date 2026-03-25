<script lang="ts">
  import { showDialog$ } from '$ui/core/Dialog/index.js'
  import ImageViewer from '$ui/core/ImageViewer/ImageViewer.svelte'
  import cryptImg from './image.png'

  const showDialog = showDialog$()
</script>

{#snippet imageViewer({ close }: { close: () => void })}
  <ImageViewer {close} src={cryptImg} alt="Hello" />
{/snippet}

<button
  onclick={() =>
    showDialog({
      children: imageViewer,
      class:
        'bg-transparent shadow-none rounded-none overflow-visible max-w-full max-h-none border-none',
    })}>Show Dialog</button
>
