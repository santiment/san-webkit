import { createRawSnippet } from 'svelte';
import { createCtx } from '../../../utils/index.js';
const CTX = 'webkit_useDropdownCtx';
export const useDropdownCtx = createCtx(CTX, ({ selected: selectedProp, label, closeDelay = 0 }) => {
    let closeTimer;
    let selected = $state(selectedProp);
    let isOpened = $state(false);
    const defaultLabel = createRawSnippet((params) => ({
        render: () => {
            const item = params();
            return typeof item === 'string' ? item : item.title;
        },
    }));
    const getItemIcon = (item) => typeof item === 'string' ? undefined : item?.icon;
    function onItemSelect() {
        clearTimeout(closeTimer);
        closeTimer = setTimeout(() => {
            close();
        }, closeDelay);
    }
    function close() {
        isOpened = false;
    }
    return {
        selected: {
            get $() {
                return selected;
            },
            set $(value) {
                selected = value;
            },
        },
        isOpened: {
            get $() {
                return isOpened;
            },
            set $(value) {
                isOpened = value;
            },
        },
        label: label ?? defaultLabel,
        getItemIcon,
        onItemSelect,
    };
});
