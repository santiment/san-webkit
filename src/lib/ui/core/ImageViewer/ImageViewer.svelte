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

  let pswp = $state<Promise<typeof import('photoswipe')> | undefined>(undefined)

  function mountAction(node: HTMLElement) {
    pswp = new Promise((resolve) =>
      requestIdleCallback(() => {
        import('photoswipe/style.css')
        import('photoswipe').then(resolve)
      }),
    )

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

    node.addEventListener('click', onclick)
    return { destroy: () => node.removeEventListener('click', onclick) }
  }
</script>

{@render children({ mountAction })}

{#if imgProps && pswp}
  <PswpViewer {...imgProps} photoswipe$={pswp} ondestroy={() => (imgProps = null)} />
{/if}
