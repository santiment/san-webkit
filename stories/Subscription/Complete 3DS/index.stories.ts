import type { Meta, StoryObj } from '@storybook/svelte'

import Component from './index.svelte'
import Live from './Live.svelte'

const meta = {
  // title: 'Design System/Icons',
  component: Live, //Component,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/svelte/configure/story-layout
    layout: 'fullscreen',

    docs: { story: { height: 800 } },
  },
} satisfies Meta<Component>
type Story = StoryObj<typeof meta>

export default meta

export const Dialog: Story = {
  parameters: {
    mockApi: () => ({
      currentUser: {},
    }),
  },
}

export const LiveCheck: Story = {
  parameters: {
    // mockApi: () => ({
    //   currentUser: {},
    // }),
  },
}
