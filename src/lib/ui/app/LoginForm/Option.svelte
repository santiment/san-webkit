<script lang="ts">
  import type { MouseEventHandler } from 'svelte/elements'

  import Button from '$ui/core/Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'
  import Svg from '$ui/core/Svg/Svg.svelte'

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
    <Svg illus id={`media/${icon}`} w={16} />
  {/if}

  {isSignUp ? 'Sign up' : 'Log in'} with {title}
</Button>
