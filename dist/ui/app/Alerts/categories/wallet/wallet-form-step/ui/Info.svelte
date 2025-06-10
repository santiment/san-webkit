<script lang="ts">
  import type { Snippet } from 'svelte'

  import Svg from '../../../../../../core/Svg/Svg.svelte'

  type TProps = {
    children?: Snippet
    description?: Snippet
  }

  const { children, description }: TProps = $props()
</script>

<section class="rounded bg-athens fill-waterloo px-4 pb-3 pt-4">
  <div class="flex items-center gap-3">
    <Svg id="info" w="12" />
    {@render children?.()}
  </div>
  <div class="ml-6 text-waterloo">
    {@render description?.()}
  </div>
</section>
