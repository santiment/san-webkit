<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import { BROWSER } from 'esm-env'
  import { Drawer } from 'vaul-svelte'
  import MobileDrawer from './MobileDrawer.svelte'

  let {
    isOpened,
    onClose,
    children,
  }: Pick<ComponentProps<MobileDrawer>, 'close' | 'children'> & {
    isOpened: boolean
    onClose: ComponentProps<MobileDrawer>['close']
  } = $props()

  let isNested = BROWSER && !!document.querySelector('[data-vaul-drawer-visible]')
  let DrawerRoot = isNested ? Drawer.NestedRoot : Drawer.Root

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
    }, 100)
  })
</script>

<DrawerRoot shouldScaleBackground open={isOpened} {onClose}>
  <MobileDrawer {close} {children} {isNested}></MobileDrawer>
</DrawerRoot>
