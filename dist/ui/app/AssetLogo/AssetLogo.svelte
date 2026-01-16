<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","blockstack":"stacks","o-optimism":"optimism-ethereum","arb-curve":"curve-dao-token","curve":"curve-dao-token","injective-protocol":"injective","sol-first-digital-usd":"first-digital-usd","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","gala-v2":"gala","sol-raydium":"raydium","sol-zebec-network":"zebec-network","sol-monad":"monad","zencash":"horizen","luna":"terra-luna","o-synthetix-network-token":"synthetix","sol-soon":"soon","sol-meteora":"meteora","sol-loaded-lions":"loaded-lions","stasis-euro":"stasis-eurs","sol-yzy":"yzy","sol-theuselesscoin":"theuselesscoin","arb-sushi":"sushiswap","sushi":"sushiswap","bnb-sushi":"bsc-sushi","mantra-dao":"mantra","sol-the-white-whale":"the-white-whale","sol-huma-finance":"huma-finance","sol-avici":"avici","hive":"hive-blockchain","sol-ore-new":"ore-new","bnb-swipe":"sxp","swipe":"sxp","zcoin":"firo","rif-token":"rsk-infrastructure-framework","bounce":"bounce-token","dia-data":"dia","small-love-potion":"smooth-love-potion","sol-humidifi":"humidifi","uquid_coin":"uquid-coin","BTRST":"braintrust","p-ixt-token":"ix-token","sol-collector-crypt":"collector-crypt","funfair":"funtoken","smart-bitcoin":"rsk-smart-bitcoin","ton-crystal":"everscale","terra-virtua-kolekt":"vanar","sol-graphite-protocol":"graphite-protocol","scroll-v2":"scroll","sol-wojak-sol":"wojak-sol","melon":"enzyme","ethos":"voyager-token","sol-zeta":"zeta","bnb-attestation-service":"bnb-attestation-service","sol-agenda-47":"agenda-47","omisego":"omg","sol-nobody-sausage":"nobody-sausage","sol-mori-coin":"mori-coin","aavegotchi-ghst-token":"aavegotchi","sol-uranus-coin":"uranus-coin","sol-verse-world":"verse-world","sol-cudis":"cudis","emirex":"emirex-token","sol-dowge":"dowge","sol-mobyscreener":"mobyscreener","sol-unstable-coin-sol":"unstable-coin-sol","sol-masha":"masha","sol-estatex":"estatex","chronotech":"chrono-tech","machine-xchange-coin":"mxc","sol-light":"light","sol-hosico":"hosico","sol-agi-alpha-agent":"agi-alpha-agent","monolith":"tokencard","sun-contract":"suncontract","neutrino-dollar":"neutrino-usd","sol-labubu-xyz":"labubu-xyz","library-credit":"library-credits","super-zero":"super-zero-protocol","internet-node-token":"int-chain","sol-kokok-the-roach":"kokok-the-roach","sol-moonpig":"moonpig","p-klima-dao":"klimadao","synternet-v2":"synternet","forceprotocol":"the-force-protocol","sol-startupcoin":"startupcoin","shroom-finance":"niftyx-protocol","sol-launch-coin-on-believe":"launch-coin-on-believe","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-hyperpigmentation":"hyperpigmentation","perl-eco":"perlin","sol-dinosol":"dinosol","sol-tiger-shark":"tiger-shark","paccoin":"pac-protocol","sol-yeti":"yeti","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","yobit":"yobit-token","reddcoin":"redd","probit":"probit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
