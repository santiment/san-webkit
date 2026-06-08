import type { Meta, StoryObj } from '@storybook/svelte'
import Component from './index.svelte'

const meta = {
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Component>

type Story = StoryObj<typeof meta>

export default meta

export const Single: Story = {
  args: {
    isMulti: false,
  },
}

export const Multi: Story = {
  args: {
    isMulti: true,
  },
}
