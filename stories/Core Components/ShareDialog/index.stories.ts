import type { Meta, StoryObj } from '@storybook/svelte'

import Component from './index.svelte'
import MobileDialog from './MobileDialog.svelte'

const meta = {
  // title: 'Design System/Buttons',
  component: Component,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  // tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/svelte/configure/story-layout
    layout: 'fullscreen',

    // docs: { story: { height: 100 } },
  },
} satisfies Meta<Component>
type Story = StoryObj<typeof meta>

export default meta

export const ShareDialog: Story = {
  name: 'Share Dialog',
}

export const ShareDialogWithProps: Story = {
  name: 'Share Dialog with Props',
  args: {
    title: 'Test',
    entity: 'Screener',
    isAuthor: true,
  },
}

export const MobileShareDialog: StoryObj<MobileDialog> = {
  render: () => ({
    Component: MobileDialog,
  }),
}
