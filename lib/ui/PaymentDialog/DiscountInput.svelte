<script>import { onDestroy } from 'svelte';
import { queryCoupon } from './../../api/plans';
import { debounce } from './../../utils/fn';
import Svg from './../../ui/Svg/svelte';
import Input from './Input.svelte';
export let percentOff = 20;
let node;
let value = '';
let loading = false;
let isValid = false;

$: node && (node.dataset.isValid = isValid.toString());

const [checkCoupon, clearTimer] = debounce(700, coupon => {
  const onData = data => value === coupon && onCouponLoaded(data);

  const onError = () => value === coupon && invalidateCoupon();

  queryCoupon(coupon).then(onData).catch(onError);
});

function onInput({
  currentTarget
}) {
  node = currentTarget;
  value = node.value;

  if (!value) {
    invalidateCoupon();
    return clearTimer();
  }

  loading = true;
  checkCoupon(value);
}

function onCouponLoaded(data) {
  if (!data.isValid) return invalidateCoupon;
  loading = false;
  isValid = true;
  percentOff = data.percentOff;
}

function invalidateCoupon() {
  loading = false;
  isValid = false;
  percentOff = 0;
}

onDestroy(clearTimer);</script>

<Input
  title="Have a promo code?"
  name="discount"
  placeholder="2H8vZG5P"
  required={false}
  class="relative mrg-s mrg--b"
  on:input={onInput}
>
  {#if value}
    {#if loading}
      <div class="loading-spin status-3_Luym" />
    {:else}
      <Svg
        id={isValid ? 'checkmark-circle' : 'error'}
        w="16"
        class="status-3_Luym {isValid ? 'valid-2uCgj7' : ''}"
      />
    {/if}
  {/if}
</Input>

<style>
  :global(.status-3_Luym) {
    position: absolute;
    bottom: 12px;
    right: 12px;
    fill: var(--red);
  }
  :global(.valid-2uCgj7) {
    fill: var(--green);
  }
</style>
