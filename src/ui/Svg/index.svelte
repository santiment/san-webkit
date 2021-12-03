<script lang="ts">
  import type { Props } from './svelte'

  let className = ''
  export { className as class }
  export let id: Props['id']
  export let w: Props['w']
  export let h: Props['h'] = w
  export let illus = false

  const style = w && `width:${w}px;height:${h}px`
</script>

<svg on:click {style} class={className}
  ><use
    href="{process.env.MEDIA_PATH}/{illus ? 'illus' : 'sprites'}/{id}.svg#0"
  /></svg
>
