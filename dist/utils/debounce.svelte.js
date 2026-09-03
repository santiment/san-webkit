export function useDebouncedFn(time, fn) {
    let timer;
    const clear = () => clearTimeout(timer);
    $effect(() => clear);
    return ((...args) => {
        clear();
        timer = setTimeout(() => fn(...args), time);
    });
}
