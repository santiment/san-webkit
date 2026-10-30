import { on } from 'svelte/events';
export const useCloseOnOutsideClick = ({ getIsOpened, close, enabled = true, }) => {
    let triggerEl = $state(null);
    let contentEl = $state(null);
    const isOpened = $derived(getIsOpened());
    if (enabled) {
        $effect(() => {
            if (!isOpened)
                return;
            return on(window, 'pointerdown', (e) => {
                if (contentEl && e.composedPath().includes(contentEl))
                    return;
                if (triggerEl && e.composedPath().includes(triggerEl))
                    return;
                close();
            });
        });
    }
    return {
        triggerEl: {
            get $() {
                return triggerEl;
            },
            set $(el) {
                triggerEl = el;
            },
        },
        contentEl: {
            get $() {
                return contentEl;
            },
            set $(el) {
                contentEl = el;
            },
        },
    };
};
