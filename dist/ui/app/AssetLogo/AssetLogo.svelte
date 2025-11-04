<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","sol-pump-fun":"pump-fun","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","gatechain-token":"gatetoken","o-optimism":"optimism-ethereum","injective-protocol":"injective","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","gala-v2":"gala","sol-raydium":"raydium","zencash":"horizen","o-synthetix-network-token":"synthetix","sol-zebec-network":"zebec-network","luna":"terra-luna","sol-meteora":"meteora","sol-theuselesscoin":"theuselesscoin","sol-loaded-lions":"loaded-lions","sol-soon":"soon","stasis-euro":"stasis-eurs","bnb-sushi":"bsc-sushi","sushi":"sushiswap","arb-sushi":"sushiswap","mantra-dao":"mantra","bnb-swipe":"sxp","swipe":"sxp","dia-data":"dia","hive":"hive-blockchain","sol-huma-finance":"huma-finance","bounce":"bounce-token","rif-token":"rsk-infrastructure-framework","small-love-potion":"smooth-love-potion","BTRST":"braintrust","p-ixt-token":"ix-token","sol-uranus-coin":"uranus-coin","scroll-v2":"scroll","zcoin":"firo","uquid_coin":"uquid-coin","funfair":"funtoken","terra-virtua-kolekt":"vanar","bnb-attestation-service":"bnb-attestation-service","ton-crystal":"everscale","smart-bitcoin":"rsk-smart-bitcoin","sol-mori-coin":"mori-coin","sol-collector-crypt":"collector-crypt","sol-nobody-sausage":"nobody-sausage","melon":"enzyme","sol-agenda-47":"agenda-47","ethos":"voyager-token","aavegotchi-ghst-token":"aavegotchi","omisego":"omg","sol-zeta":"zeta","sol-unstable-coin-sol":"unstable-coin-sol","sol-verse-world":"verse-world","sol-mobyscreener":"mobyscreener","sol-cudis":"cudis","sol-graphite-protocol":"graphite-protocol","sol-dowge":"dowge","emirex":"emirex-token","chronotech":"chrono-tech","sol-estatex":"estatex","sol-agi-alpha-agent":"agi-alpha-agent","synternet-v2":"synternet","sol-masha":"masha","sol-light":"light","sol-hyperpigmentation":"hyperpigmentation","sol-hosico":"hosico","sol-kokok-the-roach":"kokok-the-roach","monolith":"tokencard","sun-contract":"suncontract","sol-startupcoin":"startupcoin","sol-labubu-xyz":"labubu-xyz","super-zero":"super-zero-protocol","library-credit":"library-credits","neutrino-dollar":"neutrino-usd","p-klima-dao":"klimadao","machine-xchange-coin":"mxc","sol-moonpig":"moonpig","internet-node-token":"int-chain","sol-tiger-shark":"tiger-shark","sol-launch-coin-on-believe":"launch-coin-on-believe","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","perl-eco":"perlin","sol-yeti":"yeti","paccoin":"pac-protocol","sol-ani-grok-companion":"ani-grok-companion","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
