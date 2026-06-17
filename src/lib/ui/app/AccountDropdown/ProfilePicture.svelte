<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'
  import Button from '$ui/core/Button/index.js'
  import Svg from '$ui/core/Svg/index.js'
  import { cn } from '$ui/utils/index.js'
  import Picture from '$ui/app/Picture/index.js'

  let {
    class: className,
    as,
    ref,
  }: Partial<Pick<ComponentProps<typeof Button>, 'as' | 'ref' | 'class'>> = $props()

  const { customer, currentUser } = useCustomerCtx()

  const isPro = $derived(customer.$.isPro)
  const isBusinessPro = $derived(customer.$.isBusinessPro || customer.$.isCustom)
</script>

<Button
  {ref}
  {as}
  variant="plain"
  style="--tw-ring-color:var(--{isBusinessPro ? 'blue' : isPro ? 'orange' : 'casper'})"
  class={cn(
    'flex size-8 rounded-full !fill-waterloo p-0 !text-waterloo center md:size-12',
    currentUser.$$
      ? 'ring-[1.5px] ring-inset hover:ring-[2.5px] data-[state=open]:ring-[2.5px] md:ring-2'
      : 'bg-athens hover:bg-porcelain data-[state=open]:bg-porcelain',
    className,
  )}
>
  {#if currentUser.$$}
    <Picture class="size-6 text-base md:size-10" src={currentUser.$$.avatarUrl}>
      {(currentUser.$$.username || '').slice(0, 1).toUpperCase()}
    </Picture>
  {:else}
    <Svg id="user"></Svg>
  {/if}
</Button>
