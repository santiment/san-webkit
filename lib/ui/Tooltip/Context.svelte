<script>
  import Tooltip from './svelte'
  import ContextProvider from './ContextProvider.svelte'
  export let id
  export let settings
  export let ref = {}
  let props
</script>

<Tooltip {...settings} passive let:on let:destroy let:setTrigger let:startOpenTimer>
  <ContextProvider {id} {ref} {on} {destroy} {setTrigger} {startOpenTimer} bind:props>
    <slot />
  </ContextProvider>

  <slot name="tooltip" slot="tooltip" {props} />
</Tooltip>
