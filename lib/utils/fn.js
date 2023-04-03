import { readable } from 'svelte/store';
export function debounce(timeout, fn) {
    let timer;
    const clear = () => process.browser && window.clearTimeout(timer);
    const debounced = (...args) => {
        clear();
        timer = window.setTimeout(() => fn(...args), timeout);
    };
    return [debounced, clear];
}
/** Debounced function can be accessed by subscribing to a store by prefixing it with a $ sign*/
export function debounce$(timeout, fn) {
    const [debounced, clear] = debounce(timeout, fn);
    return readable(debounced, () => clear);
}
const once = { once: true };
export function Preloader(dataPreloader) {
    return (node) => {
        node.addEventListener('mouseenter', dataPreloader, once);
        node.addEventListener('touchstart', dataPreloader, once);
    };
}
//# sourceMappingURL=fn.js.map