import type { Meta, StoryObj } from '@storybook/svelte'

import component from './index.svelte'
import CursorFollowingComponent from './CursorFollowing.svelte'

const meta = {
  component,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<component>
type Story = StoryObj<typeof meta>

export default meta

export const ExplanationTooltip: Story = {}

export const CursorFollowing: StoryObj<typeof CursorFollowingComponent> = {
  render: () => ({ Component: CursorFollowingComponent }),
}
