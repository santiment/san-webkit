import type { Meta, StoryObj } from '@storybook/svelte'

import Component from './index.svelte'
import ManageDialog from './ManageDialog.svelte'
import StyledPopup, { Accent } from './StyledPopup.svelte'

import { CookiesStyle } from '@/ui/CookiesPopup.svelte'

const meta = {
  component: Component,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<Component>
type Story = StoryObj<typeof meta>

export default meta

export const Basic: Story = {}

export const Api: Story = {
  args: {
    props: {
      style: CookiesStyle.API,
    },
  },
}

export const Sheets: Story = {
  args: {
    props: {
      style: CookiesStyle.SHEETS,
    },
  },
}

export const ManageCookiesDialog: StoryObj<ManageDialog> = {
  name: '"Manage cookies" dialog',
  render: () => ({ Component: ManageDialog }),
}

export const PurpleAccent: StoryObj<StyledPopup> = {
  render: () => ({
    Component: StyledPopup,
    props: {
      accent: Accent.Purple,
    },
  }),
}

export const BlueAccent: StoryObj<StyledPopup> = {
  render: () => {
    return {
      Component: StyledPopup,
      props: {
        accent: Accent.Blue,
      },
    }
  },
}
