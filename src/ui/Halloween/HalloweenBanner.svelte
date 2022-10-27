<script lang="ts">
  import Svg from '@/ui/Svg'
</script>

<div class="wrapper column fluid relative">
  <Svg illus id="halloween/halloween-banner" class="$style.banner" />
  <div class="back" />
  <Svg illus id="santiment" class="$style.santiment" />
  <Svg illus id="halloween/halloween-sales" class="$style.sales" />
  <h1 class="txt-b">27% Off</h1>
  <p class="body-2 txt-m mrg-xs mrg--b">Play by the rules:</p>
  <p class="body-2">
    Collect pumpkins that we hide on app.sanbase and get 27% discount. Want more? Find our special
    offer, 54% off for all Santiment products. Hurry up! Promo code will be valid till the 5th of
    October
  </p>
</div>

<style lang="scss">
  .wrapper {
    overflow: hidden;
    max-width: 1140px;
    height: 320px;
    padding: 28px 0 32px 48px;
    background-color: var(--athens);
    margin: 40px auto;
    border-radius: 6px;
  }

  .santiment {
    width: 97px;
    height: 18px;
  }

  .back {
    position: absolute;
    top: 0;
    right: 0;
    width: 36px;
    height: 320px;
    background-color: var(--mystic);
  }

  .banner {
    position: absolute;
    top: 0;
    right: 36px;
    width: 670px;
    height: 320px;
  }

  .sales {
    width: 181px;
    height: 18px;
    margin-top: 24px;
    margin-bottom: 6px;
  }

  h1 {
    font-size: 60px;
    line-height: 73px;
    margin-bottom: 14px;
  }

  p {
    max-width: 425px;
    line-height: 22px;

    &:last-of-type {
      line-height: 20px;
      color: var(--fiord);
    }
  }
</style>
