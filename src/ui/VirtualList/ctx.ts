import { setContext, getContext } from 'svelte'

export type ControllerType = Partial<{
  scrollTo(index: number): void
}>

export const CTX = 'VirtualListController'
export const Controller = () => setContext(CTX, {} as ControllerType)
export const getControllerCtx = () => getContext<ControllerType>(CTX)
