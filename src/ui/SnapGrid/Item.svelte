<script lang="ts">
  export let style = ''
  export let onDragStart: (e: MouseEvent) => void

  let itemNode: HTMLElement

  $: if (itemNode) {
    itemNode.setAttribute('style', style)
  }

  function gridItem(node: HTMLElement) {
    itemNode = node
    node.addEventListener('mousedown', onDragStart)
    node.classList.add('snap-item')
    return
  }
</script>

<slot {gridItem} />
