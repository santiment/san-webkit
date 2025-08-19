<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","p-matic-network":"polygon","xinfin-network":"xinfin","gatechain-token":"gatetoken","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","o-optimism":"optimism-ethereum","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-pump-fun":"pump-fun","floki-inu-v2":"floki-inu","sol-raydium":"raydium","gala-v2":"gala","sol-zebec-network":"zebec-network","luna":"terra-luna","sol-theuselesscoin":"theuselesscoin","mantra-dao":"mantra","o-synthetix-network-token":"synthetix","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","kickico":"kick-token","sol-loaded-lions":"loaded-lions","nexus-mutual":"nxm","wrapped-nxm":"nxm","stasis-euro":"stasis-eurs","zencash":"horizen","zb":"zb-token","swipe":"sxp","bnb-swipe":"sxp","noia-network":"syntropy","funfair":"funtoken","hive":"hive-blockchain","dia-data":"dia","scroll-v2":"scroll","sol-soon":"soon","small-love-potion":"smooth-love-potion","terra-virtua-kolekt":"vanar","bounce":"bounce-token","sol-huma-finance":"huma-finance","rif-token":"rsk-infrastructure-framework","BTRST":"braintrust","sol-launch-coin-on-believe":"launch-coin-on-believe","amino":"amino-network","uquid_coin":"uquid-coin","sol-graphite-protocol":"graphite-protocol","smart-bitcoin":"rsk-smart-bitcoin","sol-agi-alpha-agent":"agi-alpha-agent","melon":"enzyme","sol-cudis":"cudis","sol-mobyscreener":"mobyscreener","omisego":"omg","aavegotchi-ghst-token":"aavegotchi","sol-agenda-47":"agenda-47","sol-verse-world":"verse-world","ethos":"voyager-token","sol-unstable-coin-sol":"unstable-coin-sol","sol-kokok-the-roach":"kokok-the-roach","p-ixt-token":"ix-token","sol-hyperpigmentation":"hyperpigmentation","sol-hosico":"hosico","ton-crystal":"everscale","sol-dowge":"dowge","sol-zeta":"zeta","gridplus":"grid","sol-yeti":"yeti","synternet-v2":"synternet","zcoin":"firo","chronotech":"chrono-tech","sol-labubu-xyz":"labubu-xyz","sol-startupcoin":"startupcoin","emirex":"emirex-token","sol-masha":"masha","machine-xchange-coin":"mxc","sol-tiger-shark":"tiger-shark","monolith":"tokencard","sun-contract":"suncontract","sol-moonpig":"moonpig","neutrino-dollar":"neutrino-usd","super-zero":"super-zero-protocol","library-credit":"library-credits","p-klima-dao":"klimadao","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","paccoin":"pac-protocol","lukki":"lukki-operating-token","sol-ani-grok-companion":"ani-grok-companion","stone":"stone-token","probit":"probit-token","bzx":"bzx-protocol","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
