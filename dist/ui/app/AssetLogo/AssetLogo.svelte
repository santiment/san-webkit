<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","o-optimism":"optimism-ethereum","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","sol-doublezero":"doublezero","floki-inu-v2":"floki-inu","gala-v2":"gala","sol-zebec-network":"zebec-network","sol-raydium":"raydium","luna":"terra-luna","sol-monad":"monad","zencash":"horizen","o-synthetix-network-token":"synthetix","sol-meteora":"meteora","sol-loaded-lions":"loaded-lions","stasis-euro":"stasis-eurs","sol-soon":"soon","sol-yzy":"yzy","arb-sushi":"sushiswap","sushi":"sushiswap","bnb-sushi":"bsc-sushi","mantra-dao":"mantra","sol-theuselesscoin":"theuselesscoin","sol-huma-finance":"huma-finance","hive":"hive-blockchain","sol-ore-new":"ore-new","swipe":"sxp","bnb-swipe":"sxp","rif-token":"rsk-infrastructure-framework","small-love-potion":"smooth-love-potion","sol-the-white-whale":"the-white-whale","sol-avici":"avici","dia-data":"dia","bounce":"bounce-token","zcoin":"firo","uquid_coin":"uquid-coin","sol-humidifi":"humidifi","BTRST":"braintrust","sol-graphite-protocol":"graphite-protocol","sol-collector-crypt":"collector-crypt","smart-bitcoin":"rsk-smart-bitcoin","terra-virtua-kolekt":"vanar","p-ixt-token":"ix-token","funfair":"funtoken","ton-crystal":"everscale","scroll-v2":"scroll","melon":"enzyme","ethos":"voyager-token","sol-wojak-sol":"wojak-sol","sol-zeta":"zeta","omisego":"omg","bnb-attestation-service":"bnb-attestation-service","aavegotchi-ghst-token":"aavegotchi","sol-agenda-47":"agenda-47","sol-nobody-sausage":"nobody-sausage","sol-mori-coin":"mori-coin","sol-cudis":"cudis","sol-verse-world":"verse-world","emirex":"emirex-token","sol-uranus-coin":"uranus-coin","sol-dowge":"dowge","sol-mobyscreener":"mobyscreener","sol-masha":"masha","sol-unstable-coin-sol":"unstable-coin-sol","machine-xchange-coin":"mxc","sol-estatex":"estatex","chronotech":"chrono-tech","sol-agi-alpha-agent":"agi-alpha-agent","sol-light":"light","monolith":"tokencard","sun-contract":"suncontract","neutrino-dollar":"neutrino-usd","sol-labubu-xyz":"labubu-xyz","library-credit":"library-credits","super-zero":"super-zero-protocol","internet-node-token":"int-chain","sol-kokok-the-roach":"kokok-the-roach","sol-moonpig":"moonpig","p-klima-dao":"klimadao","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","synternet-v2":"synternet","sol-hosico":"hosico","sol-startupcoin":"startupcoin","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","paccoin":"pac-protocol","perl-eco":"perlin","sol-hyperpigmentation":"hyperpigmentation","sol-dinosol":"dinosol","sol-tiger-shark":"tiger-shark","sol-yeti":"yeti","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","yobit":"yobit-token","reddcoin":"redd","probit":"probit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
