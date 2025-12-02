<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","file-coin":"filecoin","sol-pump-fun":"pump-fun","sol-first-digital-usd":"first-digital-usd","gatechain-token":"gatetoken","o-optimism":"optimism-ethereum","injective-protocol":"injective","curve":"curve-dao-token","arb-curve":"curve-dao-token","blockstack":"stacks","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","sol-monad":"monad","gala-v2":"gala","sol-raydium":"raydium","sol-zebec-network":"zebec-network","o-synthetix-network-token":"synthetix","zencash":"horizen","sol-meteora":"meteora","luna":"terra-luna","sol-soon":"soon","sol-loaded-lions":"loaded-lions","stasis-euro":"stasis-eurs","sol-yzy":"yzy","sol-theuselesscoin":"theuselesscoin","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","sushi":"sushiswap","mantra-dao":"mantra","sol-huma-finance":"huma-finance","hive":"hive-blockchain","sol-ore-new":"ore-new","sol-wojak-sol":"wojak-sol","dia-data":"dia","zcoin":"firo","bounce":"bounce-token","rif-token":"rsk-infrastructure-framework","bnb-swipe":"sxp","swipe":"sxp","small-love-potion":"smooth-love-potion","BTRST":"braintrust","uquid_coin":"uquid-coin","funfair":"funtoken","terra-virtua-kolekt":"vanar","p-ixt-token":"ix-token","smart-bitcoin":"rsk-smart-bitcoin","ton-crystal":"everscale","sol-collector-crypt":"collector-crypt","scroll-v2":"scroll","melon":"enzyme","sol-zeta":"zeta","sol-nobody-sausage":"nobody-sausage","ethos":"voyager-token","sol-agenda-47":"agenda-47","omisego":"omg","aavegotchi-ghst-token":"aavegotchi","sol-mori-coin":"mori-coin","bnb-attestation-service":"bnb-attestation-service","sol-uranus-coin":"uranus-coin","sol-graphite-protocol":"graphite-protocol","sol-verse-world":"verse-world","sol-mobyscreener":"mobyscreener","sol-cudis":"cudis","sol-dowge":"dowge","sol-unstable-coin-sol":"unstable-coin-sol","emirex":"emirex-token","chronotech":"chrono-tech","sol-estatex":"estatex","sol-masha":"masha","synternet-v2":"synternet","sol-agi-alpha-agent":"agi-alpha-agent","sol-light":"light","sun-contract":"suncontract","monolith":"tokencard","sol-hosico":"hosico","sol-labubu-xyz":"labubu-xyz","neutrino-dollar":"neutrino-usd","sol-kokok-the-roach":"kokok-the-roach","super-zero":"super-zero-protocol","library-credit":"library-credits","sol-moonpig":"moonpig","internet-node-token":"int-chain","sol-startupcoin":"startupcoin","p-klima-dao":"klimadao","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","sol-launch-coin-on-believe":"launch-coin-on-believe","perl-eco":"perlin","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-tiger-shark":"tiger-shark","machine-xchange-coin":"mxc","paccoin":"pac-protocol","sol-yeti":"yeti","sol-hyperpigmentation":"hyperpigmentation","sol-avici":"avici","sol-ani-grok-companion":"ani-grok-companion","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
