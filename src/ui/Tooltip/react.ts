import type { SvelteComponent } from 'svelte'
import type { Props } from './svelte'
import {
  Fragment,
  createElement,
  cloneElement,
  useState,
  useEffect,
  useRef,
} from 'react'
import ReactDOM from 'react-dom'
import SvelteTooltip from './svelte'

type TooltipProps = Props & {
  trigger: JSX.Element
  tooltip: JSX.Element
}

export const Tooltip = ({
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
  isEnabled = true,
}: TooltipProps) => {
  const [tooltipTarget, setTooltipTarget] = useState<HTMLElement | null>()
  const svelteRef = useRef<SvelteComponent | null>(null)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const triggerNode = ref.current
    if (!triggerNode) return

    const createTooltipSlot = () => ({
      c() {},
      m(target) {
        setTooltipTarget(target)
      },
      d(detaching) {
        if (detaching) setTooltipTarget(null)
      },
    })

    const svelte = new SvelteTooltip({
      target: triggerNode.parentNode as HTMLElement,
      props: {
        position,
        align,
        duration,
        openDelay,
        dark,
        closeTimeout,
        activeClass,
        class: className,
        trigger: triggerNode,
        $$slots: {
          tooltip: [createTooltipSlot],
        },
        $$scope: { ctx: {} },
      },
    })

    svelteRef.current = svelte
    return () => svelte.$destroy()
  }, [])

  useEffect(() => {
    const svelte = svelteRef.current
    if (!svelte) return

    svelte.$set({ isEnabled })
  }, [isEnabled])

  return createElement(
    Fragment,
    null,
    cloneElement(trigger, { ref }),
    tooltipTarget && ReactDOM.createPortal(tooltip, tooltipTarget)
  )
}

export default Tooltip
