<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","crypto-com-coin":"cronos","hedera-hashgraph":"hedera","staked-ethena":"ethena","p-matic-network":"polygon","xinfin-network":"xinfin","gatechain-token":"gatetoken","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","sol-pump-fun":"pump-fun","o-optimism":"optimism-ethereum","blockstack":"stacks","curve":"curve-dao-token","arb-curve":"curve-dao-token","sol-raydium":"raydium","floki-inu-v2":"floki-inu","gala-v2":"gala","sol-zebec-network":"zebec-network","luna":"terra-luna","o-synthetix-network-token":"synthetix","mantra-dao":"mantra","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-theuselesscoin":"theuselesscoin","sol-loaded-lions":"loaded-lions","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","stasis-euro":"stasis-eurs","zencash":"horizen","swipe":"sxp","bnb-swipe":"sxp","zb":"zb-token","noia-network":"syntropy","funfair":"funtoken","hive":"hive-blockchain","dia-data":"dia","sol-soon":"soon","sol-launch-coin-on-believe":"launch-coin-on-believe","scroll-v2":"scroll","small-love-potion":"smooth-love-potion","bounce":"bounce-token","bnb-attestation-service":"bnb-attestation-service","rif-token":"rsk-infrastructure-framework","terra-virtua-kolekt":"vanar","sol-huma-finance":"huma-finance","BTRST":"braintrust","amino":"amino-network","sol-unstable-coin-sol":"unstable-coin-sol","uquid_coin":"uquid-coin","sol-graphite-protocol":"graphite-protocol","sol-mori-coin":"mori-coin","smart-bitcoin":"rsk-smart-bitcoin","melon":"enzyme","omisego":"omg","aavegotchi-ghst-token":"aavegotchi","sol-agi-alpha-agent":"agi-alpha-agent","sol-mobyscreener":"mobyscreener","ton-crystal":"everscale","sol-cudis":"cudis","ethos":"voyager-token","sol-verse-world":"verse-world","sol-hyperpigmentation":"hyperpigmentation","p-ixt-token":"ix-token","sol-kokok-the-roach":"kokok-the-roach","gridplus":"grid","sol-hosico":"hosico","sol-agenda-47":"agenda-47","sol-startupcoin":"startupcoin","sol-zeta":"zeta","sol-dowge":"dowge","synternet-v2":"synternet","zcoin":"firo","sol-yeti":"yeti","chronotech":"chrono-tech","sol-labubu-xyz":"labubu-xyz","emirex":"emirex-token","sol-masha":"masha","machine-xchange-coin":"mxc","sol-tiger-shark":"tiger-shark","monolith":"tokencard","sun-contract":"suncontract","sol-moonpig":"moonpig","super-zero":"super-zero-protocol","neutrino-dollar":"neutrino-usd","library-credit":"library-credits","nss":"nss-coin","p-klima-dao":"klimadao","xcrypt":"xcrypt-token","internet-node-token":"int-chain","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","lukki":"lukki-operating-token","paccoin":"pac-protocol","sol-ani-grok-companion":"ani-grok-companion","stone":"stone-token","probit":"probit-token","bzx":"bzx-protocol","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
