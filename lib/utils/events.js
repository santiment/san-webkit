import { readable } from 'svelte/store';
import { noop } from './index.js';
import { BROWSER } from 'esm-env';
const EDITABLE_TAGS = new Set(['INPUT', 'TEXTAREA']);
const options = { capture: true };
export function newGlobalShortcut(shortcut, clb, disableInputs = true) {
    const keys = shortcut.split('+');
    let isCmdKey = false;
    let isAltKey = false;
    let isShiftKey = false;
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
    function onKeyPress(e) {
        const { key, target, metaKey, ctrlKey, shiftKey, altKey } = e;
        if (disableInputs && target) {
            const { isContentEditable, tagName } = target;
            if (isContentEditable || EDITABLE_TAGS.has(tagName))
                return;
        }
        if (isCmdKey === (metaKey || ctrlKey) &&
            isAltKey === altKey &&
            isShiftKey === shiftKey &&
            targetKey === key.toUpperCase()) {
            e.preventDefault();
            e.stopImmediatePropagation();
            clb();
        }
    }
    if (BROWSER) {
        window.addEventListener('keydown', onKeyPress, options);
    }
    return () => window.removeEventListener('keydown', onKeyPress, options);
}
export function GlobalShortcut$(shortcut, clb, disableInputs = true) {
    return readable(null, () => {
        const clean = BROWSER ? newGlobalShortcut(shortcut, clb, disableInputs) : noop;
        return clean;
    });
}
//# sourceMappingURL=events.js.map