<script lang="ts">
  import Svg from '$ui/core/Svg/index.js'

  import { SANTIMENT_IDS } from './consts.js'

  const { userId }: { userId: number } = $props()
</script>

{#if SANTIMENT_IDS.has(userId)}
  <Svg illus id="editorial" w={118} h={40} />
{/if}
