import { setContext, getContext } from 'svelte';
export const CTX = 'VirtualListController';
export const Controller = () => setContext(CTX, {});
export const getControllerCtx = () => getContext(CTX);
//# sourceMappingURL=ctx.js.map