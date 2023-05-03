export function getCookie(name: string, predicate?: (keyValue: string) => boolean) {
  const cookies = document.cookie.split('; ')

  const keyValue = cookies.find((keyValue) =>
    predicate ? predicate(keyValue) : keyValue.startsWith(name),
  )

  return keyValue && keyValue.split('=')[1]
}

export function setCookie(key: string, value: number | boolean | string) {
  document.cookie = `${key}=${value}; path=/; max-age=31536000`
}
