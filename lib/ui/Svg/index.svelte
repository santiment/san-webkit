<script>let className = '';
export { className as class };
export let id;
export let w = undefined;
export let h = undefined;
export let illus = false;
$: height = h ?? w;
$: style = w && `width:${w}px;height:${height}px;min-width:${w}px`;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svg on:click {style} class={className}
  ><use href="{process.env.MEDIA_PATH}/sprites/{illus ? 'illus/' : ''}{id}.svg#0" /></svg
>
