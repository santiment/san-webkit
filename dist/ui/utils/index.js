import { twMerge } from 'tailwind-merge';
export function cn(...classLists) {
    return twMerge(...classLists);
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
