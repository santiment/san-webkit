import type { Meta, StoryObj } from '@storybook/svelte'
import component from './index.svelte'
import MobileHeaderWithTitle from './MobileHeaderWithTitle.svelte'

const meta = {
  component,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<component>
type Story = StoryObj<typeof meta>

export default meta

export const MobileHeaderStory: Story = {
  name: 'MobileHeader',
}

export const MobileHeaderWithTitleStory: Story = {
  name: 'MobileHeader with title',
  render: () => ({ Component: MobileHeaderWithTitle }),
}
