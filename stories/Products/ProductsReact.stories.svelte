<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import { createElement } from 'react'
  import ReactDOM from 'react-dom'
  import Products from '@/ui/Products/react'
  import OnMount from './OnMount.svelte'

  const mount = (props) =>
    ReactDOM.render(createElement(Products, props), document.querySelector('#root'))

  const destroy = () => ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
</script>

<Meta title="Example/Products" />

<Story name="React - default trigger">
  <OnMount {mount} {destroy} />
</Story>

<Story name="React - custon trigger">
  <OnMount
    mount={() =>
      mount({
        trigger: createElement('div', null, 'Custom trigger'),
      })}
    {destroy} />
</Story>
