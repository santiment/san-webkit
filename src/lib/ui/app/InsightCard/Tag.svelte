<script lang="ts">
  import Svg from '$ui/core/Svg/index.js'
  const { name } = $props()
</script>

<div
  class="inline-flex h-6 items-center gap-1.5 rounded border border-porcelain px-1 py-2 text-xs hover:text-green"
>
  <a href="?tags={name}">{name}</a>
  <button on:click={() => console.log('close')}>
    <Svg id="cross" w={6} h={6} />
  </button>
</div>
