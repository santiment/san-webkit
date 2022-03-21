import { Fragment, createElement, cloneElement, useState, useEffect, useRef } from 'react'
import { insert } from 'svelte/internal'
import SvelteProducts from './svelte'

type TooltipProps = {
  trigger: JSX.Element
  active: string
  isCompact: boolean
  isColumn: boolean
  className: string
  activeClassName: string
  dropdownClassName: string
}

const Products = ({
  trigger,
  active,
  isCompact,
  isColumn,
  className,
  activeClassName,
  dropdownClassName,
}: TooltipProps) => {
  const ref = useRef<HTMLElement>(null)
  const [mounted, setMounted] = useState<boolean | null>(true)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const createDefaultSlot = () => ({
      c() {},
      m(target, anchor) {
        insert(target, node, anchor)
      },
    })

    const fragment = document.createDocumentFragment()
    const svelte = new SvelteProducts({
      target: (trigger ? node.parentNode : fragment) as any,
      props: {
        class: className,
        activeClass: activeClassName,
        dropdownClassName,
        isCompact,
        isColumn,
        active,
        $$slots: trigger ? { default: [createDefaultSlot] } : undefined,
        $$scope: { ctx: {} },
      },
    })

    if (!trigger) {
      node.parentNode?.insertBefore(fragment, node)
      setMounted(null)
    }

    return () => svelte.$destroy()
  }, [])

  if (trigger) {
    return createElement(Fragment, null, cloneElement(trigger, { ref }))
  }

  return mounted && createElement('p', { ref, className: 'hide' })
}

export default Products
