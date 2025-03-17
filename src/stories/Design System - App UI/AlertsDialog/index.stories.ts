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

export const NoTrialAvailable: Story = {
  parameters: {
    mockApi: () => ({
      currentUser: null,
    }),
  },
}

export const EligibleForSanbaseTrial: Story = {
  parameters: {
    mockApi: () => ({
      currentUser: null,
    }),
  },
}
