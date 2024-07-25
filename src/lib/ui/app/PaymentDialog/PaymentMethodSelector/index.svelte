<script lang="ts">
  import Selector from '../Selector.svelte'
  import visaMastercardImg from './visa-mastercard.png'
  import ethImg from './eth.svg'
  import sanImg from './san.svg'
  import uniswapImg from './uniswap.png'

  const OPTIONS = [
    { name: 'Card', img: visaMastercardImg },
    { name: 'ETH & Stable coins', img: ethImg },
    { name: 'San token burning', img: sanImg },
    { name: 'Uniswap Liquidity', img: uniswapImg },
  ]
</script>

<Selector name="Payment method" smallGap options={OPTIONS} onSelect={console.log}>
  {#snippet children(option)}
    <h3 class="flex gap-2 center">
      <img src={option.img} alt="{option.name} image" class="h-6 max-h-6" />
      {option.name}
    </h3>
  {/snippet}
</Selector>
