<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","xinfin-network":"xinfin","p-matic-network":"polygon","gatechain-token":"gatetoken","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","blockstack":"stacks","curve":"curve-dao-token","arb-curve":"curve-dao-token","o-optimism":"optimism-ethereum","floki-inu-v2":"floki-inu","sol-pump-fun":"pump-fun","sol-raydium":"raydium","gala-v2":"gala","sol-zebec-network":"zebec-network","luna":"terra-luna","sol-theuselesscoin":"theuselesscoin","mantra-dao":"mantra","sushi":"sushiswap","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","o-synthetix-network-token":"synthetix","kickico":"kick-token","sol-loaded-lions":"loaded-lions","nexus-mutual":"nxm","wrapped-nxm":"nxm","sol-graphite-protocol":"graphite-protocol","stasis-euro":"stasis-eurs","zencash":"horizen","funfair":"funtoken","bnb-swipe":"sxp","swipe":"sxp","zb":"zb-token","hive":"hive-blockchain","noia-network":"syntropy","dia-data":"dia","sol-launch-coin-on-believe":"launch-coin-on-believe","small-love-potion":"smooth-love-potion","terra-virtua-kolekt":"vanar","bounce":"bounce-token","sol-huma-finance":"huma-finance","rif-token":"rsk-infrastructure-framework","scroll-v2":"scroll","BTRST":"braintrust","uquid_coin":"uquid-coin","amino":"amino-network","sol-dowge":"dowge","sol-mobyscreener":"mobyscreener","sol-soon":"soon","smart-bitcoin":"rsk-smart-bitcoin","omisego":"omg","sol-startupcoin":"startupcoin","aavegotchi-ghst-token":"aavegotchi","sol-agi-alpha-agent":"agi-alpha-agent","sol-hosico":"hosico","melon":"enzyme","sol-kokok-the-roach":"kokok-the-roach","sol-verse-world":"verse-world","ton-crystal":"everscale","sol-cudis":"cudis","sol-agenda-47":"agenda-47","sol-hyperpigmentation":"hyperpigmentation","ethos":"voyager-token","sol-zeta":"zeta","p-ixt-token":"ix-token","gridplus":"grid","sol-unstable-coin-sol":"unstable-coin-sol","zcoin":"firo","synternet-v2":"synternet","sol-yeti":"yeti","chronotech":"chrono-tech","sol-labubu-xyz":"labubu-xyz","emirex":"emirex-token","sol-masha":"masha","machine-xchange-coin":"mxc","sol-moonpig":"moonpig","sol-tiger-shark":"tiger-shark","sun-contract":"suncontract","monolith":"tokencard","super-zero":"super-zero-protocol","neutrino-dollar":"neutrino-usd","p-klima-dao":"klimadao","nss":"nss-coin","library-credit":"library-credits","xcrypt":"xcrypt-token","forceprotocol":"the-force-protocol","internet-node-token":"int-chain","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","paccoin":"pac-protocol","lukki":"lukki-operating-token","stone":"stone-token","probit":"probit-token","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
