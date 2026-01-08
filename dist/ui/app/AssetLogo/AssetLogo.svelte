<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","file-coin":"filecoin","gatechain-token":"gatetoken","sol-pump-fun":"pump-fun","blockstack":"stacks","o-optimism":"optimism-ethereum","arb-curve":"curve-dao-token","curve":"curve-dao-token","injective-protocol":"injective","floki-inu-v2":"floki-inu","sol-first-digital-usd":"first-digital-usd","sol-doublezero":"doublezero","gala-v2":"gala","sol-raydium":"raydium","sol-monad":"monad","sol-zebec-network":"zebec-network","luna":"terra-luna","o-synthetix-network-token":"synthetix","zencash":"horizen","sol-soon":"soon","sol-meteora":"meteora","sol-loaded-lions":"loaded-lions","stasis-euro":"stasis-eurs","sol-theuselesscoin":"theuselesscoin","sol-yzy":"yzy","sol-the-white-whale":"the-white-whale","sushi":"sushiswap","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","mantra-dao":"mantra","sol-huma-finance":"huma-finance","sol-ore-new":"ore-new","hive":"hive-blockchain","swipe":"sxp","bnb-swipe":"sxp","sol-humidifi":"humidifi","rif-token":"rsk-infrastructure-framework","dia-data":"dia","bounce":"bounce-token","sol-avici":"avici","p-ixt-token":"ix-token","sol-wojak-sol":"wojak-sol","small-love-potion":"smooth-love-potion","BTRST":"braintrust","uquid_coin":"uquid-coin","sol-collector-crypt":"collector-crypt","zcoin":"firo","funfair":"funtoken","sol-graphite-protocol":"graphite-protocol","smart-bitcoin":"rsk-smart-bitcoin","ton-crystal":"everscale","terra-virtua-kolekt":"vanar","melon":"enzyme","scroll-v2":"scroll","sol-nobody-sausage":"nobody-sausage","ethos":"voyager-token","bnb-attestation-service":"bnb-attestation-service","sol-zeta":"zeta","omisego":"omg","sol-agenda-47":"agenda-47","sol-mori-coin":"mori-coin","aavegotchi-ghst-token":"aavegotchi","sol-uranus-coin":"uranus-coin","sol-verse-world":"verse-world","sol-cudis":"cudis","emirex":"emirex-token","sol-dowge":"dowge","sol-unstable-coin-sol":"unstable-coin-sol","sol-mobyscreener":"mobyscreener","sol-masha":"masha","sol-estatex":"estatex","chronotech":"chrono-tech","sol-agi-alpha-agent":"agi-alpha-agent","monolith":"tokencard","sol-hosico":"hosico","sol-light":"light","sun-contract":"suncontract","sol-dinosol":"dinosol","neutrino-dollar":"neutrino-usd","sol-labubu-xyz":"labubu-xyz","synternet-v2":"synternet","library-credit":"library-credits","super-zero":"super-zero-protocol","internet-node-token":"int-chain","sol-kokok-the-roach":"kokok-the-roach","sol-moonpig":"moonpig","p-klima-dao":"klimadao","sol-startupcoin":"startupcoin","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","paccoin":"pac-protocol","perl-eco":"perlin","sol-hyperpigmentation":"hyperpigmentation","sol-tiger-shark":"tiger-shark","machine-xchange-coin":"mxc","sol-yeti":"yeti","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","yobit":"yobit-token","reddcoin":"redd","probit":"probit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
