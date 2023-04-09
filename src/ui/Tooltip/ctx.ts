import { getContext, setContext } from 'svelte'
import { readable } from 'svelte/store'

export type Props = {
  isEnabled: boolean
  [key: string]: any
}

type TooltipHook = (
  node: Element,
  data: Props,
) => { update: (data: Props) => void; destroy: () => void }
type CtxType = Map<string, TooltipHook>

const APP_TOOLTIPS_CTX = 'APP_TOOLTIPS_CTX'

export const newAppTooltipsCtx = () => setContext<CtxType>(APP_TOOLTIPS_CTX, new Map())

export function useAppTooltipsCtx(id: string, hook: TooltipHook) {
  const ctx = getAppTooltipsCtx()
  ctx.set(id, hook)
  return readable(null, () => () => ctx.delete(id))
}
export const getAppTooltipsCtx = () => getContext<CtxType>(APP_TOOLTIPS_CTX)

export function getAppTooltipCtx(id: string) {
  const ctx = getAppTooltipsCtx()
  return ctx && ctx.get(id)
}
