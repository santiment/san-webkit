import type { Meta, StoryObj } from '@storybook/svelte'
import type { Component } from 'svelte'
import component from './index.svelte'
import { EmailLogin as EmailLoginComponent, ConnectWallet } from '$ui/app/LoginForm/index.js'
import Container from './Container.svelte'

const meta = {
  component,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<component>
type Story = StoryObj<typeof meta>

export default meta

export const Default: Story = {}

const Wrapped = (children: Component): StoryObj<Container> => ({
  render: (props) => ({ Component: Container, props }),
  args: { children },
})

export const ConnectWalletButton = Wrapped(ConnectWallet)

export const EmailLogin = Wrapped(EmailLoginComponent)
