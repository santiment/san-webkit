export function getCookie(name, predicate) {
    const cookies = document.cookie.split('; ');
    const keyValue = cookies.find((keyValue) => predicate ? predicate(keyValue) : keyValue.startsWith(name));
    return keyValue && keyValue.split('=')[1];
}
export function setCookie(key, value) {
    document.cookie = `${key}=${value}; path=/; max-age=31536000`;
}
//# sourceMappingURL=cookie.js.map