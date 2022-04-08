<script lang="ts">
  import type { Props } from './svelte'

  let className = ''
  export { className as class }
  export let id: Props['id']
  export let w: Props['w'] = undefined
  export let h: Props['h'] = w
  export let illus = false
  export let fill = 'none'

  let style = `fill:${fill};`
  if (w) {
    style += `width:${w}px;height:${h}px;min-width:${w}px`
  }
</script>

<svg on:click {style} class={className}
  ><use href="{process.env.MEDIA_PATH}/sprites/{illus ? 'illus/' : ''}{id}.svg#0" /></svg>
