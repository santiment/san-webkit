<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","p-matic-network":"polygon","xinfin-network":"xinfin","gatechain-token":"gatetoken","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","blockstack":"stacks","curve":"curve-dao-token","arb-curve":"curve-dao-token","o-optimism":"optimism-ethereum","sol-pump-fun":"pump-fun","floki-inu-v2":"floki-inu","sol-raydium":"raydium","gala-v2":"gala","sol-zebec-network":"zebec-network","luna":"terra-luna","mantra-dao":"mantra","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","o-synthetix-network-token":"synthetix","sol-theuselesscoin":"theuselesscoin","kickico":"kick-token","sol-loaded-lions":"loaded-lions","nexus-mutual":"nxm","wrapped-nxm":"nxm","stasis-euro":"stasis-eurs","zencash":"horizen","swipe":"sxp","bnb-swipe":"sxp","zb":"zb-token","hive":"hive-blockchain","noia-network":"syntropy","funfair":"funtoken","dia-data":"dia","sol-launch-coin-on-believe":"launch-coin-on-believe","small-love-potion":"smooth-love-potion","sol-graphite-protocol":"graphite-protocol","terra-virtua-kolekt":"vanar","bounce":"bounce-token","scroll-v2":"scroll","sol-huma-finance":"huma-finance","rif-token":"rsk-infrastructure-framework","BTRST":"braintrust","amino":"amino-network","uquid_coin":"uquid-coin","sol-soon":"soon","sol-dowge":"dowge","sol-unstable-coin-sol":"unstable-coin-sol","smart-bitcoin":"rsk-smart-bitcoin","sol-agi-alpha-agent":"agi-alpha-agent","omisego":"omg","sol-mobyscreener":"mobyscreener","sol-kokok-the-roach":"kokok-the-roach","melon":"enzyme","aavegotchi-ghst-token":"aavegotchi","sol-verse-world":"verse-world","ton-crystal":"everscale","sol-zeta":"zeta","ethos":"voyager-token","sol-agenda-47":"agenda-47","sol-startupcoin":"startupcoin","sol-hosico":"hosico","p-ixt-token":"ix-token","sol-cudis":"cudis","sol-hyperpigmentation":"hyperpigmentation","sol-labubu-xyz":"labubu-xyz","gridplus":"grid","chronotech":"chrono-tech","zcoin":"firo","synternet-v2":"synternet","emirex":"emirex-token","sol-yeti":"yeti","machine-xchange-coin":"mxc","sol-masha":"masha","sol-moonpig":"moonpig","sol-tiger-shark":"tiger-shark","sun-contract":"suncontract","monolith":"tokencard","super-zero":"super-zero-protocol","neutrino-dollar":"neutrino-usd","p-klima-dao":"klimadao","nss":"nss-coin","library-credit":"library-credits","xcrypt":"xcrypt-token","internet-node-token":"int-chain","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","paccoin":"pac-protocol","lukki":"lukki-operating-token","stone":"stone-token","probit":"probit-token","bzx":"bzx-protocol","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
