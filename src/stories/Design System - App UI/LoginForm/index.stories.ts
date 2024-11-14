import type { Meta, StoryObj } from '@storybook/svelte'
import type { Component, ComponentProps } from 'svelte'
import component from './index.svelte'
import {
  EmailLogin as EmailLoginComponent,
  WalletConnect,
  EmailConfirmation as EmailConfirmationComponent,
  SignUp as SignUpComponent,
} from '$ui/app/LoginForm/index.js'
import Gdpr from './Gdpr.svelte'
import Container from './Container.svelte'
import type { StoryProps } from '@storybook/blocks'

const meta = {
  component,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<component>
type Story = StoryObj<typeof meta>

export default meta

export const Default: Story = {}

const Wrapped = <GComp extends Component<any>>(
  component: GComp,
  componentProps: ComponentProps<GComp>,
  storyProps: Story = {},
): StoryObj<Container<GComp>> => ({
  render: (props: any) => ({ Component: Container, props }),
  args: { Component: component, ...componentProps },
  ...storyProps,
})

export const WalletConnectButton = Wrapped(WalletConnect, { isSignUp: false })

export const EmailLogin = Wrapped(EmailLoginComponent, {})

export const EmailConfirmation = Wrapped(EmailConfirmationComponent, {
  email: 'test@test.com',
  clearEmail: () => {},
})

export const SignUp = Wrapped(SignUpComponent, { title: 'Sign up title' })

export const GdprWithoutUsernamePolicyNotAccepted = Wrapped(
  Gdpr,
  {},
  {
    parameters: {
      mockApi: () => ({
        currentUser: {
          username: null,
          privacyPolicyAccepted: false,
        },
      }),
    },
  },
)

export const GdprWithUsernamePolicyNotAccepted = Wrapped(
  Gdpr,
  {},
  {
    parameters: {
      mockApi: () => ({
        currentUser: {
          username: 'username',
          privacyPolicyAccepted: false,
        },
      }),
    },
  },
)
