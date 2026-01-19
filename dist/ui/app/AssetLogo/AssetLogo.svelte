<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","o-optimism":"optimism-ethereum","blockstack":"stacks","curve":"curve-dao-token","arb-curve":"curve-dao-token","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","gala-v2":"gala","sol-zebec-network":"zebec-network","sol-raydium":"raydium","sol-monad":"monad","luna":"terra-luna","zencash":"horizen","o-synthetix-network-token":"synthetix","sol-meteora":"meteora","sol-soon":"soon","sol-loaded-lions":"loaded-lions","stasis-euro":"stasis-eurs","sol-yzy":"yzy","arb-sushi":"sushiswap","sushi":"sushiswap","bnb-sushi":"bsc-sushi","sol-theuselesscoin":"theuselesscoin","mantra-dao":"mantra","sol-huma-finance":"huma-finance","hive":"hive-blockchain","sol-ore-new":"ore-new","swipe":"sxp","bnb-swipe":"sxp","sol-avici":"avici","sol-the-white-whale":"the-white-whale","rif-token":"rsk-infrastructure-framework","bounce":"bounce-token","dia-data":"dia","small-love-potion":"smooth-love-potion","zcoin":"firo","uquid_coin":"uquid-coin","sol-humidifi":"humidifi","BTRST":"braintrust","sol-collector-crypt":"collector-crypt","terra-virtua-kolekt":"vanar","sol-graphite-protocol":"graphite-protocol","smart-bitcoin":"rsk-smart-bitcoin","p-ixt-token":"ix-token","ton-crystal":"everscale","funfair":"funtoken","scroll-v2":"scroll","melon":"enzyme","sol-wojak-sol":"wojak-sol","ethos":"voyager-token","sol-zeta":"zeta","omisego":"omg","bnb-attestation-service":"bnb-attestation-service","sol-agenda-47":"agenda-47","sol-nobody-sausage":"nobody-sausage","aavegotchi-ghst-token":"aavegotchi","sol-mori-coin":"mori-coin","sol-cudis":"cudis","sol-verse-world":"verse-world","sol-uranus-coin":"uranus-coin","emirex":"emirex-token","sol-dowge":"dowge","sol-masha":"masha","sol-mobyscreener":"mobyscreener","sol-unstable-coin-sol":"unstable-coin-sol","machine-xchange-coin":"mxc","chronotech":"chrono-tech","sol-estatex":"estatex","sol-agi-alpha-agent":"agi-alpha-agent","sol-light":"light","sol-hosico":"hosico","monolith":"tokencard","sun-contract":"suncontract","neutrino-dollar":"neutrino-usd","sol-labubu-xyz":"labubu-xyz","library-credit":"library-credits","super-zero":"super-zero-protocol","internet-node-token":"int-chain","sol-kokok-the-roach":"kokok-the-roach","sol-moonpig":"moonpig","p-klima-dao":"klimadao","forceprotocol":"the-force-protocol","synternet-v2":"synternet","shroom-finance":"niftyx-protocol","sol-startupcoin":"startupcoin","sol-launch-coin-on-believe":"launch-coin-on-believe","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","perl-eco":"perlin","sol-hyperpigmentation":"hyperpigmentation","sol-dinosol":"dinosol","sol-tiger-shark":"tiger-shark","paccoin":"pac-protocol","sol-yeti":"yeti","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","yobit":"yobit-token","reddcoin":"redd","probit":"probit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
