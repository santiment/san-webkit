import { getContext, setContext } from 'svelte.js';
import { readable } from 'svelte/store';
const APP_TOOLTIPS_CTX = 'APP_TOOLTIPS_CTX';
export const newAppTooltipsCtx = () => setContext(APP_TOOLTIPS_CTX, new Map());
export function useAppTooltipsCtx(id, hook) {
    const ctx = getAppTooltipsCtx();
    ctx.set(id, hook);
    return readable(null, () => () => ctx.delete(id));
}
export const getAppTooltipsCtx = () => getContext(APP_TOOLTIPS_CTX);
export function getAppTooltipCtx(id) {
    const ctx = getAppTooltipsCtx();
    return ctx && ctx.get(id);
}
//# sourceMappingURL=ctx.js.map