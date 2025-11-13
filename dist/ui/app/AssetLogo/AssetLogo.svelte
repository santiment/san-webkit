<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","file-coin":"filecoin","sol-pump-fun":"pump-fun","sol-first-digital-usd":"first-digital-usd","gatechain-token":"gatetoken","o-optimism":"optimism-ethereum","injective-protocol":"injective","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-soon":"soon","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","gala-v2":"gala","sol-raydium":"raydium","sol-zebec-network":"zebec-network","o-synthetix-network-token":"synthetix","zencash":"horizen","sol-meteora":"meteora","luna":"terra-luna","sol-theuselesscoin":"theuselesscoin","sol-loaded-lions":"loaded-lions","stasis-euro":"stasis-eurs","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","mantra-dao":"mantra","sol-ore-new":"ore-new","bnb-swipe":"sxp","swipe":"sxp","hive":"hive-blockchain","sol-huma-finance":"huma-finance","dia-data":"dia","zcoin":"firo","rif-token":"rsk-infrastructure-framework","bounce":"bounce-token","small-love-potion":"smooth-love-potion","uquid_coin":"uquid-coin","p-ixt-token":"ix-token","scroll-v2":"scroll","BTRST":"braintrust","sol-uranus-coin":"uranus-coin","terra-virtua-kolekt":"vanar","sol-collector-crypt":"collector-crypt","funfair":"funtoken","smart-bitcoin":"rsk-smart-bitcoin","sol-mori-coin":"mori-coin","bnb-attestation-service":"bnb-attestation-service","ton-crystal":"everscale","sol-nobody-sausage":"nobody-sausage","melon":"enzyme","omisego":"omg","ethos":"voyager-token","aavegotchi-ghst-token":"aavegotchi","sol-agenda-47":"agenda-47","sol-zeta":"zeta","sol-unstable-coin-sol":"unstable-coin-sol","sol-cudis":"cudis","sol-verse-world":"verse-world","sol-mobyscreener":"mobyscreener","sol-graphite-protocol":"graphite-protocol","sol-dowge":"dowge","emirex":"emirex-token","chronotech":"chrono-tech","sol-estatex":"estatex","sol-agi-alpha-agent":"agi-alpha-agent","sol-masha":"masha","synternet-v2":"synternet","sol-light":"light","sol-hosico":"hosico","sol-hyperpigmentation":"hyperpigmentation","monolith":"tokencard","sol-kokok-the-roach":"kokok-the-roach","sun-contract":"suncontract","sol-labubu-xyz":"labubu-xyz","neutrino-dollar":"neutrino-usd","sol-startupcoin":"startupcoin","super-zero":"super-zero-protocol","library-credit":"library-credits","p-klima-dao":"klimadao","sol-moonpig":"moonpig","internet-node-token":"int-chain","forceprotocol":"the-force-protocol","sol-tiger-shark":"tiger-shark","sol-launch-coin-on-believe":"launch-coin-on-believe","shroom-finance":"niftyx-protocol","machine-xchange-coin":"mxc","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","perl-eco":"perlin","sol-yeti":"yeti","paccoin":"pac-protocol","sol-ani-grok-companion":"ani-grok-companion","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
