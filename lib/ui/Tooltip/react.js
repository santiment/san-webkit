import { Fragment, createElement, cloneElement, useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import SvelteTooltip from './svelte.js';
export const Tooltip = ({ trigger, tooltip, className, activeClass, dark, position, align, duration, openDelay, closeTimeout, isEnabled = true, }) => {
    const [tooltipTarget, setTooltipTarget] = useState();
    const svelteRef = useRef(null);
    const ref = useRef(null);
    useEffect(() => {
        const triggerNode = ref.current;
        if (!triggerNode)
            return;
        const createTooltipSlot = () => ({
            c() { },
            m(target) {
                setTooltipTarget(target);
            },
            d(detaching) {
                if (detaching)
                    setTooltipTarget(null);
            },
        });
        const svelte = new SvelteTooltip({
            target: triggerNode.parentNode,
            props: {
                position,
                align,
                duration,
                openDelay,
                dark,
                closeTimeout,
                activeClass,
                class: className,
                trigger: triggerNode,
                $$slots: {
                    tooltip: [createTooltipSlot],
                },
                $$scope: { ctx: {} },
            },
        });
        svelteRef.current = svelte;
        return () => svelte.$destroy();
    }, []);
    useEffect(() => {
        const svelte = svelteRef.current;
        if (!svelte)
            return;
        svelte.$set({ isEnabled });
    }, [isEnabled]);
    return createElement(Fragment, null, cloneElement(trigger, { ref }), tooltipTarget && ReactDOM.createPortal(tooltip, tooltipTarget));
};
export default Tooltip;
//# sourceMappingURL=react.js.map