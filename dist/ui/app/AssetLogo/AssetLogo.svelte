<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","crypto-com-coin":"cronos","hedera-hashgraph":"hedera","staked-ethena":"ethena","p-matic-network":"polygon","xinfin-network":"xinfin","gatechain-token":"gatetoken","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","o-optimism":"optimism-ethereum","sol-pump-fun":"pump-fun","blockstack":"stacks","curve":"curve-dao-token","arb-curve":"curve-dao-token","sol-raydium":"raydium","floki-inu-v2":"floki-inu","gala-v2":"gala","sol-zebec-network":"zebec-network","luna":"terra-luna","o-synthetix-network-token":"synthetix","mantra-dao":"mantra","bnb-sushi":"bsc-sushi","sushi":"sushiswap","arb-sushi":"sushiswap","kickico":"kick-token","sol-loaded-lions":"loaded-lions","wrapped-nxm":"nxm","nexus-mutual":"nxm","sol-theuselesscoin":"theuselesscoin","stasis-euro":"stasis-eurs","zencash":"horizen","zb":"zb-token","bnb-swipe":"sxp","swipe":"sxp","funfair":"funtoken","noia-network":"syntropy","hive":"hive-blockchain","dia-data":"dia","sol-soon":"soon","sol-unstable-coin-sol":"unstable-coin-sol","scroll-v2":"scroll","small-love-potion":"smooth-love-potion","bounce":"bounce-token","bnb-attestation-service":"bnb-attestation-service","sol-launch-coin-on-believe":"launch-coin-on-believe","rif-token":"rsk-infrastructure-framework","terra-virtua-kolekt":"vanar","sol-huma-finance":"huma-finance","sol-graphite-protocol":"graphite-protocol","BTRST":"braintrust","amino":"amino-network","uquid_coin":"uquid-coin","sol-mori-coin":"mori-coin","smart-bitcoin":"rsk-smart-bitcoin","sol-agi-alpha-agent":"agi-alpha-agent","melon":"enzyme","omisego":"omg","aavegotchi-ghst-token":"aavegotchi","sol-cudis":"cudis","sol-mobyscreener":"mobyscreener","ton-crystal":"everscale","ethos":"voyager-token","sol-verse-world":"verse-world","p-ixt-token":"ix-token","sol-hyperpigmentation":"hyperpigmentation","sol-agenda-47":"agenda-47","gridplus":"grid","sol-dowge":"dowge","sol-zeta":"zeta","sol-hosico":"hosico","sol-kokok-the-roach":"kokok-the-roach","zcoin":"firo","synternet-v2":"synternet","sol-yeti":"yeti","sol-startupcoin":"startupcoin","chronotech":"chrono-tech","emirex":"emirex-token","sol-labubu-xyz":"labubu-xyz","sol-masha":"masha","monolith":"tokencard","sol-tiger-shark":"tiger-shark","sun-contract":"suncontract","machine-xchange-coin":"mxc","sol-moonpig":"moonpig","super-zero":"super-zero-protocol","neutrino-dollar":"neutrino-usd","library-credit":"library-credits","nss":"nss-coin","p-klima-dao":"klimadao","xcrypt":"xcrypt-token","internet-node-token":"int-chain","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","paccoin":"pac-protocol","lukki":"lukki-operating-token","sol-ani-grok-companion":"ani-grok-companion","stone":"stone-token","probit":"probit-token","bzx":"bzx-protocol","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
