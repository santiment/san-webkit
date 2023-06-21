<script>
  import { getCustomer$Ctx } from '@/stores/customer'
  import Tooltip from '@/ui/Tooltip/svelte'
  import { ONE_DAY_IN_MS } from '@/utils/dates'
  import rocketSvg from './rocket.svg'

  const { customer$ } = getCustomer$Ctx()
  $: ({ percent, expireAt } = $customer$.annualDiscount)

  $: condition = percent === 35 ? 'the month is finished' : 'your trial expired'
  $: daysLeft = getDaysLeft(expireAt)
  $: plural = daysLeft > 1 ? 's' : ''

  function getDaysLeft(expireAt) {
    const diff = +new Date(expireAt) - Date.now()
    return Math.ceil(diff / ONE_DAY_IN_MS) || 1
  }
</script>

<div class="offer row relative txt-left justify">
  <div class="img"><img src={rocketSvg} alt="rocket" /></div>

  <div class="text left">
    <h2 class="h4 txt-b mrg-s mrg--b">Special Offer for Annual plans</h2>
    <p class="body-2">Buy the Annual plan before {condition} and get {percent}% Off</p>
  </div>

  <div class="text">
    <p class="body-2 txt-b mrg-s mrg--b">This offer will end in:</p>
    <Tooltip position="top" align="center" offsetY={-10} closeTimeout={40}>
      <h3 slot="trigger" class="h3 txt-right">{daysLeft} Day{plural}</h3>
      <div slot="tooltip" class="tooltip">
        Your Special offer will expire in just {daysLeft} day{plural}.<br />If you sign up for our
        annual plan now, you'll receive <span class="c-accent">{percent}%</span> off of our already low
        price!
      </div>
    </Tooltip>
  </div>
</div>

<style lang="scss">
  .offer {
    max-width: 800px;
    background: var(--athens);
    border-radius: 8px;
    margin: 40px auto 0;
    padding: 24px 144px 24px 48px;
  }

  .left {
    max-width: 50%;
  }

  p {
    color: var(--fiord);
  }

  .img {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    pointer-events: none;
  }
  img {
    position: absolute;
    top: 37px;
    right: 28px;
  }

  h3 {
    text-decoration: underline dashed var(--casper);
    cursor: pointer;
  }

  .tooltip {
    padding: 14px 20px;
    color: var(--fiord);
    max-width: 318px;
  }

  :global(.phone),
  :global(.phone-xs) {
    .offer {
      display: block;
      padding: 18px 24px;
    }

    .left {
      max-width: 65%;
      margin: 0 0 16px;
    }

    h3 {
      text-align: left;
    }

    img {
      transform: rotate(-17deg) rotateY(180deg) scale(1.2);
      right: 55px;
      top: 110px;
    }
  }

  .text {
    position: relative;
    z-index: 2;
  }
</style>
