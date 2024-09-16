import { getAllContexts } from 'svelte';
export const getVaulCtx = (ctx = getAllContexts()) => Array.from(ctx.entries()).find(([_, value]) => value?.states?.drawerId) || [];
