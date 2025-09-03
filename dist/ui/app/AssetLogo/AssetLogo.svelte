<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","p-matic-network":"polygon","xinfin-network":"xinfin","gatechain-token":"gatetoken","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","sol-pump-fun":"pump-fun","injective-protocol":"injective","o-optimism":"optimism-ethereum","blockstack":"stacks","curve":"curve-dao-token","arb-curve":"curve-dao-token","sol-raydium":"raydium","floki-inu-v2":"floki-inu","gala-v2":"gala","sol-zebec-network":"zebec-network","luna":"terra-luna","o-synthetix-network-token":"synthetix","mantra-dao":"mantra","bnb-sushi":"bsc-sushi","sushi":"sushiswap","arb-sushi":"sushiswap","kickico":"kick-token","sol-loaded-lions":"loaded-lions","wrapped-nxm":"nxm","nexus-mutual":"nxm","sol-theuselesscoin":"theuselesscoin","stasis-euro":"stasis-eurs","zencash":"horizen","zb":"zb-token","bnb-swipe":"sxp","swipe":"sxp","funfair":"funtoken","noia-network":"syntropy","hive":"hive-blockchain","dia-data":"dia","sol-soon":"soon","sol-unstable-coin-sol":"unstable-coin-sol","scroll-v2":"scroll","small-love-potion":"smooth-love-potion","sol-launch-coin-on-believe":"launch-coin-on-believe","bounce":"bounce-token","rif-token":"rsk-infrastructure-framework","sol-huma-finance":"huma-finance","terra-virtua-kolekt":"vanar","bnb-attestation-service":"bnb-attestation-service","BTRST":"braintrust","amino":"amino-network","sol-graphite-protocol":"graphite-protocol","uquid_coin":"uquid-coin","sol-agi-alpha-agent":"agi-alpha-agent","smart-bitcoin":"rsk-smart-bitcoin","sol-mori-coin":"mori-coin","omisego":"omg","melon":"enzyme","aavegotchi-ghst-token":"aavegotchi","ton-crystal":"everscale","sol-cudis":"cudis","sol-mobyscreener":"mobyscreener","ethos":"voyager-token","sol-verse-world":"verse-world","p-ixt-token":"ix-token","sol-agenda-47":"agenda-47","sol-hyperpigmentation":"hyperpigmentation","gridplus":"grid","sol-kokok-the-roach":"kokok-the-roach","sol-zeta":"zeta","sol-hosico":"hosico","zcoin":"firo","sol-dowge":"dowge","synternet-v2":"synternet","sol-yeti":"yeti","chronotech":"chrono-tech","sol-startupcoin":"startupcoin","emirex":"emirex-token","sol-labubu-xyz":"labubu-xyz","sol-masha":"masha","monolith":"tokencard","sun-contract":"suncontract","sol-tiger-shark":"tiger-shark","machine-xchange-coin":"mxc","sol-moonpig":"moonpig","super-zero":"super-zero-protocol","neutrino-dollar":"neutrino-usd","library-credit":"library-credits","nss":"nss-coin","p-klima-dao":"klimadao","xcrypt":"xcrypt-token","internet-node-token":"int-chain","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","paccoin":"pac-protocol","lukki":"lukki-operating-token","sol-ani-grok-companion":"ani-grok-companion","stone":"stone-token","probit":"probit-token","bzx":"bzx-protocol","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
