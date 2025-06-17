export function clickOutside(node: HTMLElement, callback: () => void) {
  let isInternalClick = false

  function markInternal() {
    isInternalClick = true
  }

  node.addEventListener('mousedown', markInternal)

  function handleClick() {
    if (!isInternalClick) {
      callback()
    }

    isInternalClick = false
  }

  document.addEventListener('mousedown', handleClick)

  return {
    destroy() {
      node.removeEventListener('mousedown', markInternal)
      document.removeEventListener('mousedown', handleClick)
    },
  }
}

export function formatChatTime(isoString: string) {
  const date = new Date(isoString)
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}
