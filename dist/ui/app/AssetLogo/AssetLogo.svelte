<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","file-coin":"filecoin","gatechain-token":"gatetoken","sol-pump-fun":"pump-fun","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-first-digital-usd":"first-digital-usd","o-optimism":"optimism-ethereum","injective-protocol":"injective","blockstack":"stacks","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","gala-v2":"gala","sol-raydium":"raydium","sol-monad":"monad","sol-zebec-network":"zebec-network","luna":"terra-luna","o-synthetix-network-token":"synthetix","zencash":"horizen","sol-soon":"soon","sol-meteora":"meteora","sol-loaded-lions":"loaded-lions","stasis-euro":"stasis-eurs","sol-yzy":"yzy","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","sushi":"sushiswap","sol-huma-finance":"huma-finance","mantra-dao":"mantra","sol-theuselesscoin":"theuselesscoin","sol-humidifi":"humidifi","hive":"hive-blockchain","swipe":"sxp","bnb-swipe":"sxp","sol-avici":"avici","bounce":"bounce-token","dia-data":"dia","rif-token":"rsk-infrastructure-framework","BTRST":"braintrust","sol-ore-new":"ore-new","small-love-potion":"smooth-love-potion","uquid_coin":"uquid-coin","sol-wojak-sol":"wojak-sol","zcoin":"firo","sol-nobody-sausage":"nobody-sausage","smart-bitcoin":"rsk-smart-bitcoin","p-ixt-token":"ix-token","funfair":"funtoken","ton-crystal":"everscale","terra-virtua-kolekt":"vanar","bnb-attestation-service":"bnb-attestation-service","melon":"enzyme","scroll-v2":"scroll","sol-agenda-47":"agenda-47","sol-collector-crypt":"collector-crypt","ethos":"voyager-token","sol-zeta":"zeta","omisego":"omg","sol-mori-coin":"mori-coin","sol-graphite-protocol":"graphite-protocol","aavegotchi-ghst-token":"aavegotchi","sol-uranus-coin":"uranus-coin","sol-cudis":"cudis","sol-verse-world":"verse-world","sol-dowge":"dowge","emirex":"emirex-token","sol-unstable-coin-sol":"unstable-coin-sol","sol-mobyscreener":"mobyscreener","chronotech":"chrono-tech","sol-masha":"masha","sol-estatex":"estatex","sol-agi-alpha-agent":"agi-alpha-agent","sun-contract":"suncontract","monolith":"tokencard","synternet-v2":"synternet","sol-light":"light","sol-labubu-xyz":"labubu-xyz","neutrino-dollar":"neutrino-usd","sol-hosico":"hosico","library-credit":"library-credits","sol-kokok-the-roach":"kokok-the-roach","super-zero":"super-zero-protocol","internet-node-token":"int-chain","p-klima-dao":"klimadao","sol-moonpig":"moonpig","forceprotocol":"the-force-protocol","sol-startupcoin":"startupcoin","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-hyperpigmentation":"hyperpigmentation","perl-eco":"perlin","sol-tiger-shark":"tiger-shark","machine-xchange-coin":"mxc","paccoin":"pac-protocol","sol-yeti":"yeti","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","sol-ani-grok-companion":"ani-grok-companion","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
