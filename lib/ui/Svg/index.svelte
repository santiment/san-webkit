<script>let className = '';
export { className as class };
export let id;
export let w = undefined;
export let h = w;
export let illus = false;
const style = w && `width:${w}px;height:${h}px;min-width:${w}px`;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svg on:click {style} class={className}
  ><use href="{process.env.MEDIA_PATH}/sprites/{illus ? 'illus/' : ''}{id}.svg#0" /></svg
>
