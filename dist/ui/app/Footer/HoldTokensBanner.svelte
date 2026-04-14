<script lang="ts">
  import Svg from '../../core/Svg/Svg.svelte'
  import { cn } from '../../utils/index.js'
</script>

<article
  class={cn(
    'relative min-w-[352px] overflow-hidden rounded-lg bg-white px-6 py-4 text-base sm:w-full sm:bg-athens xs:min-w-full',
  )}
>
  <h4 class="font-medium">Hold SAN Tokens — Get 20% Off</h4>

  <p class="max-w-[250px]">
    Discover all the benefits of holding SAN tokens <a
      class="text-[var(--accent)] hover:text-[var(--accent)] hover:underline"
      href="https://academy.santiment.net/san-tokens/#how-to-buy-san-tokens">on Academy.</a
    >
  </p>

  <Svg illus id="hold-tokens" w={98} class="absolute bottom-0 right-[-10px] xs:hidden" />
</article>
