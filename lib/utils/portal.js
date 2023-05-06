export function portal(el, targetEl) {
    async function update() {
        targetEl.appendChild(el);
        el.hidden = false;
    }
    function destroy() {
        if (el.parentNode) {
            el.parentNode.removeChild(el);
        }
    }
    update();
    return {
        update,
        destroy,
    };
}
//# sourceMappingURL=portal.js.map