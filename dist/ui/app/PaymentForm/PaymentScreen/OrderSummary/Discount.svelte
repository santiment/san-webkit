<script lang="ts">import { catchError, debounceTime, map, of, pipe, switchMap, tap } from "rxjs";
import { Loader } from "svelte-sonner";
import Svg from "../../../../core/Svg/index.js";
import { useObserveFnCall } from "../../../../../utils/observable.svelte.js";
import LabelInput from "../PaymentMethodSelector/Card/LabelInput.svelte";
import Note from "../../Note.svelte";
import { queryDiscountCoupon } from "../../api.js";
import { usePaymentFormCtx } from "../../state.js";
const { coupon: paymentCoupon } = usePaymentFormCtx.get();
var State = /* @__PURE__ */ ((State2) => {
  State2[State2["EMPTY"] = 0] = "EMPTY";
  State2[State2["LOADING"] = 1] = "LOADING";
  State2[State2["VALID"] = 2] = "VALID";
  State2[State2["INVALID"] = 3] = "INVALID";
  return State2;
})(State || {});
let state = $state(0 /* EMPTY */);
const onInput = useObserveFnCall(
  () => pipe(
    tap((value) => state = value ? 1 /* LOADING */ : 0 /* EMPTY */),
    tap(() => paymentCoupon.$ = null),
    debounceTime(700),
    switchMap(
      (value) => queryDiscountCoupon()(value).pipe(
        catchError(() => of(null)),
        map((coupon) => coupon && { ...coupon, value })
      )
    ),
    tap(onCoupon)
  )
);
function onCoupon(coupon) {
  if (!coupon || !coupon.isValid) {
    state = 3 /* INVALID */;
    paymentCoupon.$ = null;
    return;
  }
  state = 2 /* VALID */;
  paymentCoupon.$ = coupon;
}
</script>

<div class="gap-3 column">
  <LabelInput
    label="Have a promo code?"
    placeholder="2H8vZG5P"
    class="relative"
    oninput={(e) => onInput(e.currentTarget.value.trim())}
    value={paymentCoupon.$?.value}
  >
    {#snippet right()}
      {#if state !== State.EMPTY}
        <div class="absolute right-3 top-3 size-4" style="--gray11: var(--waterloo)">
          {#if state === State.VALID}
            <Svg id="checkmark-circle" class="fill-green"></Svg>
          {:else if state === State.INVALID}
            <Svg id="error" class="fill-red"></Svg>
          {:else}
            <Loader visible></Loader>
          {/if}
        </div>
      {/if}
    {/snippet}
  </LabelInput>

  <Note dark>
    Holding 1000 SAN tokens will result in a 20% discount.
    <br />
    <a
      href="https://academy.santiment.net/san-tokens/how-to-buy-san-tokens/"
      target="_blank"
      class="text-green">Learn how to buy SAN</a
    >
  </Note>
</div>
