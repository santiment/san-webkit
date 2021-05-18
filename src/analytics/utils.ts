export const scriptTag = () => document.createElement('script')

export function newHeadScript(
  content: string | undefined,
  options?: { [key: string]: any },
): void {
  const script = scriptTag()
  if (content) script.text = content
  Object.assign(script, options)
  document.head.appendChild(script)
}
