import { createElement, useState, useEffect, useRef } from 'react';
import SvelteSvg from './svelte.js';
const Svg = ({ id, illus, className, w, h }) => {
    const [mounted, setMounted] = useState(true);
    const ref = useRef(null);
    useEffect(() => {
        const node = ref.current;
        if (!(node === null || node === void 0 ? void 0 : node.parentNode))
            return;
        const fragment = document.createDocumentFragment();
        const svelte = new SvelteSvg({
            target: fragment,
            props: {
                id,
                illus,
                class: className,
                w,
                h,
                $$scope: { ctx: {} },
            },
        });
        node.parentNode.insertBefore(fragment, node);
        setMounted(null);
        return () => svelte.$destroy();
    }, []);
    return mounted && createElement('p', { ref, className: 'hide' });
};
export default Svg;
//# sourceMappingURL=react.js.map