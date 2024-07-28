<script lang="ts">
  import Svg from '$ui/core/Svg/index.js'

  let { class: className, children } = $props()
</script>

<div
  class="flex items-center gap-3 rounded-lg border border-orange fill-orange-hover px-5 py-3 text-rhino {className}"
>
  <Svg id="info"></Svg>

  {@render children()}
</div>
