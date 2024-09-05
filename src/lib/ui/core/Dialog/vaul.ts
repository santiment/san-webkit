import { getAllContexts } from 'svelte'

export const getVaulCtx = (ctx = getAllContexts()): [] | [Symbol, any] =>
  Array.from(ctx.entries()).find(([key, value]) => value?.states?.drawerId) || []
