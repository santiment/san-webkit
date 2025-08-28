<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","p-matic-network":"polygon","xinfin-network":"xinfin","gatechain-token":"gatetoken","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","o-optimism":"optimism-ethereum","blockstack":"stacks","sol-pump-fun":"pump-fun","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-raydium":"raydium","floki-inu-v2":"floki-inu","gala-v2":"gala","sol-zebec-network":"zebec-network","luna":"terra-luna","o-synthetix-network-token":"synthetix","mantra-dao":"mantra","sol-theuselesscoin":"theuselesscoin","bnb-sushi":"bsc-sushi","sushi":"sushiswap","arb-sushi":"sushiswap","kickico":"kick-token","sol-loaded-lions":"loaded-lions","nexus-mutual":"nxm","wrapped-nxm":"nxm","stasis-euro":"stasis-eurs","zencash":"horizen","bnb-swipe":"sxp","swipe":"sxp","zb":"zb-token","noia-network":"syntropy","funfair":"funtoken","hive":"hive-blockchain","dia-data":"dia","sol-soon":"soon","sol-launch-coin-on-believe":"launch-coin-on-believe","scroll-v2":"scroll","small-love-potion":"smooth-love-potion","bounce":"bounce-token","terra-virtua-kolekt":"vanar","rif-token":"rsk-infrastructure-framework","sol-huma-finance":"huma-finance","bnb-attestation-service":"bnb-attestation-service","BTRST":"braintrust","amino":"amino-network","sol-unstable-coin-sol":"unstable-coin-sol","uquid_coin":"uquid-coin","sol-graphite-protocol":"graphite-protocol","sol-mori-coin":"mori-coin","smart-bitcoin":"rsk-smart-bitcoin","melon":"enzyme","sol-agi-alpha-agent":"agi-alpha-agent","omisego":"omg","aavegotchi-ghst-token":"aavegotchi","sol-mobyscreener":"mobyscreener","sol-hyperpigmentation":"hyperpigmentation","sol-cudis":"cudis","ethos":"voyager-token","ton-crystal":"everscale","sol-verse-world":"verse-world","p-ixt-token":"ix-token","gridplus":"grid","sol-kokok-the-roach":"kokok-the-roach","sol-startupcoin":"startupcoin","sol-dowge":"dowge","sol-zeta":"zeta","sol-agenda-47":"agenda-47","sol-hosico":"hosico","zcoin":"firo","synternet-v2":"synternet","sol-yeti":"yeti","chronotech":"chrono-tech","sol-labubu-xyz":"labubu-xyz","emirex":"emirex-token","sol-masha":"masha","machine-xchange-coin":"mxc","sol-tiger-shark":"tiger-shark","monolith":"tokencard","sun-contract":"suncontract","sol-moonpig":"moonpig","super-zero":"super-zero-protocol","neutrino-dollar":"neutrino-usd","library-credit":"library-credits","nss":"nss-coin","p-klima-dao":"klimadao","xcrypt":"xcrypt-token","internet-node-token":"int-chain","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","lukki":"lukki-operating-token","paccoin":"pac-protocol","sol-ani-grok-companion":"ani-grok-companion","stone":"stone-token","probit":"probit-token","bzx":"bzx-protocol","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
