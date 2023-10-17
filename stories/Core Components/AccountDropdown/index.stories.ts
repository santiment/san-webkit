import type { Meta, StoryObj } from '@storybook/svelte'

import Component from './index.svelte'

const meta = {
  component: Component,
} satisfies Meta<Component>
type Story = StoryObj<typeof meta>

export default meta

export const NotLoggedIn: Story = {
  args: {
    currentUser: null,
  },
}

export const LoggedIn: Story = {
  args: {
    currentUser: {
      id: 1,
      username: 'test',
      avatarUrl:
        'https://production-sanbase-images.s3.amazonaws.com/uploads/9a0eb406af24a3e14862635400816ce0e62973159de4c5c82bf254df0eee3fdb_1580750259167_1580750259024.jpeg',
    },
  },
}
