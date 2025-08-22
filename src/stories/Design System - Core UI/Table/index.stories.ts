import type { Meta, StoryObj } from '@storybook/svelte'
import type { ComponentType } from 'svelte'

import component from './index.svelte'
import DataTableComponent from './DataTable/index.js'

const meta = {
  component,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<component>
type Story = StoryObj<typeof meta>

export default meta

export const SimpleTable: Story = {}

export const DataTable: StoryObj<typeof DataTableComponent> = {
  render: () => ({ Component: DataTableComponent as unknown as ComponentType }),
}
