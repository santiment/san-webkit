import type { Attachment } from 'svelte/attachments'

export function useIntersection(
  onIntersect: (entry: IntersectionObserverEntry) => void,
  options: Omit<IntersectionObserverInit, 'root'> = {},
) {
  let rootEl = $state<Element | null>(null)

  const root: Attachment = (node) => {
    rootEl = node
    return () => {
      rootEl = null
    }
  }

  const target: Attachment = (node) => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) onIntersect(entry)
        }
      },
      { ...options, root: rootEl },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }

  return {
    root,
    target,
  }
}
