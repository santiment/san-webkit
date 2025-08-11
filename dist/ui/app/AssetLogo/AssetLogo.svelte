<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","p-matic-network":"polygon","xinfin-network":"xinfin","gatechain-token":"gatetoken","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","o-optimism":"optimism-ethereum","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-pump-fun":"pump-fun","floki-inu-v2":"floki-inu","sol-raydium":"raydium","gala-v2":"gala","sol-zebec-network":"zebec-network","luna":"terra-luna","mantra-dao":"mantra","sol-theuselesscoin":"theuselesscoin","sushi":"sushiswap","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","o-synthetix-network-token":"synthetix","kickico":"kick-token","sol-loaded-lions":"loaded-lions","nexus-mutual":"nxm","wrapped-nxm":"nxm","zencash":"horizen","stasis-euro":"stasis-eurs","bnb-swipe":"sxp","swipe":"sxp","zb":"zb-token","noia-network":"syntropy","hive":"hive-blockchain","sol-soon":"soon","dia-data":"dia","funfair":"funtoken","sol-launch-coin-on-believe":"launch-coin-on-believe","small-love-potion":"smooth-love-potion","terra-virtua-kolekt":"vanar","bounce":"bounce-token","scroll-v2":"scroll","sol-graphite-protocol":"graphite-protocol","sol-huma-finance":"huma-finance","rif-token":"rsk-infrastructure-framework","BTRST":"braintrust","amino":"amino-network","uquid_coin":"uquid-coin","sol-agi-alpha-agent":"agi-alpha-agent","sol-mobyscreener":"mobyscreener","sol-unstable-coin-sol":"unstable-coin-sol","smart-bitcoin":"rsk-smart-bitcoin","melon":"enzyme","sol-dowge":"dowge","omisego":"omg","aavegotchi-ghst-token":"aavegotchi","sol-kokok-the-roach":"kokok-the-roach","sol-hyperpigmentation":"hyperpigmentation","sol-verse-world":"verse-world","ethos":"voyager-token","ton-crystal":"everscale","sol-hosico":"hosico","sol-agenda-47":"agenda-47","p-ixt-token":"ix-token","sol-zeta":"zeta","sol-cudis":"cudis","gridplus":"grid","sol-startupcoin":"startupcoin","sol-labubu-xyz":"labubu-xyz","synternet-v2":"synternet","chronotech":"chrono-tech","zcoin":"firo","sol-yeti":"yeti","emirex":"emirex-token","sol-masha":"masha","machine-xchange-coin":"mxc","sol-moonpig":"moonpig","sol-tiger-shark":"tiger-shark","sun-contract":"suncontract","monolith":"tokencard","super-zero":"super-zero-protocol","neutrino-dollar":"neutrino-usd","p-klima-dao":"klimadao","nss":"nss-coin","xcrypt":"xcrypt-token","library-credit":"library-credits","internet-node-token":"int-chain","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","paccoin":"pac-protocol","lukki":"lukki-operating-token","stone":"stone-token","probit":"probit-token","bzx":"bzx-protocol","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
