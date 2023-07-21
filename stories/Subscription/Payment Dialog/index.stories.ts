import type { Meta, StoryObj } from '@storybook/svelte'

import Component from './index.svelte'
import { NULL_ANNUAL_DISCOUNT, PRO_CURRENT_USER } from '../../../.storybook/mock/user'

const meta = {
  // title: 'Design System/Icons',
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

export const PaymentDialog: Story = {
  parameters: {
    mockApi: () => ({
      passthrough: true,
      'query currentUser': PRO_CURRENT_USER,
      'query checkAnnualDiscountEligibility': NULL_ANNUAL_DISCOUNT,
    }),
  },
}
