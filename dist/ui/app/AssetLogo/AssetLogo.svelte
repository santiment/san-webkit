<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","xinfin-network":"xinfin","p-matic-network":"polygon","gatechain-token":"gatetoken","file-coin":"filecoin","injective-protocol":"injective","sol-first-digital-usd":"first-digital-usd","o-optimism":"optimism-ethereum","arb-curve":"curve-dao-token","curve":"curve-dao-token","blockstack":"stacks","floki-inu-v2":"floki-inu","sol-pump-fun":"pump-fun","sol-raydium":"raydium","gala-v2":"gala","sol-theuselesscoin":"theuselesscoin","sol-zebec-network":"zebec-network","luna":"terra-luna","mantra-dao":"mantra","sushi":"sushiswap","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","o-synthetix-network-token":"synthetix","sol-loaded-lions":"loaded-lions","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","sol-graphite-protocol":"graphite-protocol","zencash":"horizen","stasis-euro":"stasis-eurs","bnb-swipe":"sxp","swipe":"sxp","funfair":"funtoken","zb":"zb-token","hive":"hive-blockchain","noia-network":"syntropy","dia-data":"dia","sol-launch-coin-on-believe":"launch-coin-on-believe","small-love-potion":"smooth-love-potion","terra-virtua-kolekt":"vanar","sol-huma-finance":"huma-finance","bounce":"bounce-token","scroll-v2":"scroll","rif-token":"rsk-infrastructure-framework","BTRST":"braintrust","sol-dowge":"dowge","amino":"amino-network","uquid_coin":"uquid-coin","sol-hosico":"hosico","sol-mobyscreener":"mobyscreener","smart-bitcoin":"rsk-smart-bitcoin","sol-soon":"soon","aavegotchi-ghst-token":"aavegotchi","sol-startupcoin":"startupcoin","sol-kokok-the-roach":"kokok-the-roach","omisego":"omg","melon":"enzyme","sol-verse-world":"verse-world","sol-agi-alpha-agent":"agi-alpha-agent","sol-hyperpigmentation":"hyperpigmentation","ton-crystal":"everscale","sol-agenda-47":"agenda-47","sol-cudis":"cudis","sol-unstable-coin-sol":"unstable-coin-sol","ethos":"voyager-token","sol-zeta":"zeta","p-ixt-token":"ix-token","gridplus":"grid","zcoin":"firo","sol-labubu-xyz":"labubu-xyz","sol-yeti":"yeti","synternet-v2":"synternet","chronotech":"chrono-tech","emirex":"emirex-token","sol-masha":"masha","machine-xchange-coin":"mxc","sol-tiger-shark":"tiger-shark","sol-moonpig":"moonpig","sun-contract":"suncontract","monolith":"tokencard","super-zero":"super-zero-protocol","neutrino-dollar":"neutrino-usd","p-klima-dao":"klimadao","nss":"nss-coin","library-credit":"library-credits","xcrypt":"xcrypt-token","forceprotocol":"the-force-protocol","internet-node-token":"int-chain","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","paccoin":"pac-protocol","lukki":"lukki-operating-token","stone":"stone-token","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","probit":"probit-token","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
