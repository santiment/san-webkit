<script lang="ts">
  import { setContext } from 'svelte'

  export let id: string
  export let on: string
  export let setTrigger, startOpenTimer
  export let props

  let trigger

  function onEvent({ currentTarget }: Event) {
    trigger = currentTarget
    props = trigger.__props__
    setTrigger(trigger)
    startOpenTimer()
  }

  setContext(id, (node: Element, data: any) => {
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
  })
</script>

<slot />
