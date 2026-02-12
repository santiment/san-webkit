<script lang="ts">
  import type { Snippet } from 'svelte'

  type TProps = { children: Snippet; explanation: string }
  let { children, explanation }: TProps = $props()
</script>

<span
  aria-label={explanation}
  class="expl-tooltip ml-1 rounded-md bg-athens px-1.5 py-0.5 text-xs text-waterloo"
  style="--expl-align-x:-50%"
>
  {@render children()}
</span>
