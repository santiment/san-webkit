import type { Meta, StoryObj } from '@storybook/svelte'
import type { Component, ComponentProps } from 'svelte'

import component from './index.svelte'
import PositionedTooltip from './PositionedTooltip.svelte'
import TooltipWithButtonComponent from './TooltipWithButton.svelte'

const meta = {
  component,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<component>
type Story = StoryObj<typeof meta>

export default meta

export const Tooltip: Story = {}

export const TooltipWithPostitionConfig: StoryObj<typeof PositionedTooltip> = {
  render: () => ({
    Component: PositionedTooltip,
  }),
}

export const TooltipWithButton: StoryObj<typeof TooltipWithButtonComponent> = {
  render: () => ({
    Component: TooltipWithButtonComponent,
  }),
}
