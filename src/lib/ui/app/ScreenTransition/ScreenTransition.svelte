<script lang="ts">
  import type { Snippet } from 'svelte'
  import { useScreenTransitionCtx } from './state.svelte.js'
  import Button from '$ui/core/Button/index.js'
  import { cn } from '$ui/utils/index.js'
  import OnlyOnDevice from '$ui/utils/OnlyOnDevice/index.js'

  let {
    class: className,
    children,
    style,
  }: { class?: string; children: Snippet; style?: string } = $props()

  const TRANSITION = 350
  const { screen, screens } = useScreenTransitionCtx.get()

  let lastIndex = screen.index$
  let backScreen = $derived(screens[screen.index$ - 1])

  const checkIsBack = () => lastIndex > screen.index$

  function out(node: HTMLElement) {
    const isBack = checkIsBack()

    animate(
      node,
      () => {
        if (isBack) {
          return () => (node.style.transform = 'translateX(100%)')
        }

        node.style.zIndex = '-1'
        return () => (node.style.transform = 'translateX(-30%)')
      },
      { out: true },
    )

    return { duration: TRANSITION + 30 }
  }

  function flyIn(node: HTMLElement) {
    const isBack = checkIsBack()

    if (isBack) {
      animate(
        node,
        () => {
          node.style.left = '-40%'
          node.style.zIndex = '-1'

          return () => (node.style.transform = 'translateX(40%)')
        },
        {
          duration: 230,
          timing: 'linear', // 'cubic-bezier(0.98, 0.64, 1, 1)', // 'ease-in'
        },
      )
    } else {
      animate(node, () => {
        node.style.left = '100%'

        return () => (node.style.transform = 'translateX(-100%)')
      })
    }

    return { duration: TRANSITION }
  }

  function animate(
    node: HTMLElement,
    transitionStart: () => () => void,
    {
      out = false,
      duration = TRANSITION,
      timing = 'cubic-bezier(0.465, 0.183, 0.153, 0.946)',
    } = {},
  ) {
    const styles = node.getAttribute('style') ?? ''

    node.style.transition = `transform ${duration}ms ${timing}`
    node.style.pointerEvents = 'none'

    if (out) {
      const { offsetTop } = node
      node.style.top = offsetTop + 'px'
      node.style.bottom = '0'
      node.style.width = '100%'
      node.style.position = 'absolute'
      node.style.transform = 'translateX(0)'
    } else {
      node.style.position = 'relative'
    }

    requestAnimationFrame(transitionStart())

    if (!out) {
      setTimeout(() => {
        node.setAttribute('style', styles)
        lastIndex = screen.index$
      }, TRANSITION + 30)
    }
  }
</script>

{#key screen.index$}
  <div out:out in:flyIn class="max-h-full min-h-0 flex-1 column" {style}>
    <OnlyOnDevice tablet phone>
      {#if backScreen}
        <div class="sticky top-0 flex items-center bg-white px-2 py-3">
          <Button
            iconSize="14"
            icon="arrow-left-big"
            class="text-fiord"
            onclick={() => (screen.$ = backScreen)}>{backScreen.backLabel ?? 'Back'}</Button
          >
        </div>
      {/if}
    </OnlyOnDevice>

    <section class={cn('h-full max-h-full w-full', className)}>
      {@render children()}
    </section>
  </div>
{/key}
