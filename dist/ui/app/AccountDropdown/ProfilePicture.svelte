<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import { useCustomerCtx } from '../../../ctx/customer/index.svelte.js'
  import Button from '../../core/Button/index.js'
  import Svg from '../../core/Svg/index.js'
  import { cn } from '../../utils/index.js'
  import Picture from '../Picture/index.js'

  const { class: className, ...rest }: ComponentProps<typeof Button> = $props()

  const { customer, currentUser } = useCustomerCtx()

  const isPro = $derived(customer.$.isPro)
  const isBusinessPro = $derived(customer.$.isBusinessPro || customer.$.isCustom)
</script>

<Button
  variant="plain"
  style="--tw-ring-color:var(--{isBusinessPro ? 'blue' : isPro ? 'orange' : 'casper'})"
  class={cn(
    'flex size-8 rounded-full !fill-waterloo p-0 !text-waterloo center sm:size-12',
    currentUser.$$
      ? 'ring-[1.5px] ring-inset data-[state=open]:ring-[2.5px] hover:ring-[2.5px] sm:ring-2'
      : 'bg-athens data-[state=open]:bg-porcelain hover:bg-porcelain',
    className,
  )}
  {...rest}
>
  {#if currentUser.$$}
    <Picture class="size-6 text-base sm:size-10" src={currentUser.$$.avatarUrl}>
      {(currentUser.$$.username || '').slice(0, 1).toUpperCase()}
    </Picture>
  {:else}
    <Svg id="user"></Svg>
  {/if}
</Button>
