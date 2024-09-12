import type { Meta, StoryObj } from '@storybook/svelte'
import component from './index.svelte'
import WithChild from './withChild.svelte'

const meta = {
  component,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<component>
type Story = StoryObj<typeof meta>

export default meta

export const Default: Story = {}

export const BusinessPlans: Story = {
  args: {
    planType: 'business',
    onPlanTypeChange: (type) => console.log('plan type changed to ->', type),
  },
}

export const WithChildren: StoryObj<WithChild> = {
  render: () => ({ Component: WithChild }),
}
