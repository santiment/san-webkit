export function awaitChildren(
  parentNode: HTMLElement,
  show: (HTMLElement) => any,
  accessor: () => HTMLElement,
) {
  const config = { childList: true }
  const observer = new MutationObserver(() => {
    const node = accessor()
    if (node) {
      show(node)
      observer.disconnect()
    }
  })
  observer.observe(parentNode, config)
}
