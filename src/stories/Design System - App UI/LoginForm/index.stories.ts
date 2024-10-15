import type { Meta, StoryObj } from '@storybook/svelte'
import component from './index.svelte'
import ConnectWallet from './ConnectWallet.svelte'

const meta = {
  component,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<component>
type Story = StoryObj<typeof meta>

export default meta

export const Default: Story = {}

export const ConnectWalletButton: StoryObj<ConnectWallet> = {
  render: () => ({ Component: ConnectWallet }),
}
