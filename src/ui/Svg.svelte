<script lang="ts">
  // prettier-ignore
  export let id: 'user' | 'arrow-down' | 'search' | 'pointer-arrow-right' | 'logout' | 'comment' | 'share' | 'cookies' | 'lightbulb'
    | 'question-round' | 'filter' | 'close' | 'sheriff'
    | 'reddit' | 'facebook' | 'twitter' | 'linked-in' | 'telegram' | 'github' |'discord' |'youtube'
    | 'edit' | 'remove' | 'plus-round' | 'info' | 'arrow-left' | 'santiment' | 'dots'
    | 'clock' | 'success' | 'error'

  let className = ''
  export { className as class }
  export let w: string | undefined = undefined,
    h = w
  export let illus = false

  const style = w && `width:${w}px;height:${h}px`
</script>

<svg on:click {style} class={className}
  ><use
    href="{process.env.MEDIA_PATH}/{illus ? 'illus' : 'sprites'}/{id}.svg#0"
  /></svg
>
