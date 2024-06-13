import React, { useRef, useLayoutEffect } from 'react'
import { jsx as _jsx } from 'react/jsx-runtime'
import { mount, unmount } from 'svelte'

export default ({ render, props }) => {
  const ref = useRef()

  useLayoutEffect(() => {
    if (!ref.current) return

    const component = mount(render, { target: ref.current, props })

    return () => {
      unmount(component)
    }
  }, [])

  return _jsx('div', {
    ref: ref,
    style: {
      display: 'contents',
    },
  })
}
