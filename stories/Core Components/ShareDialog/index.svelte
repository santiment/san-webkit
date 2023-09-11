<script lang="ts">
  import type { ComponentProps, ComponentType } from 'svelte'

  import { getContext } from 'svelte'
  import ShareDialog from '@/ui/Share/index.svelte'

  type KnownProps = SAN.Utils.RemoveIndex<ComponentProps<ShareDialog>>

  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface $$Props extends Omit<KnownProps, 'feature' | 'source'> {}

  const feature = 'storybook'
  const source = 'storybook'

  const Dialog = getContext<ComponentType>('Dialog')
</script>

<Dialog render={ShareDialog} {feature} {source} {...$$props} />
