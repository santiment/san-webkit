<script lang="ts">
  import type { ComponentProps } from 'svelte'
  import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'
  import Button from '$ui/core/Button/index.js'
  import Svg from '$ui/core/Svg/index.js'
  import { cn } from '$ui/utils/index.js'
  import Picture from '$ui/app/Picture/index.js'

  let {
    ref,
  }: {
    ref?: ComponentProps<Button>['ref']
  } = $props()

  const { customer, currentUser } = useCustomerCtx()

  const isPro = $derived(customer.$.isPro)
  const isBusinessPro = $derived(customer.$.isBusinessPro)
</script>

<Button
  {ref}
  style="--tw-ring-color:var(--{isBusinessPro ? 'blue' : isPro ? 'orange' : 'casper'})"
  href={currentUser.$$ ? '/account' : '/login'}
  class={cn(
    'flex size-8 rounded-full !fill-waterloo !text-waterloo center',
    currentUser.$$
      ? 'ring-[1.5px] ring-inset hover:ring-[2.5px] data-[state=open]:ring-[2.5px]'
      : 'bg-athens hover:bg-porcelain',
  )}
>
  {#if currentUser.$$}
    <Picture class="size-6 text-base" src={currentUser.$$.avatarUrl}>
      {(currentUser.$$.username || '').slice(0, 1).toUpperCase()}
    </Picture>
  {:else}
    <Svg id="user"></Svg>
  {/if}
</Button>
