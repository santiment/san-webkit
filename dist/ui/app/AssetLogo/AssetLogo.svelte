<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","p-matic-network":"polygon","xinfin-network":"xinfin","gatechain-token":"gatetoken","file-coin":"filecoin","injective-protocol":"injective","sol-first-digital-usd":"first-digital-usd","o-optimism":"optimism-ethereum","sol-pump-fun":"pump-fun","blockstack":"stacks","curve":"curve-dao-token","arb-curve":"curve-dao-token","floki-inu-v2":"floki-inu","sol-raydium":"raydium","gala-v2":"gala","sol-zebec-network":"zebec-network","sol-theuselesscoin":"theuselesscoin","luna":"terra-luna","mantra-dao":"mantra","bnb-sushi":"bsc-sushi","sushi":"sushiswap","arb-sushi":"sushiswap","o-synthetix-network-token":"synthetix","kickico":"kick-token","sol-loaded-lions":"loaded-lions","wrapped-nxm":"nxm","nexus-mutual":"nxm","stasis-euro":"stasis-eurs","zencash":"horizen","bnb-swipe":"sxp","swipe":"sxp","zb":"zb-token","noia-network":"syntropy","hive":"hive-blockchain","funfair":"funtoken","dia-data":"dia","sol-soon":"soon","scroll-v2":"scroll","small-love-potion":"smooth-love-potion","terra-virtua-kolekt":"vanar","bounce":"bounce-token","sol-huma-finance":"huma-finance","sol-launch-coin-on-believe":"launch-coin-on-believe","rif-token":"rsk-infrastructure-framework","BTRST":"braintrust","sol-graphite-protocol":"graphite-protocol","amino":"amino-network","uquid_coin":"uquid-coin","sol-agi-alpha-agent":"agi-alpha-agent","sol-mobyscreener":"mobyscreener","smart-bitcoin":"rsk-smart-bitcoin","melon":"enzyme","sol-unstable-coin-sol":"unstable-coin-sol","sol-dowge":"dowge","aavegotchi-ghst-token":"aavegotchi","omisego":"omg","sol-cudis":"cudis","sol-verse-world":"verse-world","sol-kokok-the-roach":"kokok-the-roach","sol-agenda-47":"agenda-47","sol-hosico":"hosico","ethos":"voyager-token","sol-hyperpigmentation":"hyperpigmentation","ton-crystal":"everscale","p-ixt-token":"ix-token","sol-zeta":"zeta","gridplus":"grid","synternet-v2":"synternet","zcoin":"firo","chronotech":"chrono-tech","sol-yeti":"yeti","sol-labubu-xyz":"labubu-xyz","sol-startupcoin":"startupcoin","emirex":"emirex-token","sol-masha":"masha","machine-xchange-coin":"mxc","sol-tiger-shark":"tiger-shark","sol-moonpig":"moonpig","monolith":"tokencard","sun-contract":"suncontract","super-zero":"super-zero-protocol","neutrino-dollar":"neutrino-usd","library-credit":"library-credits","p-klima-dao":"klimadao","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","paccoin":"pac-protocol","lukki":"lukki-operating-token","sol-ani-grok-companion":"ani-grok-companion","stone":"stone-token","probit":"probit-token","bzx":"bzx-protocol","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
