import type { Meta, StoryObj } from '@storybook/svelte'
import component from './index.svelte'
import FinalScreenStory from './FinalScreenStory.svelte'

const meta = {
  component,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof component>
type Story = StoryObj<typeof meta>

export default meta

export const Default: Story = {}

export const FinalScreen: StoryObj<typeof FinalScreenStory> = {
  render: () => ({ Component: FinalScreenStory }),
}
