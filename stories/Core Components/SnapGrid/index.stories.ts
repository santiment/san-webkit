import type { Meta, StoryObj } from '@storybook/svelte'

import Component from './index.svelte'

const meta = {
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<Component>
type Story = StoryObj<typeof meta>

export default meta

export const Default: Story = {
  args: {
    layout: [
      [0, 0, 2, 1],
      [2, 0, 2, 2],
      [4, 0, 2, 4],
      [6, 0, 2, 7],
      [8, 0, 2, 3],
      [10, 0, 2, 5],
      [0, 1, 2, 5],
      [2, 2, 2, 5],
      [4, 9, 2, 5],
      [6, 7, 2, 6],
      [8, 3, 2, 3],
      [10, 5, 2, 4],
      [0, 6, 2, 5],
      [2, 7, 2, 3],
      [4, 4, 2, 5],
      [6, 13, 2, 2],
      [8, 6, 2, 2],
      [10, 9, 2, 3],
      [0, 11, 2, 5],
      [2, 10, 2, 3],
    ],
  },
  parameters: {
    bodyStyle: { margin: '30px' },
  },
}

export const FourColumn: Story = {
  args: {
    cols: 4,
    layout: [
      [0, 0, 4, 1],
      [0, 1, 1, 1],
      [1, 1, 1, 1],
      [2, 1, 1, 1],
      [3, 1, 1, 1],

      [1, 2, 2, 1],

      [0, 3, 3, 1],
      [0, 4, 2, 1],
      [1, 5, 2, 1],
      [2, 6, 2, 1],
      [0, 7, 3, 1],
    ],
  },
  parameters: {
    bodyStyle: { margin: '30px' },
  },
}
