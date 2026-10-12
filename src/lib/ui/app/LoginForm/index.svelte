<script lang="ts">
  import type { Snippet } from 'svelte'

  import { cn } from '$ui/utils/index.js'
  import { getFromSearch } from '$lib/utils/url/from.js'

  import Section from './Section.svelte'
  import Metamask from './Metamask.svelte'
  import Divider from './Divider.svelte'
  import Google from './Google.svelte'
  import Twitter from './Twitter.svelte'
  import EmailForm from './EmailForm.svelte'
  import EmailConfirmation from './EmailConfirmation.svelte'

  type TProps = {
    title?: string
    bottomLabel?: string
    bottomAction?: string
    bottomHref?: string
    isSignUp?: boolean
    from?: string
    children?: Snippet
    class?: string
    confirmationClass?: string
    onMetamaskClick?: () => Promise<void>
  }

  const {
    title: titleOverride,
    bottomLabel: bottomLabelOverride,
    bottomAction: bottomActionOverride,
    bottomHref: bottomPathOverride,
    isSignUp = false,
    from = '',
    class: className = '',
    confirmationClass,
    children,
    onMetamaskClick,
  }: TProps = $props()

  let verifiedEmail = $state<string>()

  const title = $derived(titleOverride || (isSignUp ? 'Welcome to Sanbase' : 'Welcome back!'))
  const bottomLabel = $derived(
    bottomLabelOverride || (isSignUp ? 'Have an account?' : 'New to Santiment?'),
  )
  const bottomAction = $derived(bottomActionOverride || (isSignUp ? 'Log in' : 'Create an account'))
  const bottomPath = $derived(bottomPathOverride || (isSignUp ? '/login' : '/sign-up'))

  const bottomHref = $derived(bottomPath + getFromSearch(from))
</script>

{#if verifiedEmail}
  <EmailConfirmation
    class={confirmationClass}
    email={verifiedEmail}
    {isSignUp}
    clearEmail={() => (verifiedEmail = '')}
  />
{:else}
  <Section
    {title}
    class={cn('text-nowrap text-base', className)}
    titleClass="mb-8"
    {bottomLabel}
    {bottomAction}
    {bottomHref}
  >
    <div class="flex flex-col gap-3">
      {@render children?.()}

      {#if onMetamaskClick}
        <Metamask {isSignUp} onclick={onMetamaskClick} />
      {/if}

      <Google {isSignUp} {from} />
      <Twitter {isSignUp} {from} />
    </div>

    <Divider />

    <EmailForm {isSignUp} {from} onSuccess={(email) => (verifiedEmail = email)} />
  </Section>
{/if}
