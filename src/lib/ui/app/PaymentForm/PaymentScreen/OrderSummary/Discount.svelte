<script lang="ts">
  import { catchError, debounceTime, map, of, pipe, switchMap, tap } from 'rxjs'
  import { Loader } from 'svelte-sonner'

  import Svg from '$ui/core/Svg/index.js'
  import { useObserveFnCall } from '$lib/utils/observable.svelte.js'
  import { trackEvent } from '$lib/analytics/index.js'

  import { State } from './types.js'
  import LabelInput from '../PaymentMethodSelector/Card/LabelInput.svelte'
  import Note from '../../Note.svelte'
  import { queryDiscountCoupon, type TCoupon } from '../../api.js'
  import { usePaymentFormCtx } from '../../state.js'

  const { coupon: paymentCoupon } = usePaymentFormCtx.get()

  let state = $state<State>(State.EMPTY)

  const onInput = useObserveFnCall<string>(() =>
    pipe(
      tap((value) => (state = value ? State.LOADING : State.EMPTY)),
      tap(() => (paymentCoupon.$ = null)),
      debounceTime(700),
      switchMap((value) =>
        queryDiscountCoupon()(value).pipe(
          catchError(() => of({ isValid: false, percentOff: 0, value })),
          map((coupon) => coupon && { ...coupon, value }),
        ),
      ),
      tap(onCoupon),
    ),
  )

  const trackCoupon = (value: string, valid: boolean) =>
    trackEvent('input', { value, valid, type: 'payment_promocode', source: 'payment_dialog' })

  function onCoupon(coupon: null | (TCoupon & { value: string })) {
    if (!coupon || !coupon.isValid) {
      state = State.INVALID
      paymentCoupon.$ = null

      if (coupon?.value) trackCoupon(coupon.value, false)

      return
    }

    state = State.VALID
    paymentCoupon.$ = coupon

    trackCoupon(coupon.value, true)
  }
</script>

<div class="gap-3 column">
  <LabelInput
    label="Have a promo code?"
    placeholder="2H8vZG5P"
    class="relative md:[&_input]:py-2 md:[&_input]:text-base"
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
      data-type="how_to_buy_san"
      data-source="payment_dialog"
      class="text-green">Learn how to buy SAN</a
    >
  </Note>
</div>
