<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","sol-pump-fun":"pump-fun","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","gatechain-token":"gatetoken","o-optimism":"optimism-ethereum","injective-protocol":"injective","blockstack":"stacks","curve":"curve-dao-token","arb-curve":"curve-dao-token","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","gala-v2":"gala","sol-raydium":"raydium","o-synthetix-network-token":"synthetix","sol-zebec-network":"zebec-network","zencash":"horizen","luna":"terra-luna","sol-theuselesscoin":"theuselesscoin","sol-meteora":"meteora","sol-loaded-lions":"loaded-lions","sol-soon":"soon","stasis-euro":"stasis-eurs","bnb-sushi":"bsc-sushi","sushi":"sushiswap","arb-sushi":"sushiswap","mantra-dao":"mantra","swipe":"sxp","bnb-swipe":"sxp","hive":"hive-blockchain","dia-data":"dia","sol-huma-finance":"huma-finance","rif-token":"rsk-infrastructure-framework","bounce":"bounce-token","sol-uranus-coin":"uranus-coin","small-love-potion":"smooth-love-potion","uquid_coin":"uquid-coin","p-ixt-token":"ix-token","scroll-v2":"scroll","funfair":"funtoken","bnb-attestation-service":"bnb-attestation-service","zcoin":"firo","BTRST":"braintrust","sol-collector-crypt":"collector-crypt","terra-virtua-kolekt":"vanar","sol-nobody-sausage":"nobody-sausage","smart-bitcoin":"rsk-smart-bitcoin","ton-crystal":"everscale","sol-mori-coin":"mori-coin","sol-agenda-47":"agenda-47","melon":"enzyme","sol-unstable-coin-sol":"unstable-coin-sol","ethos":"voyager-token","omisego":"omg","aavegotchi-ghst-token":"aavegotchi","sol-zeta":"zeta","sol-graphite-protocol":"graphite-protocol","sol-verse-world":"verse-world","sol-dowge":"dowge","sol-mobyscreener":"mobyscreener","sol-cudis":"cudis","emirex":"emirex-token","sol-agi-alpha-agent":"agi-alpha-agent","sol-estatex":"estatex","chronotech":"chrono-tech","synternet-v2":"synternet","sol-masha":"masha","sol-light":"light","sol-hyperpigmentation":"hyperpigmentation","sol-hosico":"hosico","sol-kokok-the-roach":"kokok-the-roach","monolith":"tokencard","sun-contract":"suncontract","sol-startupcoin":"startupcoin","sol-labubu-xyz":"labubu-xyz","neutrino-dollar":"neutrino-usd","library-credit":"library-credits","super-zero":"super-zero-protocol","p-klima-dao":"klimadao","sol-moonpig":"moonpig","internet-node-token":"int-chain","machine-xchange-coin":"mxc","sol-tiger-shark":"tiger-shark","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","sol-launch-coin-on-believe":"launch-coin-on-believe","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","perl-eco":"perlin","sol-yeti":"yeti","paccoin":"pac-protocol","sol-ani-grok-companion":"ani-grok-companion","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
