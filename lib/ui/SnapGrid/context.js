import { getContext, setContext } from 'svelte';
const GRID_CTX = 'GRID_CTX';
export const setSnapGridCtx = (snapGrid) => setContext(GRID_CTX, snapGrid);
export const getSnapGridCtx = () => getContext(GRID_CTX);
//# sourceMappingURL=context.js.map