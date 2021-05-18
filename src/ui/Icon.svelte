<script lang="ts">
  let className = ''
  export let id:
    | 'user'
    | 'arrow-down'
    | 'search'
    | 'pointer-arrow-right'
    | 'logout'
    | 'comment'
    | 'share'
    | 'question-round'
    | 'filter'
    | 'close'
    | 'sheriff'
    | 'reddit'
    | 'facebook'
    | 'twitter'
    | 'linked-in'
    | 'telegram'
    | 'edit'
    | 'remove'
    | 'plus-round'
    | 'info'
    | 'arrow-left'
    | 'santiment'
    | 'dots'
    | 'clock'
    | 'success'
    | 'error'

  export { className as class }
  export let w: string | undefined = undefined,
    h = w

  const style = w && `width:${w}px;height:${h}px`
</script>

<svg on:click {style} class={className}
  ><use href="{process.env.SPRITES_PATH}/{id}.svg#0" /></svg>
