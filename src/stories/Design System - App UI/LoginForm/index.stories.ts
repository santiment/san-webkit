import type { Meta, StoryObj } from '@storybook/svelte'
import type { Component, ComponentProps } from 'svelte'
import component from './index.svelte'
import {
  EmailLogin as EmailLoginComponent,
  WalletConnect,
  EmailConfirmation as EmailConfirmationComponent,
  SignUp as SignUpComponent,
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

export const Default: Story = {}

const Wrapped = <GComp extends Component<any>>(
  component: GComp,
  props: ComponentProps<GComp>,
): StoryObj<Container<GComp>> => ({
  render: (props) => ({ Component: Container, props }),
  args: { Component: component, ...props },
})

export const WalletConnectButton = Wrapped(WalletConnect, { isSignUp: false })

export const EmailLogin = Wrapped(EmailLoginComponent, {})

export const EmailConfirmation = Wrapped(EmailConfirmationComponent, {
  email: 'test@test.com',
  clearEmail: () => {},
})

export const SignUp = Wrapped(SignUpComponent, { title: 'Sign up title' })
