<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","sol-pump-fun":"pump-fun","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","gatechain-token":"gatetoken","o-optimism":"optimism-ethereum","curve":"curve-dao-token","arb-curve":"curve-dao-token","injective-protocol":"injective","blockstack":"stacks","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","gala-v2":"gala","sol-monad":"monad","sol-raydium":"raydium","sol-zebec-network":"zebec-network","o-synthetix-network-token":"synthetix","zencash":"horizen","sol-meteora":"meteora","luna":"terra-luna","sol-soon":"soon","sol-loaded-lions":"loaded-lions","stasis-euro":"stasis-eurs","sol-theuselesscoin":"theuselesscoin","sol-yzy":"yzy","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","mantra-dao":"mantra","sol-huma-finance":"huma-finance","hive":"hive-blockchain","sol-ore-new":"ore-new","bnb-swipe":"sxp","swipe":"sxp","dia-data":"dia","zcoin":"firo","sol-wojak-sol":"wojak-sol","bounce":"bounce-token","rif-token":"rsk-infrastructure-framework","small-love-potion":"smooth-love-potion","BTRST":"braintrust","uquid_coin":"uquid-coin","funfair":"funtoken","p-ixt-token":"ix-token","terra-virtua-kolekt":"vanar","smart-bitcoin":"rsk-smart-bitcoin","ton-crystal":"everscale","scroll-v2":"scroll","melon":"enzyme","sol-collector-crypt":"collector-crypt","sol-zeta":"zeta","sol-nobody-sausage":"nobody-sausage","sol-agenda-47":"agenda-47","ethos":"voyager-token","sol-uranus-coin":"uranus-coin","omisego":"omg","sol-mori-coin":"mori-coin","bnb-attestation-service":"bnb-attestation-service","aavegotchi-ghst-token":"aavegotchi","sol-graphite-protocol":"graphite-protocol","sol-verse-world":"verse-world","sol-mobyscreener":"mobyscreener","sol-dowge":"dowge","sol-cudis":"cudis","sol-unstable-coin-sol":"unstable-coin-sol","emirex":"emirex-token","chronotech":"chrono-tech","sol-estatex":"estatex","sol-masha":"masha","synternet-v2":"synternet","sol-light":"light","sol-agi-alpha-agent":"agi-alpha-agent","sun-contract":"suncontract","monolith":"tokencard","sol-hosico":"hosico","sol-labubu-xyz":"labubu-xyz","neutrino-dollar":"neutrino-usd","sol-kokok-the-roach":"kokok-the-roach","super-zero":"super-zero-protocol","library-credit":"library-credits","sol-moonpig":"moonpig","internet-node-token":"int-chain","sol-startupcoin":"startupcoin","p-klima-dao":"klimadao","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","sol-launch-coin-on-believe":"launch-coin-on-believe","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-tiger-shark":"tiger-shark","perl-eco":"perlin","machine-xchange-coin":"mxc","paccoin":"pac-protocol","sol-yeti":"yeti","sol-hyperpigmentation":"hyperpigmentation","sol-ani-grok-companion":"ani-grok-companion","sol-avici":"avici","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
</script>

<script lang="ts">
  import Picture from '../Picture/index.js'
  import Svg from '../../core/Svg/index.js'

  let {
    slug,
    placeholderSize = 12,
    ...rest
  }: { class?: string; slug: string; placeholderSize?: number } = $props()

  let logo = $derived(STATIC_ASSET_LOGO[slug] || slug.replace(CHAIN_REGEX, ''))
</script>

{#key logo}
  <Picture
    alt="logo"
    {...rest}
    src="https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_{logo}.png"
  >
    <Svg id="asset-small" w={placeholderSize}></Svg>
  </Picture>
{/key}
