<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","file-coin":"filecoin","gatechain-token":"gatetoken","sol-pump-fun":"pump-fun","arb-curve":"curve-dao-token","curve":"curve-dao-token","o-optimism":"optimism-ethereum","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","blockstack":"stacks","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","gala-v2":"gala","sol-raydium":"raydium","sol-zebec-network":"zebec-network","sol-monad":"monad","luna":"terra-luna","o-synthetix-network-token":"synthetix","zencash":"horizen","sol-soon":"soon","sol-loaded-lions":"loaded-lions","sol-meteora":"meteora","stasis-euro":"stasis-eurs","sol-yzy":"yzy","sol-huma-finance":"huma-finance","sushi":"sushiswap","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","mantra-dao":"mantra","sol-theuselesscoin":"theuselesscoin","sol-humidifi":"humidifi","hive":"hive-blockchain","swipe":"sxp","bnb-swipe":"sxp","sol-avici":"avici","bounce":"bounce-token","rif-token":"rsk-infrastructure-framework","dia-data":"dia","sol-ore-new":"ore-new","BTRST":"braintrust","small-love-potion":"smooth-love-potion","uquid_coin":"uquid-coin","sol-wojak-sol":"wojak-sol","zcoin":"firo","smart-bitcoin":"rsk-smart-bitcoin","funfair":"funtoken","p-ixt-token":"ix-token","ton-crystal":"everscale","sol-nobody-sausage":"nobody-sausage","sol-agenda-47":"agenda-47","terra-virtua-kolekt":"vanar","sol-collector-crypt":"collector-crypt","bnb-attestation-service":"bnb-attestation-service","melon":"enzyme","scroll-v2":"scroll","ethos":"voyager-token","sol-zeta":"zeta","omisego":"omg","sol-mori-coin":"mori-coin","sol-graphite-protocol":"graphite-protocol","aavegotchi-ghst-token":"aavegotchi","sol-uranus-coin":"uranus-coin","sol-cudis":"cudis","sol-verse-world":"verse-world","sol-dowge":"dowge","emirex":"emirex-token","sol-mobyscreener":"mobyscreener","sol-unstable-coin-sol":"unstable-coin-sol","chronotech":"chrono-tech","sol-masha":"masha","sol-estatex":"estatex","sol-agi-alpha-agent":"agi-alpha-agent","sun-contract":"suncontract","synternet-v2":"synternet","monolith":"tokencard","sol-light":"light","sol-labubu-xyz":"labubu-xyz","neutrino-dollar":"neutrino-usd","sol-hosico":"hosico","library-credit":"library-credits","sol-kokok-the-roach":"kokok-the-roach","super-zero":"super-zero-protocol","internet-node-token":"int-chain","p-klima-dao":"klimadao","sol-moonpig":"moonpig","forceprotocol":"the-force-protocol","sol-startupcoin":"startupcoin","shroom-finance":"niftyx-protocol","perl-eco":"perlin","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-hyperpigmentation":"hyperpigmentation","sol-tiger-shark":"tiger-shark","machine-xchange-coin":"mxc","paccoin":"pac-protocol","sol-yeti":"yeti","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
