<script lang="ts">
  import { getApiBusinessPlans } from '$ui/app/SubscriptionPlan/api.js'
  import Button from '$ui/core/Button/index.js'
  import { cn } from '$ui/utils/index.js'
  import { type ComponentProps, type SvelteComponent, type Component } from 'svelte'
  import BreakdownTable from './BreakdownTable/index.js'
  import ProductPlans from './ProductPlans.svelte'

  type SnippetArgs<
    GComponent extends SvelteComponent | Component<any, any>,
    GSnippetName extends string,
  > = Parameters<ComponentProps<GComponent>[GSnippetName]>

  let { productsWithPlans }: Pick<ComponentProps<ProductPlans>, 'productsWithPlans'> = $props()

  const PLAN_TYPES = ['👨‍🦱 For Individuals', '💼 For Business']

  let planType = $state(PLAN_TYPES[0])
  let isConsumerPlans = $derived(planType === PLAN_TYPES[0])
</script>

<div class="self-start">
  <h1 class="mb-16 text-3xl font-medium">
    Power your trading decisions with Santiment: tailored crypto analytics for Investors, Traders,
    and Researchers
  </h1>

  <div class="mb-12 inline-flex divide-x rounded-lg border text-base font-medium text-waterloo">
    {#each PLAN_TYPES as item (item)}
      <Button
        class={cn('px-4 py-1.5', planType === item && 'bg-athens text-fiord')}
        onclick={() => (planType = item)}>{item}</Button
      >
    {/each}
  </div>

  {#if isConsumerPlans}
    <ProductPlans {productsWithPlans} children={PlansBreakdownTable}></ProductPlans>
  {:else}
    <ProductPlans
      {productsWithPlans}
      productFilter={getApiBusinessPlans}
      children={PlansBreakdownTable}
    ></ProductPlans>
  {/if}
</div>

{#snippet PlansBreakdownTable(plans: SnippetArgs<ProductPlans, 'children'>[0])}
  <BreakdownTable plans={plans?.billingGroupPlans?.map((v) => v.month) || []} {isConsumerPlans}
  ></BreakdownTable>
{/snippet}
