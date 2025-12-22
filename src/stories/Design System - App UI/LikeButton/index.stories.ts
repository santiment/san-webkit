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

export const Anon: Story = {
  parameters: {
    mockApi: () => ({
      currentUser: null,
    }),
  },
}

export const LoggedIn: Story = {
  parameters: {
    mockApi: () => ({
      currentUser: {},
      'query vote': {},
    }),
  },
}
