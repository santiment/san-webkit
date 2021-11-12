function newCopyNode(text: string): HTMLTextAreaElement {
  const node = document.createElement('textarea')
  node.value = text
  node.setAttribute('style', 'position:absolute;left:-100vh')
  document.body.appendChild(node)
  return node
}

export function copy(
  text: string,
  callback: () => void,
  timeout = 1000,
  node?: HTMLInputElement | HTMLTextAreaElement,
) {
  const shouldRemoveNode = !node
  node = node || newCopyNode(text)

  node.select()
  document.execCommand('copy')
  if (shouldRemoveNode) node.remove()

  const timer = setTimeout(callback, timeout)
  return () => clearTimeout(timer)
}
