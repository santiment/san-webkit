<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","p-matic-network":"polygon","xinfin-network":"xinfin","gatechain-token":"gatetoken","sol-pump-fun":"pump-fun","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","o-optimism":"optimism-ethereum","blockstack":"stacks","curve":"curve-dao-token","arb-curve":"curve-dao-token","sol-raydium":"raydium","floki-inu-v2":"floki-inu","gala-v2":"gala","sol-zebec-network":"zebec-network","luna":"terra-luna","o-synthetix-network-token":"synthetix","mantra-dao":"mantra","bnb-sushi":"bsc-sushi","sushi":"sushiswap","arb-sushi":"sushiswap","kickico":"kick-token","sol-loaded-lions":"loaded-lions","wrapped-nxm":"nxm","nexus-mutual":"nxm","sol-theuselesscoin":"theuselesscoin","stasis-euro":"stasis-eurs","zencash":"horizen","zb":"zb-token","swipe":"sxp","bnb-swipe":"sxp","funfair":"funtoken","noia-network":"syntropy","hive":"hive-blockchain","dia-data":"dia","sol-soon":"soon","sol-launch-coin-on-believe":"launch-coin-on-believe","scroll-v2":"scroll","small-love-potion":"smooth-love-potion","sol-unstable-coin-sol":"unstable-coin-sol","bounce":"bounce-token","bnb-attestation-service":"bnb-attestation-service","rif-token":"rsk-infrastructure-framework","sol-huma-finance":"huma-finance","terra-virtua-kolekt":"vanar","BTRST":"braintrust","amino":"amino-network","sol-mori-coin":"mori-coin","uquid_coin":"uquid-coin","sol-graphite-protocol":"graphite-protocol","sol-agi-alpha-agent":"agi-alpha-agent","smart-bitcoin":"rsk-smart-bitcoin","omisego":"omg","melon":"enzyme","aavegotchi-ghst-token":"aavegotchi","ton-crystal":"everscale","sol-mobyscreener":"mobyscreener","sol-cudis":"cudis","ethos":"voyager-token","sol-verse-world":"verse-world","p-ixt-token":"ix-token","sol-agenda-47":"agenda-47","sol-hyperpigmentation":"hyperpigmentation","gridplus":"grid","sol-startupcoin":"startupcoin","zcoin":"firo","sol-dowge":"dowge","sol-zeta":"zeta","synternet-v2":"synternet","sol-kokok-the-roach":"kokok-the-roach","sol-hosico":"hosico","sol-yeti":"yeti","chronotech":"chrono-tech","emirex":"emirex-token","sol-labubu-xyz":"labubu-xyz","sol-masha":"masha","monolith":"tokencard","sun-contract":"suncontract","sol-tiger-shark":"tiger-shark","sol-moonpig":"moonpig","machine-xchange-coin":"mxc","super-zero":"super-zero-protocol","neutrino-dollar":"neutrino-usd","library-credit":"library-credits","nss":"nss-coin","p-klima-dao":"klimadao","xcrypt":"xcrypt-token","internet-node-token":"int-chain","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","lukki":"lukki-operating-token","paccoin":"pac-protocol","sol-ani-grok-companion":"ani-grok-companion","stone":"stone-token","bzx":"bzx-protocol","probit":"probit-token","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
