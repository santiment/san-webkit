<script lang="ts">
  import { setContext } from 'svelte'

  type Props = {
    isEnabled: boolean
    [key: string]: any
  }

  export let id: string
  export let on: string
  export let setTrigger, startOpenTimer, destroy
  export let props
  export let ref

  let trigger

  function onEvent({ currentTarget }: Event) {
    trigger = currentTarget
    props = trigger.__props__
    setTrigger(trigger)
    startOpenTimer()
  }

  ref.tooltip = (node: Element, data: Props) => {
    node.removeEventListener(on, onEvent)

    if (data.isEnabled === false) return

    // @ts-ignore
    node.__props__ = data
    node.addEventListener(on, onEvent)

    return {
      update(data: Props) {
        // @ts-ignore
        node.__props__ = data
        if (node === trigger) props = data
      },
      destroy() {
        if (node !== trigger) return
        trigger = null
        setTrigger(null)
        destroy()
      },
    }
  }
  setContext(id, ref.tooltip)
</script>

<slot />
