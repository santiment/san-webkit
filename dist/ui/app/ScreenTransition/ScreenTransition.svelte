<script lang="ts">
  import type { Snippet } from 'svelte'
  import { useScreenTransitionCtx } from './state.svelte.js'
  import Button from '../../core/Button/index.js'
  import { applyStyles, cn } from '../../utils/index.js'
  import OnlyOnDevice from '../../utils/OnlyOnDevice/index.js'
  import { trackEvent } from '../../../analytics/index.js'

  type TProps = {
    class?: string
    children: Snippet
    style?: string
    isSizeTransition?: boolean
    dataType: string
    dataSource: string
  }
  let {
    class: className,
    children,
    style,
    isSizeTransition = false,
    dataType,
    dataSource,
  }: TProps = $props()

  const TRANSITION = 350
  const { screen, screens } = useScreenTransitionCtx.get()

  let lastIndex = screen.index$
  let backScreen = $derived(screens[screen.index$ - 1])

  let outHeight = 0
  let outWidth = 0

  const checkIsBack = () => lastIndex > screen.index$

  function out(node: HTMLElement) {
    const isBack = checkIsBack()

    animate(
      node,
      () => {
        if (isBack) {
          return () => applyStyles(node, { transform: 'translateX(100%)' })
        }

        applyStyles(node, { zIndex: '-1' })
        return () => applyStyles(node, { transform: 'translateX(-30%)' })
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
          applyStyles(node, { left: '-40%', zIndex: '-1' })
          return () => applyStyles(node, { transform: 'translateX(40%)' })
        },
        {
          duration: 230,
          timing: 'linear', // 'cubic-bezier(0.98, 0.64, 1, 1)', // 'ease-in'
        },
      )
    } else {
      animate(node, () => {
        applyStyles(node, { left: '100%' })

        return () => applyStyles(node, { transform: 'translateX(-100%)' })
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

    if (out) {
      outHeight = node.clientHeight
      outWidth = node.clientWidth
    }

    applyStyles(node, {
      transition: `transform ${duration}ms ${timing}, height ${duration}ms, width ${duration}ms`,
      pointerEvents: 'none',
    })

    if (isSizeTransition && !out) {
      const nodeHeight = node.clientHeight
      const nodeWidth = node.clientWidth

      applyStyles(node, { height: outHeight + 'px', width: outWidth + 'px' })
      requestAnimationFrame(() => {
        applyStyles(node, { height: nodeHeight + 'px', width: nodeWidth + 'px' })
      })
    }

    if (out) {
      const { offsetTop } = node

      applyStyles(node, {
        top: offsetTop + 'px',
        bottom: '0',
        width: '100%',
        position: 'absolute',
        transform: 'translateX(0)',
      })
    } else {
      applyStyles(node, { position: 'relative' })
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
  <div out:out in:flyIn class="max-h-full min-h-0 flex-grow column" {style}>
    <OnlyOnDevice tablet phone>
      {#if backScreen}
        <div class="sticky top-0 flex items-center bg-white px-2 py-3">
          <Button
            iconSize="14"
            icon="arrow-left-big"
            class="text-fiord"
            onclick={() => {
              trackEvent('pagination', {
                type: dataType,
                value: 0,
                label: backScreen.backLabel || 'Back',
                source: dataSource,
              })

              screen.$ = backScreen
            }}
          >
            {backScreen.backLabel ?? 'Back'}
          </Button>
        </div>
      {/if}
    </OnlyOnDevice>

    <section class={cn('h-full max-h-full w-full', className)}>
      {@render children()}
    </section>
  </div>
{/key}
