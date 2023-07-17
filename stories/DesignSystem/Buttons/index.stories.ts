import type { Meta, StoryObj } from '@storybook/svelte'

import Buttons from './index.svelte'

const meta = {
  title: 'Design System/Buttons',
  component: Buttons,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/svelte/configure/story-layout
    layout: 'fullscreen',

    // docs: { story: { height: 100 } },
  },
} satisfies Meta<Buttons>
type Story = StoryObj<typeof meta>

export default meta

export const Default: Story = {}
