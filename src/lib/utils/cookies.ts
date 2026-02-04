export function getCookie(name: string, predicate?: (keyValue: string) => boolean) {
  const cookies = document.cookie.split('; ')

  const keyValue = cookies.find((keyValue) =>
    predicate ? predicate(keyValue) : keyValue.startsWith(name),
  )

  return keyValue && keyValue.split('=')[1]
}

export function setCookie<GValue extends number | boolean | string>(
  key: string,
  value: GValue,
): GValue {
  document.cookie = `${key}=${value}; path=/; max-age=31536000`
  return value
}

export function deleteCookie(key: string) {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`
}
