<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","file-coin":"filecoin","sol-pump-fun":"pump-fun","gatechain-token":"gatetoken","blockstack":"stacks","o-optimism":"optimism-ethereum","arb-curve":"curve-dao-token","curve":"curve-dao-token","injective-protocol":"injective","sol-first-digital-usd":"first-digital-usd","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","gala-v2":"gala","sol-raydium":"raydium","sol-zebec-network":"zebec-network","sol-monad":"monad","luna":"terra-luna","o-synthetix-network-token":"synthetix","zencash":"horizen","sol-soon":"soon","sol-loaded-lions":"loaded-lions","sol-the-white-whale":"the-white-whale","stasis-euro":"stasis-eurs","sol-meteora":"meteora","sol-yzy":"yzy","sol-theuselesscoin":"theuselesscoin","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","sushi":"sushiswap","mantra-dao":"mantra","sol-ore-new":"ore-new","sol-huma-finance":"huma-finance","sol-avici":"avici","hive":"hive-blockchain","bnb-swipe":"sxp","swipe":"sxp","dia-data":"dia","bounce":"bounce-token","rif-token":"rsk-infrastructure-framework","sol-humidifi":"humidifi","p-ixt-token":"ix-token","small-love-potion":"smooth-love-potion","BTRST":"braintrust","uquid_coin":"uquid-coin","sol-collector-crypt":"collector-crypt","zcoin":"firo","sol-wojak-sol":"wojak-sol","funfair":"funtoken","smart-bitcoin":"rsk-smart-bitcoin","ton-crystal":"everscale","sol-graphite-protocol":"graphite-protocol","terra-virtua-kolekt":"vanar","scroll-v2":"scroll","melon":"enzyme","ethos":"voyager-token","sol-zeta":"zeta","bnb-attestation-service":"bnb-attestation-service","omisego":"omg","sol-nobody-sausage":"nobody-sausage","sol-mori-coin":"mori-coin","sol-agenda-47":"agenda-47","aavegotchi-ghst-token":"aavegotchi","sol-uranus-coin":"uranus-coin","sol-verse-world":"verse-world","sol-cudis":"cudis","emirex":"emirex-token","sol-dowge":"dowge","sol-mobyscreener":"mobyscreener","sol-unstable-coin-sol":"unstable-coin-sol","sol-masha":"masha","chronotech":"chrono-tech","sol-estatex":"estatex","sol-agi-alpha-agent":"agi-alpha-agent","monolith":"tokencard","sol-hosico":"hosico","sol-light":"light","sun-contract":"suncontract","sol-labubu-xyz":"labubu-xyz","neutrino-dollar":"neutrino-usd","library-credit":"library-credits","super-zero":"super-zero-protocol","synternet-v2":"synternet","internet-node-token":"int-chain","sol-kokok-the-roach":"kokok-the-roach","sol-moonpig":"moonpig","p-klima-dao":"klimadao","forceprotocol":"the-force-protocol","sol-startupcoin":"startupcoin","shroom-finance":"niftyx-protocol","sol-dinosol":"dinosol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","perl-eco":"perlin","sol-tiger-shark":"tiger-shark","paccoin":"pac-protocol","sol-hyperpigmentation":"hyperpigmentation","sol-yeti":"yeti","machine-xchange-coin":"mxc","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","yobit":"yobit-token","reddcoin":"redd","probit":"probit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
