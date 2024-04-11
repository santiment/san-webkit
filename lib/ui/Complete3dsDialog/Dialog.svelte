<script context="module">import { dialogs } from './../../ui/Dialog';
import Component from './Dialog.svelte';
export const showComplete3dsDialog$ = () => dialogs.__WithCtx(Component);
</script>

<script>import Dialog from './../../ui/Dialog';
import { stripe as stripe$ } from './../../stores/stripe';
import coinSvg from './coin.svg';
import { getCustomer$Ctx } from './../../stores/customer';
import { notifications$ } from '../Notifications';
export let paymentIntent = '';
export let DialogCtx;
const { customer$ } = getCustomer$Ctx();
$: stripe = $stripe$;
let loading = false;
async function onProceedClick() {
    if (loading)
        return;
    loading = true;
    const { error } = await stripe.confirmCardPayment(paymentIntent);
    if (error) {
        // The payment failed -- ask your customer for a new payment method.
        console.error(error);
        loading = false;
        return;
    }
    customer$.refetch();
    notifications$.show({
        type: 'success',
        title: 'Card payment confirmed!',
    });
    loading = false;
    DialogCtx.close();
}
</script>

<Dialog {...$$props} noTitle title="Complete payment" class="dialog-MT6B5R" isClickawayDisabled>
  <main class="txt-center body-2 dialog-body">
    <div class="body column gap-xl hv-center">
      <img src={coinSvg} alt="Coin" class="mrg-l mrg--b" />
      <h2 class="h4 txt-m">Confirmation required</h2>
      <p class="c-fiord">Please confirm your card payment in order to activate your subscription</p>
      <button on:click={onProceedClick} class="btn-1 btn--l mrg-s mrg--t" class:loading>
        Proceed
      </button>
    </div>
  </main>
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
:global(.dialog-MT6B5R) {
  width: 580px;
}

.body {
  padding: 48px 30px;
}

img {
  max-width: 300px;
}

p {
  max-width: 300px;
}

button {
  padding: 8px 60px;
}</style>
