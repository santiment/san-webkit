<script lang="ts">
  import type { MouseEventHandler } from 'svelte/elements'

  import Button from '$ui/core/Button/Button.svelte'

  type Props = {
    class?: string
    title: string
    icon: string
    href?: string
    loading?: boolean
    isSignUp?: boolean
    onclick: MouseEventHandler<HTMLButtonElement>
  }

  const {
    class: className,
    title,
    href,
    icon,
    loading = false,
    isSignUp = false,
    onclick,
  }: Props = $props()
</script>

<Button variant="border" size="lg" class={className} {loading} {href} {onclick}>
  {#if icon}
    <img src="/webkit/icons/{icon}.svg" alt={icon} />
  {/if}

  {isSignUp ? 'Sign up' : 'Log in'} with {title}
</Button>
