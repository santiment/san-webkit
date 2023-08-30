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
      {
        title: 'Fourth Tab',
      },
      {
        title: 'Fifth Tab',
      },
      {
        title: 'Sixth Tab',
      },
    ],
  },
  parameters: {
    bodyStyle: { margin: '30px' },
  },
}

export const WithBorder: Story = {
  args: {
    border: true,
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
      {
        title: 'Fourth Tab',
      },
      {
        title: 'Fifth Tab',
      },
      {
        title: 'Sixth Tab',
      },
    ],
  },
  parameters: {
    bodyStyle: { margin: '30px' },
  },
}
