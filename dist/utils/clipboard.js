function newCopyNode(text) {
    const node = document.createElement('textarea');
    node.value = text;
    node.setAttribute('style', 'position:absolute;left:-100vh');
    document.body.appendChild(node);
    return node;
}
export function copy(text, callback, timeout = 1000, node) {
    const timer = setTimeout(callback, timeout);
    if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(text).catch((err) => {
            console.error('Clipboard API failed, falling back:', err);
            fallback();
        });
    }
    else {
        fallback();
    }
    function fallback() {
        const shouldRemoveNode = !node;
        node = node || newCopyNode(text);
        node.select();
        document.execCommand('copy');
        if (shouldRemoveNode)
            node.remove();
    }
    return () => clearTimeout(timer);
}
