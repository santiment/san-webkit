<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","p-matic-network":"polygon","xinfin-network":"xinfin","gatechain-token":"gatetoken","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","curve":"curve-dao-token","arb-curve":"curve-dao-token","injective-protocol":"injective","o-optimism":"optimism-ethereum","blockstack":"stacks","floki-inu-v2":"floki-inu","sol-pump-fun":"pump-fun","sol-raydium":"raydium","gala-v2":"gala","sol-zebec-network":"zebec-network","luna":"terra-luna","mantra-dao":"mantra","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","sushi":"sushiswap","o-synthetix-network-token":"synthetix","kickico":"kick-token","sol-loaded-lions":"loaded-lions","sol-theuselesscoin":"theuselesscoin","wrapped-nxm":"nxm","nexus-mutual":"nxm","sol-graphite-protocol":"graphite-protocol","zencash":"horizen","stasis-euro":"stasis-eurs","funfair":"funtoken","bnb-swipe":"sxp","swipe":"sxp","zb":"zb-token","dia-data":"dia","hive":"hive-blockchain","noia-network":"syntropy","small-love-potion":"smooth-love-potion","terra-virtua-kolekt":"vanar","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-huma-finance":"huma-finance","bounce":"bounce-token","rif-token":"rsk-infrastructure-framework","scroll-v2":"scroll","BTRST":"braintrust","uquid_coin":"uquid-coin","amino":"amino-network","sol-mobyscreener":"mobyscreener","sol-dowge":"dowge","sol-hosico":"hosico","sol-soon":"soon","smart-bitcoin":"rsk-smart-bitcoin","aavegotchi-ghst-token":"aavegotchi","omisego":"omg","sol-kokok-the-roach":"kokok-the-roach","sol-verse-world":"verse-world","melon":"enzyme","sol-agi-alpha-agent":"agi-alpha-agent","sol-startupcoin":"startupcoin","sol-hyperpigmentation":"hyperpigmentation","ton-crystal":"everscale","sol-cudis":"cudis","sol-agenda-47":"agenda-47","p-ixt-token":"ix-token","ethos":"voyager-token","sol-zeta":"zeta","gridplus":"grid","zcoin":"firo","sol-labubu-xyz":"labubu-xyz","sol-unstable-coin-sol":"unstable-coin-sol","sol-yeti":"yeti","synternet-v2":"synternet","chronotech":"chrono-tech","emirex":"emirex-token","sol-masha":"masha","sol-tiger-shark":"tiger-shark","machine-xchange-coin":"mxc","sol-moonpig":"moonpig","sun-contract":"suncontract","monolith":"tokencard","super-zero":"super-zero-protocol","neutrino-dollar":"neutrino-usd","p-klima-dao":"klimadao","nss":"nss-coin","library-credit":"library-credits","forceprotocol":"the-force-protocol","xcrypt":"xcrypt-token","internet-node-token":"int-chain","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","paccoin":"pac-protocol","lukki":"lukki-operating-token","stone":"stone-token","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
