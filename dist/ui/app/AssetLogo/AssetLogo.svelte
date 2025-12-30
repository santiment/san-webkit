<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","file-coin":"filecoin","gatechain-token":"gatetoken","sol-pump-fun":"pump-fun","curve":"curve-dao-token","arb-curve":"curve-dao-token","o-optimism":"optimism-ethereum","sol-first-digital-usd":"first-digital-usd","blockstack":"stacks","injective-protocol":"injective","sol-doublezero":"doublezero","floki-inu-v2":"floki-inu","gala-v2":"gala","sol-raydium":"raydium","sol-zebec-network":"zebec-network","sol-monad":"monad","luna":"terra-luna","zencash":"horizen","o-synthetix-network-token":"synthetix","sol-meteora":"meteora","sol-loaded-lions":"loaded-lions","stasis-euro":"stasis-eurs","sol-yzy":"yzy","sol-soon":"soon","arb-sushi":"sushiswap","sushi":"sushiswap","bnb-sushi":"bsc-sushi","mantra-dao":"mantra","sol-huma-finance":"huma-finance","sol-theuselesscoin":"theuselesscoin","sol-the-white-whale":"the-white-whale","hive":"hive-blockchain","bnb-swipe":"sxp","swipe":"sxp","sol-humidifi":"humidifi","rif-token":"rsk-infrastructure-framework","bounce":"bounce-token","sol-ore-new":"ore-new","dia-data":"dia","BTRST":"braintrust","sol-avici":"avici","small-love-potion":"smooth-love-potion","uquid_coin":"uquid-coin","zcoin":"firo","sol-wojak-sol":"wojak-sol","p-ixt-token":"ix-token","sol-collector-crypt":"collector-crypt","ton-crystal":"everscale","funfair":"funtoken","smart-bitcoin":"rsk-smart-bitcoin","terra-virtua-kolekt":"vanar","melon":"enzyme","scroll-v2":"scroll","sol-nobody-sausage":"nobody-sausage","bnb-attestation-service":"bnb-attestation-service","sol-zeta":"zeta","ethos":"voyager-token","sol-agenda-47":"agenda-47","omisego":"omg","sol-graphite-protocol":"graphite-protocol","sol-mori-coin":"mori-coin","aavegotchi-ghst-token":"aavegotchi","sol-verse-world":"verse-world","sol-uranus-coin":"uranus-coin","sol-cudis":"cudis","sol-dowge":"dowge","emirex":"emirex-token","sol-unstable-coin-sol":"unstable-coin-sol","sol-mobyscreener":"mobyscreener","sol-masha":"masha","chronotech":"chrono-tech","sol-estatex":"estatex","sol-agi-alpha-agent":"agi-alpha-agent","sun-contract":"suncontract","monolith":"tokencard","synternet-v2":"synternet","sol-light":"light","sol-labubu-xyz":"labubu-xyz","neutrino-dollar":"neutrino-usd","sol-hosico":"hosico","library-credit":"library-credits","sol-kokok-the-roach":"kokok-the-roach","super-zero":"super-zero-protocol","internet-node-token":"int-chain","p-klima-dao":"klimadao","sol-moonpig":"moonpig","sol-startupcoin":"startupcoin","forceprotocol":"the-force-protocol","perl-eco":"perlin","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-hyperpigmentation":"hyperpigmentation","sol-tiger-shark":"tiger-shark","machine-xchange-coin":"mxc","paccoin":"pac-protocol","sol-yeti":"yeti","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
