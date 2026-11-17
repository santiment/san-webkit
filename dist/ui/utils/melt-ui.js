import { onMount } from 'svelte';
export function useMelt(ref, meltStore) {
    onMount(() => {
        const node = ref.$;
        if (!node)
            return;
        const { destroy } = meltStore(node);
        const unsubscribe = meltStore.subscribe(({ action: _action, ...attrs }) => {
            for (const key in attrs) {
                const value = attrs[key];
                if (value !== undefined)
                    node.setAttribute(key, value);
            }
        });
        return () => {
            destroy?.();
            unsubscribe();
        };
    });
}
