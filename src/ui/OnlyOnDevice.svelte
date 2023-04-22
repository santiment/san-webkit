<script lang="ts">
  import { getDevice$Ctx } from '@/stores/responsive'

  export let desktop = false
  export let laptop = false
  export let tablet = false
  export let phone = false

  const targets = { desktop, laptop, tablet, phone }
  const { device$ } = getDevice$Ctx()
</script>

{#if targets[$device$.type]}
  <slot />
{/if}
