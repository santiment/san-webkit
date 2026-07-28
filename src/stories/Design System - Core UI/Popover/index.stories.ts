import type { Meta, StoryObj } from '@storybook/svelte'

import component from './index.svelte'
import PopoverWithButtonComponent from './PopoverWithButton.svelte'
import PositionedPopover from './PositionedPopover.svelte'

const meta = {
  component,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<component>
type Story = StoryObj<typeof meta>

export default meta

export const Popover: Story = {}

export const PopoverWithPositionConfig: StoryObj<typeof PositionedPopover> = {
  render: () => ({
    Component: PositionedPopover,
  }),
}

export const PopoverWithButton: StoryObj<typeof PopoverWithButtonComponent> = {
  render: () => ({
    Component: PopoverWithButtonComponent,
  }),
}
