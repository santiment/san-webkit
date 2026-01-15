<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","blockstack":"stacks","o-optimism":"optimism-ethereum","curve":"curve-dao-token","arb-curve":"curve-dao-token","injective-protocol":"injective","sol-first-digital-usd":"first-digital-usd","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","gala-v2":"gala","sol-raydium":"raydium","sol-zebec-network":"zebec-network","sol-monad":"monad","luna":"terra-luna","zencash":"horizen","o-synthetix-network-token":"synthetix","sol-soon":"soon","sol-loaded-lions":"loaded-lions","stasis-euro":"stasis-eurs","sol-meteora":"meteora","sol-yzy":"yzy","sol-theuselesscoin":"theuselesscoin","sol-the-white-whale":"the-white-whale","bnb-sushi":"bsc-sushi","sushi":"sushiswap","arb-sushi":"sushiswap","mantra-dao":"mantra","sol-huma-finance":"huma-finance","sol-avici":"avici","hive":"hive-blockchain","sol-ore-new":"ore-new","swipe":"sxp","bnb-swipe":"sxp","rif-token":"rsk-infrastructure-framework","bounce":"bounce-token","dia-data":"dia","zcoin":"firo","sol-humidifi":"humidifi","small-love-potion":"smooth-love-potion","sol-collector-crypt":"collector-crypt","BTRST":"braintrust","p-ixt-token":"ix-token","uquid_coin":"uquid-coin","sol-wojak-sol":"wojak-sol","funfair":"funtoken","sol-graphite-protocol":"graphite-protocol","smart-bitcoin":"rsk-smart-bitcoin","ton-crystal":"everscale","terra-virtua-kolekt":"vanar","scroll-v2":"scroll","melon":"enzyme","ethos":"voyager-token","sol-zeta":"zeta","sol-agenda-47":"agenda-47","bnb-attestation-service":"bnb-attestation-service","sol-nobody-sausage":"nobody-sausage","omisego":"omg","sol-mori-coin":"mori-coin","aavegotchi-ghst-token":"aavegotchi","sol-uranus-coin":"uranus-coin","sol-verse-world":"verse-world","sol-cudis":"cudis","emirex":"emirex-token","sol-dowge":"dowge","sol-mobyscreener":"mobyscreener","sol-unstable-coin-sol":"unstable-coin-sol","sol-masha":"masha","sol-estatex":"estatex","chronotech":"chrono-tech","sol-light":"light","sol-agi-alpha-agent":"agi-alpha-agent","monolith":"tokencard","sol-hosico":"hosico","sun-contract":"suncontract","sol-labubu-xyz":"labubu-xyz","neutrino-dollar":"neutrino-usd","library-credit":"library-credits","super-zero":"super-zero-protocol","internet-node-token":"int-chain","sol-kokok-the-roach":"kokok-the-roach","sol-moonpig":"moonpig","p-klima-dao":"klimadao","synternet-v2":"synternet","sol-startupcoin":"startupcoin","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","sol-launch-coin-on-believe":"launch-coin-on-believe","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","perl-eco":"perlin","sol-dinosol":"dinosol","sol-hyperpigmentation":"hyperpigmentation","paccoin":"pac-protocol","sol-tiger-shark":"tiger-shark","sol-yeti":"yeti","machine-xchange-coin":"mxc","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","yobit":"yobit-token","reddcoin":"redd","probit":"probit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
