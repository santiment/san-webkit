<script context="module">import { dialogs } from './../ui/Dialog';
import RemovePaymentCardDialog from './RemovePaymentCardDialog.svelte';
export const showRemovePaymentCardDialog = () => dialogs.show(RemovePaymentCardDialog);
</script>

<script>
  import Dialog from './../ui/Dialog'
  import { DialogLock } from './../ui/Dialog/dialogs'
  import Svg from './../ui/Svg/svelte'
  import { mutateDeletePaymentCard } from './../api/subscription'
  import { paymentCard$ } from './../stores/paymentCard'

  export let DialogPromise

  let closeDialog
  let loading = false

  function onClick() {
    loading = true
    DialogPromise.locking = DialogLock.LOCKED

    mutateDeletePaymentCard()
      .then(() => {
        paymentCard$.clear()
        paymentCard$.setDefault()
        closeDialog()
      })
      .catch(() => {
        loading = false
        DialogPromise.locking = DialogLock.FREE
      })
  }
</script>

<Dialog {...$$props} noTitle bind:closeDialog>
  <div class="dialog body-2">
    <div class="h4 txt-m row v-center mrg-m mrg--b">
      Do you want to remove this card?

      <Svg id="close" class="btn mrg-a mrg--l close-V_GrYC" on:click={closeDialog} w="12" />
    </div>

    <p>
      If you remove this payment method, it will be permanently deleted from your account. You will
      not be able to purchase any paid plans until you re-add a payment method.
    </p>

    <div class="mrg-xl mrg--t">
      <button class="btn-1" class:loading on:click={onClick}>Remove card</button>

      <button class="btn-2 mrg-l mrg--l" on:click={closeDialog}>Cancel</button>
    </div>
  </div>
</Dialog>

<style>
  .dialog {
    padding: 24px 32px;
    max-width: 480px;
  }

  :global(.close-V_GrYC) {
    --fill: var(--waterloo);
    --fill-hover: var(--green);
  }

  p {
    color: var(--fiord);
  }
</style>
