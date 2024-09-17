<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import { BROWSER } from 'esm-env'
  import { Drawer } from 'vaul-svelte'
  import MobileDrawer from './MobileDrawer.svelte'
  import { TRANSITION_MS } from '../state.js'

  let {
    class: className,
    close,
    onClose,
    children,
  }: Pick<ComponentProps<MobileDrawer>, 'class' | 'close' | 'children'> & {
    onClose: ComponentProps<MobileDrawer>['close']
  } = $props()

  let isOpened = $state(false)
  let isNested = BROWSER && !!document.querySelector('[data-vaul-drawer-visible]')
  let DrawerRoot = isNested ? Drawer.NestedRoot : Drawer.Root

  $effect(() => {
    isOpened = true
  })

  // HACK: Enforcing initial drawer close style clean up
  $effect(() => () => {
    if (isNested) return

    const drawerWrapperNode = document.querySelector(
      '[data-vaul-drawer-wrapper]',
    ) as null | HTMLElement
    if (!drawerWrapperNode) return

    setTimeout(() => {
      drawerWrapperNode.style.transform = ''
      drawerWrapperNode.style.borderRadius = ''
      drawerWrapperNode.style.overflow = ''
    }, TRANSITION_MS)
  })
</script>

<DrawerRoot shouldScaleBackground open={isOpened} {onClose}>
  <MobileDrawer class={className} {close} {children} {isNested}></MobileDrawer>
</DrawerRoot>
