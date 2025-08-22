<script lang="ts">
  import { onMount } from 'svelte'

  import { Query } from '$lib/api/executor.js'
  import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'
  import Button from '$ui/core/Button/Button.svelte'
  import { getDialogControllerCtx } from '$ui/core/Dialog/dialogs.js'
  import Svg from '$ui/core/Svg/Svg.svelte'
  import { cn } from '$ui/utils/index.js'

  import { queryUserAlertsCount } from './api.js'

  type TProps = {
    class?: string
    title?: string
  }

  const {
    class: className,
    title = 'Duration restriction! Your Alert will be valid for 30 days. To extend Alert please',
  }: TProps = $props()

  const { customer } = useCustomerCtx()

  const dialogControllerCtx = getDialogControllerCtx()

  let show = $state(false)

  function onLinkClick() {
    if (dialogControllerCtx) dialogControllerCtx.Controller.close()
  }

  async function getAlertsRestrictions() {
    const { isPro, isMax } = customer.$
    const maxAmount = isMax ? Infinity : isPro ? 20 : 3
    const count = await queryUserAlertsCount(Query)()

    const hasRestriction = count >= maxAmount

    show = hasRestriction
  }

  onMount(() => {
    getAlertsRestrictions()
  })
</script>

{#if show}
  <section class={cn('flex w-full items-center bg-orange-light-1 px-6 py-4', className)}>
    <Svg id="warning" w="16" h="14" class="mr-3 fill-orange-hover" />
    {title}
    <Button href="/pricing" variant="link" class="ml-1 text-orange" onclick={onLinkClick}>
      Update your Plan!
    </Button>
    <Button
      variant="plain"
      size="auto"
      class="ml-auto fill-waterloo hover:fill-black"
      icon="close"
      iconSize="8"
      onclick={() => (show = false)}
    />
  </section>
{/if}
