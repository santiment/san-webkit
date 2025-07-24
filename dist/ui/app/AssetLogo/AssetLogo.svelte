<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","xinfin-network":"xinfin","p-matic-network":"polygon","gatechain-token":"gatetoken","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","curve":"curve-dao-token","arb-curve":"curve-dao-token","injective-protocol":"injective","blockstack":"stacks","floki-inu-v2":"floki-inu","o-optimism":"optimism-ethereum","sol-pump-fun":"pump-fun","sol-raydium":"raydium","gala-v2":"gala","sol-zebec-network":"zebec-network","luna":"terra-luna","mantra-dao":"mantra","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","o-synthetix-network-token":"synthetix","kickico":"kick-token","sol-loaded-lions":"loaded-lions","sol-theuselesscoin":"theuselesscoin","nexus-mutual":"nxm","wrapped-nxm":"nxm","sol-graphite-protocol":"graphite-protocol","funfair":"funtoken","zencash":"horizen","stasis-euro":"stasis-eurs","bnb-swipe":"sxp","swipe":"sxp","zb":"zb-token","hive":"hive-blockchain","noia-network":"syntropy","dia-data":"dia","sol-launch-coin-on-believe":"launch-coin-on-believe","small-love-potion":"smooth-love-potion","sol-huma-finance":"huma-finance","terra-virtua-kolekt":"vanar","bounce":"bounce-token","rif-token":"rsk-infrastructure-framework","scroll-v2":"scroll","BTRST":"braintrust","uquid_coin":"uquid-coin","sol-dowge":"dowge","amino":"amino-network","sol-hosico":"hosico","sol-mobyscreener":"mobyscreener","sol-soon":"soon","sol-kokok-the-roach":"kokok-the-roach","smart-bitcoin":"rsk-smart-bitcoin","omisego":"omg","sol-verse-world":"verse-world","aavegotchi-ghst-token":"aavegotchi","melon":"enzyme","sol-agi-alpha-agent":"agi-alpha-agent","ton-crystal":"everscale","sol-cudis":"cudis","sol-hyperpigmentation":"hyperpigmentation","sol-startupcoin":"startupcoin","sol-agenda-47":"agenda-47","p-ixt-token":"ix-token","sol-zeta":"zeta","ethos":"voyager-token","gridplus":"grid","zcoin":"firo","sol-labubu-xyz":"labubu-xyz","sol-unstable-coin-sol":"unstable-coin-sol","sol-yeti":"yeti","synternet-v2":"synternet","chronotech":"chrono-tech","emirex":"emirex-token","sol-masha":"masha","sol-tiger-shark":"tiger-shark","machine-xchange-coin":"mxc","sol-moonpig":"moonpig","sun-contract":"suncontract","monolith":"tokencard","super-zero":"super-zero-protocol","neutrino-dollar":"neutrino-usd","p-klima-dao":"klimadao","nss":"nss-coin","library-credit":"library-credits","xcrypt":"xcrypt-token","forceprotocol":"the-force-protocol","internet-node-token":"int-chain","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","paccoin":"pac-protocol","lukki":"lukki-operating-token","stone":"stone-token","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
