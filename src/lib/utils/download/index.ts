export function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  a.remove()

  setTimeout(() => {
    URL.revokeObjectURL(url)
  }, 30_000)
}
