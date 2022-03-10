<script lang="ts">
  import Tooltip from './svelte'
  import ContextProvider from './ContextProvider.svelte'

  export let id: string
  export let settings

  let props
</script>

<Tooltip {...settings} passive let:on let:setTrigger let:startOpenTimer>
  <ContextProvider {id} {on} {setTrigger} {startOpenTimer} bind:props>
    <slot />
  </ContextProvider>

  <slot name="tooltip" slot="tooltip" {props} />
</Tooltip>
