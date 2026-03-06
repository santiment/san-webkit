<script lang="ts" module>
  import Component from './RestrictedDataDialog.svelte'

  export const showRestrictedDataDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import { onMount } from 'svelte'

  import Dialog, { dialogs$, type TDialogProps } from '../../../core/Dialog/index.js'
  import Button from '../../../core/Button/index.js'
  import { trackEvent } from '../../../../analytics/index.js'
  import { getFormattedMonthDayYear } from '../../../../utils/dates/index.js'

  import { useChartPlanRestrictionsCtx } from './ctx.svelte.js'

  const { Controller, source }: TDialogProps = $props()

  const { chartPlanRestrictions } = useChartPlanRestrictionsCtx.get()

  const close = () => Controller.close()

  onMount(() => {
    trackEvent('dialog', { action: 'open', type: 'restricted_data_dialog', source })
    return () => trackEvent('dialog', { action: 'close', type: 'restricted_data_dialog', source })
  })
</script>

<Dialog class="max-w-[480px] column">
  <h2 class="flex items-center justify-between border-b px-5 py-3 text-base">
    Restricted data

    <Button iconSize="12" size="sm" icon="close" onclick={close}></Button>
  </h2>

  <section class="min-h-0 gap-4 px-6 py-5 column">
    <article class="overflow-auto rounded border column">
      <div class="flex bg-athens text-fiord">
        <section class="cell">Metric</section>
        <section class="cell">Period of restricted data</section>
      </div>

      {#each Object.values(chartPlanRestrictions.$) as restriction}
        {@const { label, restrictedTo, restrictedFrom } = restriction!}
        <div class="flex border-t">
          <section class="cell flex items-center">{label}</section>

          <section class="cell">
            {#if restrictedFrom}
              Before: {getFormattedMonthDayYear(new Date(restrictedFrom))}
            {/if}
            <br />
            {#if restrictedTo}
              After: {getFormattedMonthDayYear(new Date(restrictedTo))}
            {/if}
          </section>
        </div>
      {/each}
    </article>

    <p class="text-fiord">
      Your plan currently is restricted to limited data for this metric. To unlock the full range of
      Santiment metrics, click the button below to Upgrade your account to PRO
    </p>

    <Button
      class="self-start"
      variant="fill"
      accent="orange"
      href="/pricing"
      data-source={source}
      data-type="metrics_paywall"
      onclick={close}>Upgrade</Button
    >
  </section>
</Dialog>

<style>
  .cell {
    flex: 1;
    padding: 6px 16px;
  }
</style>
