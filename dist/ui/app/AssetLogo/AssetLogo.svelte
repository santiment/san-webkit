<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","p-matic-network":"polygon","xinfin-network":"xinfin","gatechain-token":"gatetoken","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","arb-curve":"curve-dao-token","curve":"curve-dao-token","blockstack":"stacks","sol-pump-fun":"pump-fun","o-optimism":"optimism-ethereum","floki-inu-v2":"floki-inu","sol-raydium":"raydium","gala-v2":"gala","sol-zebec-network":"zebec-network","luna":"terra-luna","mantra-dao":"mantra","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-theuselesscoin":"theuselesscoin","o-synthetix-network-token":"synthetix","kickico":"kick-token","sol-loaded-lions":"loaded-lions","nexus-mutual":"nxm","wrapped-nxm":"nxm","stasis-euro":"stasis-eurs","zencash":"horizen","bnb-swipe":"sxp","swipe":"sxp","zb":"zb-token","hive":"hive-blockchain","noia-network":"syntropy","funfair":"funtoken","dia-data":"dia","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-graphite-protocol":"graphite-protocol","small-love-potion":"smooth-love-potion","terra-virtua-kolekt":"vanar","bounce":"bounce-token","sol-huma-finance":"huma-finance","scroll-v2":"scroll","rif-token":"rsk-infrastructure-framework","BTRST":"braintrust","uquid_coin":"uquid-coin","sol-dowge":"dowge","amino":"amino-network","sol-soon":"soon","sol-agi-alpha-agent":"agi-alpha-agent","smart-bitcoin":"rsk-smart-bitcoin","sol-unstable-coin-sol":"unstable-coin-sol","omisego":"omg","sol-kokok-the-roach":"kokok-the-roach","melon":"enzyme","aavegotchi-ghst-token":"aavegotchi","sol-mobyscreener":"mobyscreener","sol-zeta":"zeta","sol-hosico":"hosico","sol-verse-world":"verse-world","p-ixt-token":"ix-token","sol-agenda-47":"agenda-47","ton-crystal":"everscale","sol-startupcoin":"startupcoin","ethos":"voyager-token","sol-cudis":"cudis","sol-hyperpigmentation":"hyperpigmentation","gridplus":"grid","zcoin":"firo","chronotech":"chrono-tech","sol-labubu-xyz":"labubu-xyz","synternet-v2":"synternet","emirex":"emirex-token","sol-yeti":"yeti","sol-masha":"masha","machine-xchange-coin":"mxc","sol-moonpig":"moonpig","sol-tiger-shark":"tiger-shark","sun-contract":"suncontract","monolith":"tokencard","super-zero":"super-zero-protocol","neutrino-dollar":"neutrino-usd","p-klima-dao":"klimadao","nss":"nss-coin","library-credit":"library-credits","xcrypt":"xcrypt-token","internet-node-token":"int-chain","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","paccoin":"pac-protocol","lukki":"lukki-operating-token","stone":"stone-token","probit":"probit-token","bzx":"bzx-protocol","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
