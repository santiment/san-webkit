<script lang="ts">
  import type { Snippet } from 'svelte'
  import type { Builder } from 'bits-ui'

  import { ss } from 'svelte-runes'
  import { applyBuilder } from '../utils'

  let { builder, children }: { builder: Builder; children: Snippet<[{ ref: typeof ref }]> } =
    $props()

  let ref = ss<null | HTMLElement>(null)

  $effect(() => {
    if (!ref.$) return

    return applyBuilder(ref.$, builder).destroy
  })
</script>

{@render children({ ref })}
