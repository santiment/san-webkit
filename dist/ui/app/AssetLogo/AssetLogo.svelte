<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","p-matic-network":"polygon","xinfin-network":"xinfin","gatechain-token":"gatetoken","file-coin":"filecoin","injective-protocol":"injective","sol-first-digital-usd":"first-digital-usd","curve":"curve-dao-token","arb-curve":"curve-dao-token","o-optimism":"optimism-ethereum","sol-pump-fun":"pump-fun","blockstack":"stacks","floki-inu-v2":"floki-inu","sol-raydium":"raydium","gala-v2":"gala","sol-zebec-network":"zebec-network","luna":"terra-luna","mantra-dao":"mantra","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","o-synthetix-network-token":"synthetix","kickico":"kick-token","sol-loaded-lions":"loaded-lions","nexus-mutual":"nxm","wrapped-nxm":"nxm","sol-theuselesscoin":"theuselesscoin","zencash":"horizen","stasis-euro":"stasis-eurs","bnb-swipe":"sxp","zb":"zb-token","swipe":"sxp","noia-network":"syntropy","hive":"hive-blockchain","dia-data":"dia","funfair":"funtoken","sol-soon":"soon","small-love-potion":"smooth-love-potion","sol-launch-coin-on-believe":"launch-coin-on-believe","scroll-v2":"scroll","terra-virtua-kolekt":"vanar","sol-huma-finance":"huma-finance","bounce":"bounce-token","rif-token":"rsk-infrastructure-framework","BTRST":"braintrust","amino":"amino-network","uquid_coin":"uquid-coin","sol-agi-alpha-agent":"agi-alpha-agent","sol-graphite-protocol":"graphite-protocol","sol-mobyscreener":"mobyscreener","smart-bitcoin":"rsk-smart-bitcoin","sol-unstable-coin-sol":"unstable-coin-sol","sol-dowge":"dowge","melon":"enzyme","aavegotchi-ghst-token":"aavegotchi","omisego":"omg","sol-verse-world":"verse-world","sol-kokok-the-roach":"kokok-the-roach","sol-cudis":"cudis","sol-hyperpigmentation":"hyperpigmentation","ethos":"voyager-token","ton-crystal":"everscale","sol-agenda-47":"agenda-47","sol-zeta":"zeta","p-ixt-token":"ix-token","sol-hosico":"hosico","gridplus":"grid","synternet-v2":"synternet","sol-labubu-xyz":"labubu-xyz","zcoin":"firo","chronotech":"chrono-tech","sol-yeti":"yeti","sol-startupcoin":"startupcoin","emirex":"emirex-token","sol-masha":"masha","machine-xchange-coin":"mxc","sol-tiger-shark":"tiger-shark","sol-moonpig":"moonpig","monolith":"tokencard","sun-contract":"suncontract","super-zero":"super-zero-protocol","neutrino-dollar":"neutrino-usd","p-klima-dao":"klimadao","nss":"nss-coin","library-credit":"library-credits","xcrypt":"xcrypt-token","internet-node-token":"int-chain","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","paccoin":"pac-protocol","lukki":"lukki-operating-token","stone":"stone-token","probit":"probit-token","bzx":"bzx-protocol","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
