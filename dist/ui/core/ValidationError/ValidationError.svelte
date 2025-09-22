<script lang="ts">
  import { cn } from '../../utils/index.js'

  import Svg from '../Svg/Svg.svelte'

  type TProps = {
    class?: string
    error: string
  }

  const { class: className, error }: TProps = $props()
</script>

<article
  class={cn(
    'absolute -left-px top-[calc(100%+4px)]',
    'w-max max-w-72 px-[9px] py-[5px]',
    'pointer-events-none flex gap-2 rounded border bg-white fill-red text-start text-xs text-black shadow-dropdown',
    className,
  )}
>
  <Svg id="error" w="16" />
  {error}
</article>
