<script lang="ts">
  import mycryptoImg from './mycrypto.png'
  import ethImg from './eth.svg'
  import Description from '../Description.svelte'
  import OnlyAnnualMethod from '../OnlyAnnualMethod.svelte'
</script>

<OnlyAnnualMethod>
  <Description name="ETH & Stable coins" img={ethImg}>
    <p>
      To make a payment with crypto, you can choose to use Ethereum (ETH), Dai (DAI), or other
      Ethereum-based stablecoins for any of our services. To make a payment with ETH or DAI, simply
      send either form of crypto to this address:
    </p>

    <p class="font-semibold">0x1F3dF0b8390BB8e9e322972C5e75583E87608Ec2</p>

    <p>
      You can input: pay.santiment.eth in the send address as an alias to this respective payment
      address (see below screenshot).
    </p>

    <img src="{mycryptoImg} " alt="mycrypto" class="max-w-full" />

    <p>
      To activate your subscription, please connect your Metamask wallet to our platform or log in
      with Metamask. Note that your address must match the one used for the transfer, for it to
      work.
    </p>
  </Description>
</OnlyAnnualMethod>
