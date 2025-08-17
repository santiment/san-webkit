<script lang="ts">
  import type { Snippet } from 'svelte'

  import { cn } from '../../utils/index.js'

  import Section from './Section.svelte'
  import Metamask from './Metamask.svelte'
  import Divider from './Divider.svelte'
  import Google from './Google.svelte'
  import Twitter from './Twitter.svelte'
  import EmailForm from './EmailForm.svelte'
  import EmailConfirmation from './EmailConfirmation.svelte'

  type TProps = {
    title: string
    bottomLabel?: string
    bottomAction?: string
    bottomHref?: string
    isSignUp?: boolean
    from?: string
    children?: Snippet
    class?: string
    onMetamaskClick?: () => Promise<void>
  }

  const {
    title,
    bottomLabel = 'New to Santiment?',
    bottomAction = 'Create an account',
    bottomHref: bottomPath = '/sign-up',
    isSignUp = false,
    from = '',
    class: className = '',
    children,
    onMetamaskClick,
  }: TProps = $props()

  let verifiedEmail = $state<string>()

  const bottomHref = $derived(bottomPath + `?from=${encodeURIComponent(from)}`)
</script>

{#if verifiedEmail}
  <EmailConfirmation email={verifiedEmail} {isSignUp} clearEmail={() => (verifiedEmail = '')} />
{:else}
  <Section
    {title}
    class={cn('text-base', className)}
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
