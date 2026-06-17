import type { Meta, StoryObj } from '@storybook/svelte'
import component from './index.svelte'
import Notifications from './Notifications.svelte'

const meta = {
  component,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<component>
type Story = StoryObj<typeof meta>

export default meta

export const SearchUser: Story = {}

export const SubscribeToNotifications: StoryObj<typeof Notifications> = {
  render: () => ({
    Component: Notifications,
  }),
}
