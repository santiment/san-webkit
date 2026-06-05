import type { Meta, StoryObj } from '@storybook/svelte'
import component from './ImageViewer.svelte'

const meta = {
  component,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<component>
type Story = StoryObj<typeof meta>

export default meta

export const ImageViewer: Story = {}
