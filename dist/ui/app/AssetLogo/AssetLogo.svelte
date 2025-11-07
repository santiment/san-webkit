<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","file-coin":"filecoin","sol-pump-fun":"pump-fun","sol-first-digital-usd":"first-digital-usd","gatechain-token":"gatetoken","o-optimism":"optimism-ethereum","blockstack":"stacks","injective-protocol":"injective","arb-curve":"curve-dao-token","curve":"curve-dao-token","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","gala-v2":"gala","sol-raydium":"raydium","zencash":"horizen","sol-zebec-network":"zebec-network","o-synthetix-network-token":"synthetix","luna":"terra-luna","sol-meteora":"meteora","sol-soon":"soon","sol-loaded-lions":"loaded-lions","sol-theuselesscoin":"theuselesscoin","stasis-euro":"stasis-eurs","sushi":"sushiswap","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","mantra-dao":"mantra","bnb-swipe":"sxp","swipe":"sxp","hive":"hive-blockchain","sol-huma-finance":"huma-finance","dia-data":"dia","rif-token":"rsk-infrastructure-framework","bounce":"bounce-token","small-love-potion":"smooth-love-potion","sol-uranus-coin":"uranus-coin","p-ixt-token":"ix-token","scroll-v2":"scroll","uquid_coin":"uquid-coin","zcoin":"firo","BTRST":"braintrust","sol-mori-coin":"mori-coin","terra-virtua-kolekt":"vanar","funfair":"funtoken","bnb-attestation-service":"bnb-attestation-service","smart-bitcoin":"rsk-smart-bitcoin","sol-nobody-sausage":"nobody-sausage","sol-collector-crypt":"collector-crypt","ton-crystal":"everscale","melon":"enzyme","omisego":"omg","ethos":"voyager-token","aavegotchi-ghst-token":"aavegotchi","sol-agenda-47":"agenda-47","sol-unstable-coin-sol":"unstable-coin-sol","sol-zeta":"zeta","sol-graphite-protocol":"graphite-protocol","sol-cudis":"cudis","sol-mobyscreener":"mobyscreener","sol-verse-world":"verse-world","sol-dowge":"dowge","emirex":"emirex-token","chronotech":"chrono-tech","sol-estatex":"estatex","sol-agi-alpha-agent":"agi-alpha-agent","synternet-v2":"synternet","sol-masha":"masha","sol-light":"light","sol-hosico":"hosico","sol-hyperpigmentation":"hyperpigmentation","sol-kokok-the-roach":"kokok-the-roach","monolith":"tokencard","sun-contract":"suncontract","sol-startupcoin":"startupcoin","sol-labubu-xyz":"labubu-xyz","neutrino-dollar":"neutrino-usd","super-zero":"super-zero-protocol","library-credit":"library-credits","p-klima-dao":"klimadao","internet-node-token":"int-chain","sol-tiger-shark":"tiger-shark","sol-moonpig":"moonpig","machine-xchange-coin":"mxc","forceprotocol":"the-force-protocol","sol-launch-coin-on-believe":"launch-coin-on-believe","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","perl-eco":"perlin","sol-yeti":"yeti","paccoin":"pac-protocol","sol-ani-grok-companion":"ani-grok-companion","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
