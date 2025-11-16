<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","file-coin":"filecoin","sol-pump-fun":"pump-fun","sol-first-digital-usd":"first-digital-usd","gatechain-token":"gatetoken","o-optimism":"optimism-ethereum","injective-protocol":"injective","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-soon":"soon","sol-doublezero":"doublezero","floki-inu-v2":"floki-inu","gala-v2":"gala","sol-raydium":"raydium","sol-zebec-network":"zebec-network","o-synthetix-network-token":"synthetix","zencash":"horizen","sol-meteora":"meteora","luna":"terra-luna","sol-loaded-lions":"loaded-lions","stasis-euro":"stasis-eurs","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-theuselesscoin":"theuselesscoin","mantra-dao":"mantra","sol-ore-new":"ore-new","swipe":"sxp","bnb-swipe":"sxp","zcoin":"firo","sol-huma-finance":"huma-finance","hive":"hive-blockchain","dia-data":"dia","rif-token":"rsk-infrastructure-framework","bounce":"bounce-token","small-love-potion":"smooth-love-potion","uquid_coin":"uquid-coin","BTRST":"braintrust","p-ixt-token":"ix-token","scroll-v2":"scroll","terra-virtua-kolekt":"vanar","funfair":"funtoken","sol-collector-crypt":"collector-crypt","smart-bitcoin":"rsk-smart-bitcoin","ton-crystal":"everscale","sol-mori-coin":"mori-coin","melon":"enzyme","sol-nobody-sausage":"nobody-sausage","sol-uranus-coin":"uranus-coin","bnb-attestation-service":"bnb-attestation-service","omisego":"omg","ethos":"voyager-token","aavegotchi-ghst-token":"aavegotchi","sol-agenda-47":"agenda-47","sol-zeta":"zeta","sol-verse-world":"verse-world","sol-cudis":"cudis","sol-mobyscreener":"mobyscreener","sol-graphite-protocol":"graphite-protocol","emirex":"emirex-token","sol-dowge":"dowge","chronotech":"chrono-tech","sol-unstable-coin-sol":"unstable-coin-sol","sol-estatex":"estatex","synternet-v2":"synternet","sol-masha":"masha","sol-light":"light","sol-agi-alpha-agent":"agi-alpha-agent","sol-hyperpigmentation":"hyperpigmentation","monolith":"tokencard","sun-contract":"suncontract","sol-hosico":"hosico","sol-labubu-xyz":"labubu-xyz","sol-kokok-the-roach":"kokok-the-roach","neutrino-dollar":"neutrino-usd","super-zero":"super-zero-protocol","sol-startupcoin":"startupcoin","library-credit":"library-credits","p-klima-dao":"klimadao","internet-node-token":"int-chain","sol-moonpig":"moonpig","forceprotocol":"the-force-protocol","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-tiger-shark":"tiger-shark","shroom-finance":"niftyx-protocol","machine-xchange-coin":"mxc","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","perl-eco":"perlin","sol-yeti":"yeti","paccoin":"pac-protocol","sol-ani-grok-companion":"ani-grok-companion","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
