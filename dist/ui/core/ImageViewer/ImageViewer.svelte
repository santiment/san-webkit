<script lang="ts">
  import type { Snippet } from 'svelte'

  import PswpViewer from './PswpViewer.svelte'

  type TProps = {
    children: Snippet<[{ mountAction: (node: HTMLElement) => { destroy: () => void } }]>
  }

  const { children }: TProps = $props()

  let imgProps = $state<{
    src: string
    alt: string
    width: number
    height: number
    el: HTMLImageElement
  } | null>(null)

  let pswp = $state<typeof import('photoswipe') | undefined>(undefined)

  function mountAction(node: HTMLElement) {
    requestIdleCallback(() => {
      import('photoswipe/style.css')
      import('photoswipe').then((lib) => (pswp = lib))
    })

    function onclick(e: MouseEvent) {
      const target = e.target as HTMLElement

      if (target.tagName !== 'IMG') return

      const img = target as HTMLImageElement

      imgProps = {
        src: img.src,
        alt: img.alt,
        width: img.naturalWidth || img.offsetWidth,
        height: img.naturalHeight || img.offsetHeight,
        el: img,
      }
    }

    node.addEventListener('click', onclick)
    return { destroy: () => node.removeEventListener('click', onclick) }
  }
</script>

{@render children({ mountAction })}

{#if imgProps && pswp}
  <PswpViewer {...imgProps} {pswp} ondestroy={() => (imgProps = null)} />
{/if}
