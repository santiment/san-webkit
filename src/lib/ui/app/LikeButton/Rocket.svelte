<script lang="ts">
  import Svg from '$ui/core/Svg/index.js'
  import { cn } from '$ui/utils/index.js'

  type TProps = {
    class?: string
  }

  let { class: className }: TProps = $props()
</script>

<div
  class={cn(
    'relative flex justify-center group-hover:animate-shake group-disabled:animate-none',
    className,
  )}
>
  <Svg id="rocket-active" h="20" />
</div>
