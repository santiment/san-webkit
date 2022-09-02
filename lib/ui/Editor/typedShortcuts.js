function startsWith(text, shortcut) {
    const hasShortcutMatched = text.startsWith(shortcut);
    const space = text[shortcut.length];
    return hasShortcutMatched && (space === ' ' || space === ' ');
}
function applyShortcut(editor, isComments = false) {
    const text = editor.getSelectedParentElement().textContent;
    const isArticle = !isComments;
    if (isArticle && startsWith(text, '#')) {
        editor.execAction('delete');
        editor.execAction('delete');
        editor.execAction('append-h2');
    }
    else if (isArticle && startsWith(text, '##')) {
        editor.execAction('delete');
        editor.execAction('delete');
        editor.execAction('delete');
        editor.execAction('append-h3');
    }
    else if (startsWith(text, '1.')) {
        editor.execAction('delete');
        editor.execAction('delete');
        editor.execAction('delete');
        editor.execAction('insertorderedlist');
    }
    else if (startsWith(text, '-') || startsWith(text, '*')) {
        editor.execAction('delete');
        editor.execAction('delete');
        editor.execAction('insertunorderedlist');
    }
    else if (isArticle && startsWith(text, '>')) {
        editor.execAction('delete');
        editor.execAction('delete');
        editor.execAction('append-blockquote');
    }
}
export function hookShortcutApplier(editor, isComments = false) {
    editor.subscribe('editableInput', () => applyShortcut(editor, isComments));
}
//# sourceMappingURL=typedShortcuts.js.map