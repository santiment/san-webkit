export function getCookie(name, predicate) {
    const cookies = document.cookie.split('; ');
    const keyValue = cookies.find((keyValue) => predicate ? predicate(keyValue) : keyValue.startsWith(name));
    return keyValue && keyValue.split('=')[1];
}
export function setCookie(key, value) {
    document.cookie = `${key}=${value}; path=/; max-age=31536000`;
}
export function deleteCookie(key) {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}
