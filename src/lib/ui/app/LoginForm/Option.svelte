<script lang="ts">
  import type { MouseEventHandler } from 'svelte/elements'

  import Button from '$ui/core/Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'

  type TProps = {
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
  }: TProps = $props()
</script>

<Button variant="border" size="lg" class={cn('gap-3 px-10', className)} {loading} {href} {onclick}>
  {#if icon}
    <img src="/webkit/icons/{icon}.svg" alt={icon} class="size-4" />
  {/if}

  {isSignUp ? 'Sign up' : 'Log in'} with {title}
</Button>
