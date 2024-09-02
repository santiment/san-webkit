import { twMerge } from 'tailwind-merge';
import { cubicOut } from 'svelte/easing';
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
export function styleToString(style) {
    return Object.keys(style).reduce((str, key) => {
        if (style[key] === undefined)
            return str;
        return `${str}${key}:${style[key]};`;
    }, '');
}
export function flyAndScale(node, params = { y: -8, x: 0, start: 0.95, duration: 150 }) {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;
    const scaleConversion = (valueA, scaleA, scaleB) => {
        const [minA, maxA] = scaleA;
        const [minB, maxB] = scaleB;
        const percentage = (valueA - minA) / (maxA - minA);
        const valueB = percentage * (maxB - minB) + minB;
        return valueB;
    };
    return {
        duration: params.duration ?? 200,
        delay: 0,
        css: (t) => {
            const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
            const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
            const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);
            return styleToString({
                transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                opacity: t,
            });
        },
        easing: cubicOut,
    };
}
