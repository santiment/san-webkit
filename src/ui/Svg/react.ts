import { createElement, useState, useEffect, useRef } from 'react'
import SvelteSvg from './svelte'

const Svg = ({ id, illus, className, w, h }) => {
  const [mounted, setMounted] = useState<boolean | null>(true)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node?.parentNode) return

    const fragment = document.createDocumentFragment()
    const svelte = new SvelteSvg({
      target: fragment as any,
      props: {
        id,
        illus,
        className,
        w,
        h,
        $$scope: { ctx: {} },
      },
    })

    node.parentNode.insertBefore(fragment, node)
    setMounted(null)
    return () => svelte.$destroy()
  }, [])

  return mounted && createElement('p', { ref, className: 'hide' })
}

export default Svg
