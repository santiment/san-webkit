export function clickOutside(node: Node, callback: (node: Event) => void) {
  return outside(node, 'click', callback)
}

function outside(node: Node, listener: string, callback: (node: Event) => void) {
  const handleClick = (event: Event) => {
    if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
      callback(event)
    }
  }

  document.addEventListener(listener, handleClick)

  return {
    destroy() {
      document.removeEventListener(listener, handleClick)
    },
  }
}

export function formatChatTime(isoString: string) {
  const date = new Date(isoString)
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}
