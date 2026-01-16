<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","blockstack":"stacks","o-optimism":"optimism-ethereum","curve":"curve-dao-token","arb-curve":"curve-dao-token","injective-protocol":"injective","sol-first-digital-usd":"first-digital-usd","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","gala-v2":"gala","sol-raydium":"raydium","sol-zebec-network":"zebec-network","sol-monad":"monad","zencash":"horizen","luna":"terra-luna","o-synthetix-network-token":"synthetix","sol-meteora":"meteora","sol-soon":"soon","sol-loaded-lions":"loaded-lions","stasis-euro":"stasis-eurs","sol-yzy":"yzy","sol-theuselesscoin":"theuselesscoin","sushi":"sushiswap","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","mantra-dao":"mantra","sol-the-white-whale":"the-white-whale","sol-huma-finance":"huma-finance","hive":"hive-blockchain","sol-avici":"avici","sol-ore-new":"ore-new","swipe":"sxp","bnb-swipe":"sxp","zcoin":"firo","rif-token":"rsk-infrastructure-framework","bounce":"bounce-token","dia-data":"dia","small-love-potion":"smooth-love-potion","sol-humidifi":"humidifi","uquid_coin":"uquid-coin","BTRST":"braintrust","sol-collector-crypt":"collector-crypt","p-ixt-token":"ix-token","sol-graphite-protocol":"graphite-protocol","smart-bitcoin":"rsk-smart-bitcoin","funfair":"funtoken","ton-crystal":"everscale","terra-virtua-kolekt":"vanar","scroll-v2":"scroll","melon":"enzyme","ethos":"voyager-token","sol-wojak-sol":"wojak-sol","bnb-attestation-service":"bnb-attestation-service","sol-zeta":"zeta","sol-agenda-47":"agenda-47","omisego":"omg","sol-nobody-sausage":"nobody-sausage","sol-mori-coin":"mori-coin","aavegotchi-ghst-token":"aavegotchi","sol-uranus-coin":"uranus-coin","sol-verse-world":"verse-world","sol-cudis":"cudis","emirex":"emirex-token","sol-dowge":"dowge","sol-mobyscreener":"mobyscreener","sol-unstable-coin-sol":"unstable-coin-sol","sol-masha":"masha","machine-xchange-coin":"mxc","sol-estatex":"estatex","chronotech":"chrono-tech","sol-light":"light","sol-hosico":"hosico","sol-agi-alpha-agent":"agi-alpha-agent","monolith":"tokencard","sun-contract":"suncontract","sol-labubu-xyz":"labubu-xyz","neutrino-dollar":"neutrino-usd","library-credit":"library-credits","super-zero":"super-zero-protocol","internet-node-token":"int-chain","sol-kokok-the-roach":"kokok-the-roach","synternet-v2":"synternet","p-klima-dao":"klimadao","sol-moonpig":"moonpig","forceprotocol":"the-force-protocol","sol-startupcoin":"startupcoin","shroom-finance":"niftyx-protocol","sol-launch-coin-on-believe":"launch-coin-on-believe","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-hyperpigmentation":"hyperpigmentation","perl-eco":"perlin","sol-dinosol":"dinosol","sol-tiger-shark":"tiger-shark","paccoin":"pac-protocol","sol-yeti":"yeti","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","yobit":"yobit-token","reddcoin":"redd","probit":"probit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
