<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","p-matic-network":"polygon","xinfin-network":"xinfin","gatechain-token":"gatetoken","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","o-optimism":"optimism-ethereum","sol-pump-fun":"pump-fun","floki-inu-v2":"floki-inu","sol-raydium":"raydium","gala-v2":"gala","sol-zebec-network":"zebec-network","luna":"terra-luna","mantra-dao":"mantra","sol-theuselesscoin":"theuselesscoin","bnb-sushi":"bsc-sushi","sushi":"sushiswap","arb-sushi":"sushiswap","o-synthetix-network-token":"synthetix","kickico":"kick-token","sol-loaded-lions":"loaded-lions","wrapped-nxm":"nxm","nexus-mutual":"nxm","stasis-euro":"stasis-eurs","zencash":"horizen","bnb-swipe":"sxp","swipe":"sxp","zb":"zb-token","funfair":"funtoken","hive":"hive-blockchain","noia-network":"syntropy","dia-data":"dia","sol-graphite-protocol":"graphite-protocol","sol-launch-coin-on-believe":"launch-coin-on-believe","small-love-potion":"smooth-love-potion","terra-virtua-kolekt":"vanar","bounce":"bounce-token","sol-huma-finance":"huma-finance","rif-token":"rsk-infrastructure-framework","scroll-v2":"scroll","BTRST":"braintrust","sol-dowge":"dowge","uquid_coin":"uquid-coin","amino":"amino-network","sol-soon":"soon","sol-unstable-coin-sol":"unstable-coin-sol","sol-agi-alpha-agent":"agi-alpha-agent","smart-bitcoin":"rsk-smart-bitcoin","sol-mobyscreener":"mobyscreener","omisego":"omg","sol-hosico":"hosico","melon":"enzyme","aavegotchi-ghst-token":"aavegotchi","sol-kokok-the-roach":"kokok-the-roach","sol-startupcoin":"startupcoin","sol-verse-world":"verse-world","ton-crystal":"everscale","p-ixt-token":"ix-token","sol-agenda-47":"agenda-47","sol-hyperpigmentation":"hyperpigmentation","sol-cudis":"cudis","ethos":"voyager-token","sol-zeta":"zeta","gridplus":"grid","zcoin":"firo","chronotech":"chrono-tech","synternet-v2":"synternet","sol-labubu-xyz":"labubu-xyz","emirex":"emirex-token","sol-yeti":"yeti","sol-masha":"masha","machine-xchange-coin":"mxc","sol-moonpig":"moonpig","sol-tiger-shark":"tiger-shark","sun-contract":"suncontract","monolith":"tokencard","super-zero":"super-zero-protocol","neutrino-dollar":"neutrino-usd","p-klima-dao":"klimadao","nss":"nss-coin","xcrypt":"xcrypt-token","library-credit":"library-credits","internet-node-token":"int-chain","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","paccoin":"pac-protocol","lukki":"lukki-operating-token","stone":"stone-token","probit":"probit-token","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
