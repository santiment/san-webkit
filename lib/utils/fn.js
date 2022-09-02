export function debounce(timeout, fn) {
    let timer;
    const clear = () => process.browser && window.clearTimeout(timer);
    const debounced = (...args) => {
        clear();
        timer = window.setTimeout(() => fn(...args), timeout);
    };
    return [debounced, clear];
}
const once = { once: true };
export function Preloader(dataPreloader) {
    return (node) => {
        node.addEventListener('mouseenter', dataPreloader, once);
        node.addEventListener('touchstart', dataPreloader, once);
    };
}
//# sourceMappingURL=fn.js.map