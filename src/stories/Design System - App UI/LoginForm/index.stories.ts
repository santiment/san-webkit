import type { Meta, StoryObj } from '@storybook/svelte'
import type { Component, ComponentProps } from 'svelte'
import component from './index.svelte'
import {
  EmailLogin as EmailLoginComponent,
  WalletConnect,
  EmailConfirmation as EmailConfirmationComponent,
} from '$ui/app/LoginForm/index.js'
import Container from './Container.svelte'

const meta = {
  component,
  parameters: {
    layout: 'fullscreen',
    sveltekit_experimental: {
      stores: {
        page: {
          url: new URL(window.location.origin),
        },
      },
    },
  },
} satisfies Meta<component>
type Story = StoryObj<typeof meta>

export default meta

export const Login: Story = {
  args: {
    isSignUp: false,
  },
}

export const SignUp: Story = {
  args: {
    isSignUp: true,
  },
}

const Wrapped = <GComp extends Component<any>>(
  component: GComp,
  componentProps: ComponentProps<GComp>,
): StoryObj<Container<GComp>> => ({
  render: (props: any) => ({ Component: Container, props }),
  args: { Component: component, ...componentProps },
})

export const WalletConnectButton = Wrapped(WalletConnect, { isSignUp: false })

export const EmailLogin = Wrapped(EmailLoginComponent, { confirmationClass: 'sm:flex-1' })

export const EmailConfirmation = Wrapped(EmailConfirmationComponent, {
  class: 'sm:flex-1',
  email: 'test@test.com',
  clearEmail: () => {},
})
