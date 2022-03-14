<script lang="ts">
  import { setContext } from 'svelte'

  export let id: string
  export let on: string
  export let setTrigger, startOpenTimer
  export let props
  export let ref

  let trigger

  function onEvent({ currentTarget }: Event) {
    trigger = currentTarget
    props = trigger.__props__
    setTrigger(trigger)
    startOpenTimer()
  }

  ref.tooltip = (node: Element, data: any) => {
    node.addEventListener(on, onEvent)
    // @ts-ignore
    node.__props__ = data

    return {
      update(data: any) {
        // @ts-ignore
        node.__props__ = data
        if (node === trigger) props = data
      },
    }
  }
  setContext(id, ref.tooltip)
</script>

<slot />
