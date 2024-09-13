<script lang="ts">import { useCustomerCtx } from "../../../ctx/customer/index.svelte.js";
import Button from "../../core/Button/index.js";
import Svg from "../../core/Svg/index.js";
import { cn } from "../../utils/index.js";
import Picture from "../Picture/index.js";
let {
  class: className,
  ref
} = $props();
const { customer, currentUser } = useCustomerCtx();
const isPro = $derived(customer.$.isPro);
const isBusinessPro = $derived(customer.$.isBusinessPro || customer.$.isCustom);
</script>

<Button
  {ref}
  style="--tw-ring-color:var(--{isBusinessPro ? 'blue' : isPro ? 'orange' : 'casper'})"
  href={currentUser.$$ ? '/profile/' + currentUser.$$.id : '/login'}
  class={cn(
    'flex size-8 rounded-full !fill-waterloo p-0 !text-waterloo center',
    currentUser.$$
      ? 'ring-[1.5px] ring-inset hover:ring-[2.5px] data-[state=open]:ring-[2.5px]'
      : 'bg-athens hover:bg-porcelain data-[state=open]:bg-porcelain',
    className,
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
