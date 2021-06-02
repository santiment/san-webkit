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

export function normalizeData(data: { [key: string]: any }) {
  const normalized = {}
  Object.keys(data).forEach((key) => {
    if (data[key] !== undefined) normalized[key] = data[key]
  })
  return normalized
}
