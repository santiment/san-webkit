import { twMerge } from 'tailwind-merge';
import { BROWSER } from 'esm-env';
export { applyStyles, preserveStyles } from 'drawer-svelte';
export function cn(...classLists) {
    return twMerge(...classLists);
}
export const getBrowserCssVariable = (color) => BROWSER ? getComputedStyle(document.body).getPropertyValue(`--${color}`) : '';
export function applyHexColorOpacity(color, hexOpacity) {
    if (color.length < 8)
        return color + hexOpacity;
    return color.slice(0, 7) + hexOpacity;
}
export function applyBuilder(node, builder) {
    const { action, ...attrs } = builder;
    const handler = action(node);
    for (const key in attrs) {
        const value = attrs[key];
        if (value !== undefined)
            node.setAttribute(key, value);
    }
    return handler;
}
export { styleToString, flyAndScale, flyAndScaleOutTransition } from './transitions.js';
