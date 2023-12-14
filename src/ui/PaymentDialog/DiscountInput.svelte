<script lang="ts">
  import { onDestroy, onMount } from 'svelte'
  import { queryCoupon } from '@/api/plans'
  import { debounce } from '@/utils/fn'
  import Svg from '@/ui/Svg/svelte'
  import { getCurrentUser$Ctx } from '@/stores/user'
  import Input from './Input.svelte'

  export let percentOff = 0
  export let ctx = { coupon: '' }

  const { currentUser$ } = getCurrentUser$Ctx()

  let node: HTMLInputElement
  let value = ''
  let loading = false
  let isValid = false

  $: node && (node.dataset.isValid = isValid.toString())

  const [checkCoupon, clearTimer] = debounce(700, (coupon: string) => {
    const onData = (data) => value === coupon && onCouponLoaded(data)
    const onError = () => value === coupon && invalidateCoupon()
    queryCoupon(coupon).then(onData).catch(onError)
  })

  function onInput({ currentTarget }) {
    node = currentTarget
    value = node.value

    if (!value) {
      invalidateCoupon()
      return clearTimer()
    }

    loading = true
    checkCoupon(value)
  }

  function onCouponLoaded(data) {
    if (!data.isValid) return invalidateCoupon

    loading = false
    isValid = true
    percentOff = data.percentOff

    ctx.coupon = value
  }

  function invalidateCoupon() {
    loading = false
    isValid = false
    percentOff = 0

    ctx.coupon = ''
  }

  function setDefaultPromoCode() {
    const { promoCodes } = $currentUser$ || {}
    const validPromos = promoCodes?.filter((p) => p.timesRedeemed < p.maxRedemptions)

    if (!validPromos) return

    const maxOffPromo = validPromos.reduce(
      (prevPromo, promo) => (promo.percentOff > prevPromo.percentOff ? promo : prevPromo),
      { percentOff: 0, coupon: '' } as (typeof validPromos)[0],
    )

    if (!maxOffPromo.coupon) return

    value = maxOffPromo.coupon
    loading = true
    checkCoupon(value)
  }

  onMount(setDefaultPromoCode)

  onDestroy(clearTimer)
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
      <div class="loading-spin $style.status" />
    {:else}
      <Svg
        id={isValid ? 'checkmark-circle' : 'error'}
        w="16"
        class="$style.status {isValid ? '$style.valid' : ''}"
      />
    {/if}
  {/if}
</Input>

<style>
  .status {
    position: absolute;
    bottom: 12px;
    right: 12px;
    fill: var(--red);
  }
  .valid {
    fill: var(--green);
  }
</style>
