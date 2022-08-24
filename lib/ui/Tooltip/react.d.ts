/// <reference types="react" />
import type { Props } from './svelte'
declare type TooltipProps = Props & {
  trigger: JSX.Element
  tooltip: JSX.Element
}
export declare const Tooltip: ({
  trigger,
  tooltip,
  className,
  activeClass,
  dark,
  position,
  align,
  duration,
  openDelay,
  closeTimeout,
  isEnabled,
}: TooltipProps) => import('react').FunctionComponentElement<{}>
export default Tooltip
