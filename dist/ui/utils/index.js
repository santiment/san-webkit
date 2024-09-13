import { twMerge } from 'tailwind-merge';
import { BROWSER } from 'esm-env';
export function cn(...classLists) {
    return twMerge(...classLists);
}
export const getBrowserCssVariable = (color) => BROWSER ? getComputedStyle(document.documentElement).getPropertyValue(`--${color}`) : '';
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
export { styleToString, flyAndScale } from './transitions.js';
