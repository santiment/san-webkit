export function awaitChildren(parentNode, show, accessor) {
    const config = { childList: true };
    const observer = new MutationObserver(() => {
        const node = accessor();
        if (node) {
            show(node);
            observer.disconnect();
        }
    });
    observer.observe(parentNode, config);
}
//# sourceMappingURL=utils.js.map