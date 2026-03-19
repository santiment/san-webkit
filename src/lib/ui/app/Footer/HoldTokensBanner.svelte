<script lang="ts">
  import { cn } from '$ui/utils/index.js'

  import tokens from './tokens.svg'
</script>

<article
  class={cn(
    'min-w-[352px] rounded-lg bg-white px-6 py-4 text-base sm:w-full sm:bg-athens xs:min-w-full',
    'bg-[image:var(--bgImage)] bg-[length:98px_98px] bg-[right_-10px_bottom_0] bg-no-repeat xs:bg-none',
  )}
  style:--bgImage="url({tokens})"
>
  <h4 class="font-medium">Hold SAN Tokens — Get 20% Off</h4>

  <p class="max-w-[250px]">
    Discover all the benefits of holding SAN tokens <a
      class="text-green hover:text-green-hover hover:underline"
      href="https://academy.santiment.net/san-tokens/#how-to-buy-san-tokens">on Academy.</a
    >
  </p>
</article>
