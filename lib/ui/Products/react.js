import { Fragment, createElement, cloneElement, useState, useEffect, useRef } from 'react';
import { insert } from 'svelte/internal';
import SvelteProducts from './svelte.js';
const Products = ({ trigger, active, isCompact, isColumn, className, activeClassName, dropdownClassName, }) => {
    const ref = useRef(null);
    const [mounted, setMounted] = useState(true);
    useEffect(() => {
        var _a;
        const node = ref.current;
        if (!node)
            return;
        const createDefaultSlot = () => ({
            c() { },
            m(target, anchor) {
                insert(target, node, anchor);
            },
            d() { },
        });
        const fragment = document.createDocumentFragment();
        const svelte = new SvelteProducts({
            target: (trigger ? node.parentNode : fragment),
            props: {
                class: className,
                activeClass: activeClassName,
                dropdownClassName,
                isCompact,
                isColumn,
                active,
                $$slots: trigger ? { default: [createDefaultSlot] } : undefined,
                $$scope: { ctx: {} },
            },
        });
        if (!trigger) {
            (_a = node.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(fragment, node);
            setMounted(null);
        }
        return () => svelte.$destroy();
    }, []);
    if (trigger) {
        return createElement(Fragment, null, cloneElement(trigger, { ref }));
    }
    return mounted && createElement('p', { ref, className: 'hide' });
};
export default Products;
//# sourceMappingURL=react.js.map