import type { Meta, StoryObj } from '@storybook/svelte'
import component from './index.svelte'

const meta = {
  component,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<component>
type Story = StoryObj<typeof meta>

export default meta

export const VirtualList: Story = {
  args: {
    class: 'flex-1',
  },
}
export const MaxHeight: Story = {
  args: {
    maxHeight: 200,
  },
}
