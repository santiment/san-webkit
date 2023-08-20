import type { Meta, StoryObj } from '@storybook/svelte'

import Component from '@/ui/Tabs'

const meta = {
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<Component>
type Story = StoryObj<typeof meta>

export default meta

export const Tabs: Story = {
  args: {
    tabs: [
      {
        title: 'First Tab',
      },
      {
        title: 'Second Tab',
      },
      {
        title: 'Third Tab',
      },
    ],
  },
}
