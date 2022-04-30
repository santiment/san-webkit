<script>
  import Svg from '@/ui/Svg/svelte'
  import { CardBrandIllustration } from '@/ui/PaymentDialog/utils'
  import Setting from './Setting.svelte'
  import { showUpdatePaymentCardDialog } from '@/ui/UpdatePaymentCardDialog.svelte'
  import { showPlanSummaryDialog } from './PlansSummaryDialog.svelte'

  let brand = 'Visa'
</script>

<section id="subscription" class="border">
  <h4 class="caption txt-b c-waterloo">Subscription</h4>

  <Setting>
    <div class="plan border row justify fluid v-center">
      <div>
        <div class="h4">Pro Plan</div>

        <div class="c-waterloo mrg-s mrg--t">
          $529 per year. <span class="btn c-accent" on:click={() => showPlanSummaryDialog()}
            >Change billing period</span
          >
          <br />
          Will automatically renew on June 15, 2022
        </div>
      </div>

      <button class="btn-1" on:click={() => showPlanSummaryDialog()}>Change plan</button>
    </div>
  </Setting>

  <Setting>
    <div>
      Payment method
      <div class="card row v-center mrg-s mrg--t">
        <Svg illus {...CardBrandIllustration[brand]} class="mrg-m mrg--r" />

        <div class="dots c-waterloo mrg-s mrg--r">····</div>
        5678

        <Svg id="locked" w="14" h="15" class="mrg-m mrg--l" />
      </div>
    </div>

    <div class="txt-right">
      <button class="btn btn--red">Remove</button>
      <button class="btn-2 mrg-l mrg--l" on:click={() => showUpdatePaymentCardDialog()}
        >Update card</button
      >
    </div>
  </Setting>

  <Setting>
    <div>
      Billing history
      <p class="c-waterloo">Shows an overview of all charges issued for your account</p>
    </div>

    <div class="c-waterloo nowrap">No history yet</div>
  </Setting>
</section>

<style>
  h4 {
    background: var(--athens);
    padding: 12px 24px;
  }

  .btn--red {
    --color: var(--red);
    --color-hover: var(--red-hover);
  }

  .plan {
    padding: 24px;
    background: var(--athens);
  }

  .dots {
    font-size: 30px;
    line-height: 4px;
    letter-spacing: 2px;
    margin-top: -4px;
  }

  .card {
    fill: var(--waterloo);
  }
</style>
