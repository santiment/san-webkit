<script lang="ts">
  import Svg from '$ui/core/Svg/index.js'

  const { iconId, count }: { iconId: string; count: number } = $props()
</script>

<button class="items-center gap-1 text-sm text-waterloo row hover:text-green">
  <Svg id={iconId} w={16} h={16} className="fill-waterloo" />
  {count}
</button>
