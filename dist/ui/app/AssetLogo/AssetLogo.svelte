<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","file-coin":"filecoin","sol-pump-fun":"pump-fun","sol-first-digital-usd":"first-digital-usd","gatechain-token":"gatetoken","o-optimism":"optimism-ethereum","injective-protocol":"injective","blockstack":"stacks","curve":"curve-dao-token","arb-curve":"curve-dao-token","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","gala-v2":"gala","sol-soon":"soon","sol-raydium":"raydium","zencash":"horizen","sol-zebec-network":"zebec-network","o-synthetix-network-token":"synthetix","sol-meteora":"meteora","luna":"terra-luna","sol-loaded-lions":"loaded-lions","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","sushi":"sushiswap","stasis-euro":"stasis-eurs","sol-theuselesscoin":"theuselesscoin","sol-ore-new":"ore-new","mantra-dao":"mantra","swipe":"sxp","bnb-swipe":"sxp","zcoin":"firo","sol-huma-finance":"huma-finance","hive":"hive-blockchain","dia-data":"dia","bounce":"bounce-token","rif-token":"rsk-infrastructure-framework","small-love-potion":"smooth-love-potion","uquid_coin":"uquid-coin","BTRST":"braintrust","scroll-v2":"scroll","terra-virtua-kolekt":"vanar","sol-collector-crypt":"collector-crypt","p-ixt-token":"ix-token","funfair":"funtoken","ton-crystal":"everscale","smart-bitcoin":"rsk-smart-bitcoin","sol-nobody-sausage":"nobody-sausage","melon":"enzyme","sol-mori-coin":"mori-coin","bnb-attestation-service":"bnb-attestation-service","sol-uranus-coin":"uranus-coin","omisego":"omg","ethos":"voyager-token","aavegotchi-ghst-token":"aavegotchi","sol-zeta":"zeta","sol-agenda-47":"agenda-47","sol-verse-world":"verse-world","sol-cudis":"cudis","sol-mobyscreener":"mobyscreener","sol-graphite-protocol":"graphite-protocol","sol-unstable-coin-sol":"unstable-coin-sol","emirex":"emirex-token","sol-dowge":"dowge","chronotech":"chrono-tech","synternet-v2":"synternet","sol-estatex":"estatex","sol-masha":"masha","sol-light":"light","sol-agi-alpha-agent":"agi-alpha-agent","sol-hyperpigmentation":"hyperpigmentation","monolith":"tokencard","sun-contract":"suncontract","sol-hosico":"hosico","sol-labubu-xyz":"labubu-xyz","sol-kokok-the-roach":"kokok-the-roach","neutrino-dollar":"neutrino-usd","super-zero":"super-zero-protocol","library-credit":"library-credits","sol-startupcoin":"startupcoin","p-klima-dao":"klimadao","internet-node-token":"int-chain","sol-moonpig":"moonpig","forceprotocol":"the-force-protocol","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-tiger-shark":"tiger-shark","shroom-finance":"niftyx-protocol","machine-xchange-coin":"mxc","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","perl-eco":"perlin","sol-yeti":"yeti","paccoin":"pac-protocol","sol-ani-grok-companion":"ani-grok-companion","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
