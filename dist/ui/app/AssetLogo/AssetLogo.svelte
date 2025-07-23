<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","xinfin-network":"xinfin","p-matic-network":"polygon","gatechain-token":"gatetoken","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","floki-inu-v2":"floki-inu","blockstack":"stacks","o-optimism":"optimism-ethereum","sol-pump-fun":"pump-fun","curve":"curve-dao-token","arb-curve":"curve-dao-token","gala-v2":"gala","sol-raydium":"raydium","luna":"terra-luna","sol-zebec-network":"zebec-network","mantra-dao":"mantra","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","o-synthetix-network-token":"synthetix","kickico":"kick-token","sol-loaded-lions":"loaded-lions","sol-theuselesscoin":"theuselesscoin","nexus-mutual":"nxm","wrapped-nxm":"nxm","funfair":"funtoken","zencash":"horizen","stasis-euro":"stasis-eurs","bnb-swipe":"sxp","swipe":"sxp","sol-graphite-protocol":"graphite-protocol","hive":"hive-blockchain","zb":"zb-token","dia-data":"dia","noia-network":"syntropy","small-love-potion":"smooth-love-potion","sol-launch-coin-on-believe":"launch-coin-on-believe","terra-virtua-kolekt":"vanar","sol-huma-finance":"huma-finance","bounce":"bounce-token","scroll-v2":"scroll","rif-token":"rsk-infrastructure-framework","BTRST":"braintrust","sol-dowge":"dowge","uquid_coin":"uquid-coin","amino":"amino-network","sol-hosico":"hosico","sol-mobyscreener":"mobyscreener","sol-kokok-the-roach":"kokok-the-roach","sol-verse-world":"verse-world","smart-bitcoin":"rsk-smart-bitcoin","sol-soon":"soon","aavegotchi-ghst-token":"aavegotchi","sol-startupcoin":"startupcoin","omisego":"omg","sol-agi-alpha-agent":"agi-alpha-agent","melon":"enzyme","sol-hyperpigmentation":"hyperpigmentation","ton-crystal":"everscale","p-ixt-token":"ix-token","sol-agenda-47":"agenda-47","sol-cudis":"cudis","sol-zeta":"zeta","ethos":"voyager-token","sol-labubu-xyz":"labubu-xyz","gridplus":"grid","zcoin":"firo","sol-yeti":"yeti","sol-unstable-coin-sol":"unstable-coin-sol","synternet-v2":"synternet","chronotech":"chrono-tech","emirex":"emirex-token","sol-tiger-shark":"tiger-shark","sol-masha":"masha","machine-xchange-coin":"mxc","sol-moonpig":"moonpig","sun-contract":"suncontract","monolith":"tokencard","super-zero":"super-zero-protocol","neutrino-dollar":"neutrino-usd","p-klima-dao":"klimadao","nss":"nss-coin","library-credit":"library-credits","forceprotocol":"the-force-protocol","xcrypt":"xcrypt-token","internet-node-token":"int-chain","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","perl-eco":"perlin","blue-whale-token":"blue-whale-exchange","paccoin":"pac-protocol","lukki":"lukki-operating-token","stone":"stone-token","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
