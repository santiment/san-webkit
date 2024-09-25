<script lang="ts">
  import PlanChangeDialog, {
    showPlanChangeDialog$,
  } from '../../../lib/ui/app/PlanChangeDialog/PlanChangeDialog.svelte'
  import type { TSubscriptionPlan } from '../../../lib/ui/app/SubscriptionPlan/types'
  import StoryDialog from '../../Design System - Core UI/Dialog/StoryDialog.svelte'

  const showPlanChangeDialog = showPlanChangeDialog$()

  const newPlan: TSubscriptionPlan = {
    id: '0',
    name: 'PRO',
    interval: 'month',
    amount: 30000,
    isDeprecated: false,
    product: { id: '1' },
  }
</script>

<div class="flex flex-col justify-center divide-y p-6">
  <div class="flex gap-4">
    <button onclick={() => showPlanChangeDialog({ newPlan })}>Open</button>
  </div>
</div>

<StoryDialog render={PlanChangeDialog} {newPlan}></StoryDialog>
