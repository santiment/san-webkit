import { getAllContexts } from 'svelte'

export const getVaulCtx = (ctx = getAllContexts()): [] | [symbol, any] =>
  Array.from(ctx.entries()).find(([_key, value]) => value?.states?.drawerId) || []
