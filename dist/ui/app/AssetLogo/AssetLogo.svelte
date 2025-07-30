<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","p-matic-network":"polygon","xinfin-network":"xinfin","gatechain-token":"gatetoken","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","blockstack":"stacks","curve":"curve-dao-token","arb-curve":"curve-dao-token","o-optimism":"optimism-ethereum","floki-inu-v2":"floki-inu","sol-pump-fun":"pump-fun","sol-raydium":"raydium","gala-v2":"gala","sol-zebec-network":"zebec-network","luna":"terra-luna","sol-theuselesscoin":"theuselesscoin","mantra-dao":"mantra","bnb-sushi":"bsc-sushi","sushi":"sushiswap","arb-sushi":"sushiswap","o-synthetix-network-token":"synthetix","kickico":"kick-token","sol-loaded-lions":"loaded-lions","nexus-mutual":"nxm","wrapped-nxm":"nxm","sol-graphite-protocol":"graphite-protocol","zencash":"horizen","stasis-euro":"stasis-eurs","funfair":"funtoken","bnb-swipe":"sxp","swipe":"sxp","zb":"zb-token","hive":"hive-blockchain","noia-network":"syntropy","dia-data":"dia","sol-launch-coin-on-believe":"launch-coin-on-believe","small-love-potion":"smooth-love-potion","terra-virtua-kolekt":"vanar","bounce":"bounce-token","rif-token":"rsk-infrastructure-framework","sol-huma-finance":"huma-finance","scroll-v2":"scroll","BTRST":"braintrust","uquid_coin":"uquid-coin","amino":"amino-network","sol-dowge":"dowge","sol-mobyscreener":"mobyscreener","sol-soon":"soon","smart-bitcoin":"rsk-smart-bitcoin","sol-startupcoin":"startupcoin","omisego":"omg","sol-hosico":"hosico","aavegotchi-ghst-token":"aavegotchi","sol-agi-alpha-agent":"agi-alpha-agent","melon":"enzyme","sol-kokok-the-roach":"kokok-the-roach","sol-verse-world":"verse-world","ton-crystal":"everscale","sol-agenda-47":"agenda-47","sol-cudis":"cudis","sol-hyperpigmentation":"hyperpigmentation","ethos":"voyager-token","sol-zeta":"zeta","p-ixt-token":"ix-token","gridplus":"grid","sol-unstable-coin-sol":"unstable-coin-sol","zcoin":"firo","synternet-v2":"synternet","sol-yeti":"yeti","sol-labubu-xyz":"labubu-xyz","chronotech":"chrono-tech","emirex":"emirex-token","machine-xchange-coin":"mxc","sol-masha":"masha","sol-moonpig":"moonpig","sol-tiger-shark":"tiger-shark","sun-contract":"suncontract","monolith":"tokencard","super-zero":"super-zero-protocol","neutrino-dollar":"neutrino-usd","p-klima-dao":"klimadao","library-credit":"library-credits","nss":"nss-coin","xcrypt":"xcrypt-token","forceprotocol":"the-force-protocol","internet-node-token":"int-chain","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","paccoin":"pac-protocol","lukki":"lukki-operating-token","stone":"stone-token","probit":"probit-token","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
