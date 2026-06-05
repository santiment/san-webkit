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

export const PlanChangeDialog: Story = {
  parameters: {
    mockApi: () => ({
      currentUser: {
        // isEligibleForSanbaseTrial: true
        plan: {
          pro: true,
          yearly: true,
        },
      },
    }),
  },
}
