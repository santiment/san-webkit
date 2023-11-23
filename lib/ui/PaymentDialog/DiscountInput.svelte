<script>import { onDestroy, onMount } from 'svelte';
import { get } from 'svelte/store';
import { queryCoupon } from './../../api/plans';
import { debounce } from './../../utils/fn';
import Svg from './../../ui/Svg/svelte';
import { getCurrentUser$Ctx } from './../../stores/user';
import Input from './Input.svelte';
export let percentOff = 20;
const { currentUser$ } = getCurrentUser$Ctx();
let node;
let value = '';
let loading = false;
let isValid = false;
$: node && (node.dataset.isValid = isValid.toString());
const [checkCoupon, clearTimer] = debounce(700, (coupon) => {
    const onData = (data) => value === coupon && onCouponLoaded(data);
    const onError = () => value === coupon && invalidateCoupon();
    queryCoupon(coupon).then(onData).catch(onError);
});
function onInput({ currentTarget }) {
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
    if (!data.isValid)
        return invalidateCoupon;
    loading = false;
    isValid = true;
    percentOff = data.percentOff;
}
function invalidateCoupon() {
    loading = false;
    isValid = false;
    percentOff = 0;
}
//TODO: Remove after Black Friday 2023 promo
function setBlackFridayPromo() {
    value = 'BLACKFRIDAY2023';
    loading = true;
    checkCoupon(value);
}
function setDefaultPromoCode() {
    var _a;
    const { promoCodes } = (_a = get(currentUser$)) !== null && _a !== void 0 ? _a : {};
    const validPromos = promoCodes === null || promoCodes === void 0 ? void 0 : promoCodes.filter((p) => p.timesRedeemed < p.maxRedemptions);
    if (!(validPromos === null || validPromos === void 0 ? void 0 : validPromos.length))
        return setBlackFridayPromo();
    const maxOffPromo = validPromos.reduce((prevPromo, promo) => promo.percentOff > prevPromo.percentOff ? promo : prevPromo);
    if (maxOffPromo.percentOff <= 35)
        return setBlackFridayPromo();
    value = maxOffPromo.coupon;
    loading = true;
    checkCoupon(value);
}
onMount(setDefaultPromoCode);
onDestroy(clearTimer);
</script>

<Input
  title="Have a promo code?"
  name="discount"
  placeholder="2H8vZG5P"
  required={false}
  class="relative mrg-s mrg--b"
  on:input={onInput}
  {value}
>
  {#if value}
    {#if loading}
      <div class="loading-spin status-LJfiFw" />
    {:else}
      <Svg
        id={isValid ? 'checkmark-circle' : 'error'}
        w="16"
        class="status-LJfiFw {isValid ? 'valid-Dm9PRt' : ''}"
      />
    {/if}
  {/if}
</Input>

<style>
  :global(.status-LJfiFw) {
    position: absolute;
    bottom: 12px;
    right: 12px;
    fill: var(--red);
  }
  :global(.valid-Dm9PRt) {
    fill: var(--green);
  }
</style>
