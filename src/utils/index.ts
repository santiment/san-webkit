export const noop = (_?: any) => _

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

export const map = (value: number, inMin: number, inMax: number, outMin: number, outMax: number) =>
  outMin + ((value - inMin) * (outMax - outMin)) / (inMax - inMin)

export const minMax = (value: number, min: number, max?: number) =>
  (value < min ? min : (max as number) < value ? max : value) as number

export function validateEmail(email: string) {
  const input = document.createElement('input')
  input.type = 'email'
  input.value = email
  return input.checkValidity()
}
