import {} from 'svelte';
import { createCtx } from '../../../utils/index.js';
const CTX = 'webkit_useDropdownCtx';
export const useDropdownCtx = createCtx(CTX, ({ selected: selectedProp, label, closeDelay = 0 }) => {
    let closeTimer;
    let selected = $state(selectedProp);
    let isOpened = $state(false);
    const getItemIcon = (item) => typeof item === 'string' ? undefined : item?.icon;
    function closeDropdown({ skipDelay }) {
        clearTimeout(closeTimer);
        if (skipDelay) {
            close();
        }
        else {
            closeTimer = setTimeout(() => {
                close();
            }, closeDelay);
        }
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
        label,
        getItemIcon,
        closeDropdown,
    };
});
