import type { Meta, StoryObj } from '@storybook/svelte'
import type { ComponentType } from 'svelte'

import component from './index.svelte'
import SimpleDataTableComponent from './DataTable/SimpleDataTable.svelte'
import PagedDataTableComponent from './DataTable/PagedDataTable.svelte'
import PagedLoadDataTableComponent from './DataTable/PagedLoadDataTable.svelte'

const meta = {
  component,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<component>
type Story = StoryObj<typeof meta>

export default meta

export const SimpleTable: Story = {}

export const SimpleDataTable: StoryObj<typeof SimpleDataTableComponent> = {
  render: () => ({ Component: SimpleDataTableComponent as unknown as ComponentType }),
}

export const PagedDataTable: StoryObj<typeof PagedDataTableComponent> = {
  render: () => ({ Component: PagedDataTableComponent as unknown as ComponentType }),
}

export const PagedLoadDataTable: StoryObj<typeof PagedLoadDataTableComponent> = {
  render: () => ({ Component: PagedLoadDataTableComponent as unknown as ComponentType }),
}
