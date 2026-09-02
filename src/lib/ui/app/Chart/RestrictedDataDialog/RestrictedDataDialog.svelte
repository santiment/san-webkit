<script lang="ts" module>
  import Component from './RestrictedDataDialog.svelte'

  export const showRestrictedDataDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import { onMount } from 'svelte'

  import Dialog, { dialogs$, type TDialogProps } from '$ui/core/Dialog/index.js'
  import Button from '$ui/core/Button/index.js'
  import { trackEvent } from '$lib/analytics/index.js'
  import { getFormattedMonthDayYear } from '$lib/utils/dates/index.js'

  import { useChartPlanRestrictionsCtx } from './ctx.svelte.js'

  const { Controller, source }: TDialogProps = $props()

  const { chartPlanRestrictions } = useChartPlanRestrictionsCtx.get()

  const close = () => Controller.close()

  onMount(() => {
    trackEvent('dialog', { action: 'open', type: 'restricted_data_dialog', source })
    return () => trackEvent('dialog', { action: 'close', type: 'restricted_data_dialog', source })
  })
</script>

<Dialog class="mx-auto w-[calc(100%-40px)] max-w-[480px] column" forceDesktop>
  <h2 class="flex items-center justify-between border-b bg-whale px-5 py-3 text-base font-medium">
    Why is some data hidden?

    <Button iconSize="12" size="md" icon="close" onclick={close}></Button>
  </h2>

  <section class="min-h-0 gap-6 overflow-auto px-6 pb-5 pt-6 column md:text-base">
    <section class="gap-3 column">
      <h3 class="font-semibold">Your plan has limited data period for:</h3>

      <ul class="pl-4">
        {#each Object.values(chartPlanRestrictions.$) as restriction}
          {@const { label, restrictedTo, restrictedFrom } = restriction!}
          <li class="list-outside list-disc">
            <span>{label}</span>

            {#if restrictedFrom && restrictedTo}
              <span>
                ({getFormattedMonthDayYear(new Date(restrictedFrom))} - {getFormattedMonthDayYear(
                  new Date(restrictedTo),
                )})
              </span>
            {/if}
          </li>
        {/each}
      </ul>

      <p>
        To unlock the full potential of Santiment metrics you need to upgrade your account to PRO
      </p>
    </section>

    <Button
      class="self-start sm:w-full sm:justify-center"
      variant="fill"
      accent="orange"
      href="/pricing"
      icon="crown"
      data-source={source}
      data-type="metrics_paywall"
      onclick={close}
    >
      Upgrade
    </Button>
  </section>
</Dialog>
