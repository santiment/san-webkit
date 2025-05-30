import type { NodeViewProps } from '@tiptap/core'

import { mount, unmount, type Component } from 'svelte'

export type SvelteViewComponent = Component<NodeViewProps>

export type SvelteRendererOptions = {
  target: HTMLElement
  props: NodeViewProps
  context: Map<string, any>
}

class SvelteRenderer {
  component: ReturnType<typeof mount>

  dom: HTMLElement
  props: NodeViewProps

  constructor(component: SvelteViewComponent, { target, props, context }: SvelteRendererOptions) {
    this.props = props
    this.dom = target

    this.dom.classList.add('svelte-renderer')

    this.component = mount(component, {
      target,
      props: this.props,
      context,
    })
  }

  updateProps(props: Partial<NodeViewProps>): void {
    this.props = Object.assign(this.props, props)
  }

  destroy(): void {
    unmount(this.component)
  }
}

export default SvelteRenderer
