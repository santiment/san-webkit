<script context="module">import { Preloader } from './../utils/fn';
import { stripe } from './../stores/stripe';
import { dialogs } from './../ui/Dialog';
import UpdatePaymentCardDialog from './UpdatePaymentCardDialog.svelte';
export const showUpdatePaymentCardDialog = (props) => dialogs.show(UpdatePaymentCardDialog, props);
const preloadData = () => stripe.load();
export const dataPreloader = Preloader(preloadData);
</script>

<script>import Dialog from './../ui/Dialog';
import { DialogLock } from './../ui/Dialog/dialogs';
import Svg from './../ui/Svg/svelte';
import { CardBrandIllustration, createCardToken, getPaymentFormData, } from './../ui/PaymentDialog/utils';
import PayerInfo from './../ui/PaymentDialog/PayerInfo.svelte';
import Checkmark from './../ui/PaymentDialog/Checkmark.svelte';
import { mutateUpdatePaymentCard } from './../api/subscription';
import { paymentCard$ } from './../stores/paymentCard';
export let DialogPromise;
export let onSuccess = (data) => { };
export let onError;
let closeDialog;
let loading = false;
let StripeCard;
let isCardValid = false;
const onCardChange = ({ complete }) => (isCardValid = complete);
$: if (StripeCard)
    StripeCard.on('change', onCardChange);
$: disabled = !isCardValid;
function onChange() {
    DialogPromise.locking = DialogLock.WARN;
}
function onSubmit({ currentTarget }) {
    loading = true;
    DialogPromise.locking = DialogLock.LOCKED;
    const { discount, ...checkoutInfo } = getPaymentFormData(currentTarget);
    createCardToken($stripe, StripeCard, checkoutInfo)
        .then((token) => mutateUpdatePaymentCard(token.id))
        .then((data) => {
        closeDialog();
        onSuccess(data);
        paymentCard$.refetch();
    })
        .catch(onError)
        .finally(() => {
        loading = false;
        DialogPromise.locking = DialogLock.WARN;
    });
}
</script>

<Dialog {...$$props} title="Update your payment details" bind:closeDialog>
  <form on:submit|preventDefault={onSubmit} on:change={onChange}>
    <PayerInfo bind:StripeCard />

    <section class="confirmation column">
      <div class="card border mrg-l mrg--b">
        <div class="status row v-center">
          <Svg illus {...CardBrandIllustration.Visa} class="mrg-m mrg--r" />
          <Svg illus {...CardBrandIllustration.MasterCard} />

          <Checkmark class="checkmark-s2pOWj {isCardValid ? 'valid-S6rjsw' : ''}" />
        </div>

        <div class="dots row c-waterloo">
          ···· ····
          <span class="mrg-a mrg--l">····</span>
        </div>
      </div>

      <p class="caption mrg-xl mrg--b">
        Santiment never stores your payment credentials. All details are encrypted on not accessible
        to Santiment or any of the public or private community. All payments are made in an easy and
        secure fashion with just two clicks on our Pricing page.
      </p>

      <button
        type="submit"
        class="btn-1 body-2 fluid txt-center mrg-a mrg--t"
        class:loading
        class:disabled>Add card</button
      >
      <div class="txt-center caption c-waterloo mrg-s mrg--t">
        You can remove or update this card later
      </div>
    </section>
  </form>
</Dialog>

<style >/**
@include dac(desktop, tablet, phone) {
  main {
    background: red;
  }
}
*/
/**
@include dacnot(desktop) {
  main {
    background: red;
  }
}
*/
form {
  padding: 16px;
  display: block;
  overflow: auto;
  grid: "info confirmation" 1fr/1fr 1fr;
  gap: 0 32px;
  max-width: 100%;
  width: 860px;
}

:global(.desktop) form {
  padding: 16px 40px 24px;
  display: grid;
}

.confirmation {
  padding: 24px 32px;
  background: var(--athens);
  border-radius: 4px;
}

:global(body:not(.desktop)) .confirmation {
  margin-top: 16px;
}

.card {
  padding: 16px;
}

.status {
  margin: 0 0 45px;
}

.dots {
  font-size: 30px;
  line-height: 8px;
  letter-spacing: 4px;
}

p {
  color: var(--fiord);
}

button {
  --v-padding: 8px;
}

.disabled {
  --v-padding: 7px;
  border: 1px solid var(--porcelain);
}

:global(.checkmark-s2pOWj) {
  background: var(--porcelain) !important;
}

:global(.valid-S6rjsw) {
  background: var(--green-light-1) !important;
  fill: var(--green) !important;
}</style>
