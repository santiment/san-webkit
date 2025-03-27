import { onMount } from 'svelte';
const EDITABLE_TAGS = new Set(['INPUT', 'TEXTAREA']);
const options = { capture: true };
export function useKeyboardShortcut(shortcut, clb, disableInputs = true) {
    onMount(() => {
        const keys = shortcut.split('+');
        let isCmdKey = false;
        let isAltKey = false;
        let isShiftKey = false;
        let isSingleModKey = false;
        let targetKey;
        for (let i = 0, len = keys.length; i < len; i++) {
            const key = keys[i];
            if (key === 'CMD')
                isCmdKey = true;
            else if (key === 'ALT')
                isAltKey = true;
            else if (key === 'SHIFT')
                isShiftKey = true;
            else
                targetKey = key;
        }
        if (keys.length === 1) {
            isSingleModKey = isCmdKey || isAltKey || isShiftKey;
        }
        function onKeyPress(e) {
            const { key, target, metaKey, ctrlKey, shiftKey, altKey } = e;
            if (disableInputs && target) {
                const { isContentEditable, tagName } = target;
                if (isContentEditable || EDITABLE_TAGS.has(tagName))
                    return;
            }
            // TODO: isSingleModKey prevent CMD+R when isCmdKey===true
            if (isCmdKey === (metaKey || ctrlKey) &&
                isAltKey === altKey &&
                isShiftKey === shiftKey &&
                (isSingleModKey || targetKey === key.toUpperCase())) {
                e.preventDefault();
                e.stopPropagation();
                clb();
            }
        }
        window.addEventListener('keydown', onKeyPress, options);
        return () => window.removeEventListener('keydown', onKeyPress, options);
    });
}
