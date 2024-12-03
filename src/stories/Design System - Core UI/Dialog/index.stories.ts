import type { Meta, StoryObj } from '@storybook/svelte'
import component from './index.svelte'
import LandscapeStory from './LandscapeStory.svelte'

const meta = {
  component,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<component>
type Story = StoryObj<typeof meta>

export default meta

export const Dialog: Story = {}

export const LandscapeModal: StoryObj<typeof LandscapeStory> = {
  render: () => ({ Component: LandscapeStory }),
}
