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

export const FollowButton: Story = {
  args: {
    currentUser: {
      following: {
        users: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
    user: {
      id: 4,
    },
  },
}

export const UnfollowButton: Story = {
  args: {
    currentUser: {
      following: {
        users: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
    user: {
      id: 2,
    },
  },
}
