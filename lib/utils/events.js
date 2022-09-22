const EDITABLE_TAGS = new Set(['INPUT', 'TEXTAREA']);
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
            clb();
        }
    }
    window.addEventListener('keydown', onKeyPress);
    return () => window.removeEventListener('keydown', onKeyPress);
}
//# sourceMappingURL=events.js.map