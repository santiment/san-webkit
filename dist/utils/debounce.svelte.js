export function useDebouncedFn(time, fn) {
    let timer;
    const clear = () => clearTimeout(timer);
    $effect(() => clear);
    const debounced = ((...args) => {
        clear();
        timer = setTimeout(() => fn(...args), time);
    });
    return Object.assign(debounced, { cancel: clear });
}
