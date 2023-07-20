import { trackLink } from './events/general.js';
export function startLinksListener() {
    if (!process.browser)
        return;
    const root = document.documentElement;
    root.addEventListener('click', (e) => {
        var _a;
        // Adapted from https://github.com/visionmedia/page.js
        // MIT license https://github.com/visionmedia/page.js#license
        const { button, metaKey, ctrlKey, shiftKey, altKey, defaultPrevented } = e;
        if (button)
            return;
        if (metaKey || ctrlKey || shiftKey || altKey)
            return;
        if (defaultPrevented)
            return;
        const target = e.target;
        if (!target)
            return;
        const anchor = target.closest('a');
        if (!anchor)
            return;
        const href = anchor.getAttribute('href') || '';
        const isExternal = href.startsWith('http');
        const { type, source } = anchor.dataset;
        if (isExternal) {
            e.preventDefault();
            (_a = window.open(href, '_blank')) === null || _a === void 0 ? void 0 : _a.focus();
        }
        if (type && source) {
            trackLink({ url: href, external: isExternal, type, source });
        }
    });
}
//# sourceMappingURL=links.js.map