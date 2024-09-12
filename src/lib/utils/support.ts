export function onSupportClick(e?: Event) {
  if (window.Intercom) e?.preventDefault()

  window.Intercom?.('show')
}
