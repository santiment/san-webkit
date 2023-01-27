<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import { createElement } from 'react'
  import ReactDOM from 'react-dom'
  import Products from '@/ui/Products/react'
  import OnMount from './OnMount.svelte'

  const mount = (root, props) => ReactDOM.render(createElement(Products, props), root)
  const destroy = (root) => ReactDOM.unmountComponentAtNode(root)
</script>

<Meta title="Example/Products" />

<Story name="React - default trigger">
  <OnMount {mount} {destroy} />
</Story>

<Story name="React - custom trigger">
  <OnMount
    mount={(root) =>
      mount(root, {
        trigger: createElement('div', null, 'Custom trigger'),
      })}
    {destroy}
  />
</Story>
