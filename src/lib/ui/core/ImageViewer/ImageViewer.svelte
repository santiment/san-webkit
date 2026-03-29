<script lang="ts">
  import { onMount } from 'svelte'

  import { idleImport } from './utils.js'
  import PswpViewer from './PswpViewer.svelte'

  let el: HTMLElement
  let imgProps = $state<{
    src: string
    alt: string
    width: number
    height: number
    el: HTMLImageElement
  } | null>(null)

  let pswp$ = $state<Promise<typeof import('photoswipe')> | undefined>(undefined)

  onMount(() => {
    pswp$ = idleImport(() => import('photoswipe'))
    idleImport(() => import('photoswipe/style.css'))

    const parent = el.parentElement

    function onclick(e: MouseEvent) {
      const target = e.target as HTMLElement

      if (target.tagName !== 'IMG') return

      const img = target as HTMLImageElement

      imgProps = {
        src: img.src,
        alt: img.alt,
        width: img.naturalWidth,
        height: img.naturalHeight,
        el: img,
      }
    }

    parent?.addEventListener('click', onclick)

    return () => parent?.removeEventListener('click', onclick)
  })
</script>

{#if imgProps && pswp$}
  <PswpViewer {...imgProps} photoswipe$={pswp$} ondestroy={() => (imgProps = null)} />
{/if}

<span bind:this={el} class="hidden"></span>
