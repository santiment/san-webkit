import type { Meta, StoryObj } from '@storybook/svelte'

import Component from './index.svelte'

const meta = {
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    isOpened: { type: 'boolean' },
    dark: { type: 'boolean' },
    duration: { type: 'number' },
    openDelay: { type: 'number' },
    closeDelay: { type: 'number' },
    margin: { type: 'number' },
    style: { type: 'string' },
  },
} satisfies Meta<Component>
type Story = StoryObj<typeof meta>

export default meta

export const Tooltip: Story = {}
