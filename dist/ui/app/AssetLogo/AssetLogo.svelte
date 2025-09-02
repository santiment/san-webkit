<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","p-matic-network":"polygon","xinfin-network":"xinfin","gatechain-token":"gatetoken","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","sol-pump-fun":"pump-fun","injective-protocol":"injective","o-optimism":"optimism-ethereum","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-raydium":"raydium","floki-inu-v2":"floki-inu","gala-v2":"gala","sol-zebec-network":"zebec-network","luna":"terra-luna","o-synthetix-network-token":"synthetix","mantra-dao":"mantra","arb-sushi":"sushiswap","sushi":"sushiswap","bnb-sushi":"bsc-sushi","kickico":"kick-token","sol-loaded-lions":"loaded-lions","nexus-mutual":"nxm","wrapped-nxm":"nxm","sol-theuselesscoin":"theuselesscoin","stasis-euro":"stasis-eurs","zencash":"horizen","bnb-swipe":"sxp","zb":"zb-token","swipe":"sxp","funfair":"funtoken","noia-network":"syntropy","hive":"hive-blockchain","dia-data":"dia","sol-soon":"soon","scroll-v2":"scroll","bnb-attestation-service":"bnb-attestation-service","small-love-potion":"smooth-love-potion","bounce":"bounce-token","sol-launch-coin-on-believe":"launch-coin-on-believe","rif-token":"rsk-infrastructure-framework","sol-huma-finance":"huma-finance","sol-unstable-coin-sol":"unstable-coin-sol","terra-virtua-kolekt":"vanar","BTRST":"braintrust","sol-graphite-protocol":"graphite-protocol","amino":"amino-network","uquid_coin":"uquid-coin","smart-bitcoin":"rsk-smart-bitcoin","sol-mori-coin":"mori-coin","sol-agi-alpha-agent":"agi-alpha-agent","omisego":"omg","melon":"enzyme","aavegotchi-ghst-token":"aavegotchi","sol-cudis":"cudis","ton-crystal":"everscale","sol-mobyscreener":"mobyscreener","ethos":"voyager-token","p-ixt-token":"ix-token","sol-agenda-47":"agenda-47","sol-verse-world":"verse-world","sol-hyperpigmentation":"hyperpigmentation","gridplus":"grid","sol-zeta":"zeta","sol-dowge":"dowge","sol-kokok-the-roach":"kokok-the-roach","sol-hosico":"hosico","synternet-v2":"synternet","zcoin":"firo","chronotech":"chrono-tech","sol-yeti":"yeti","sol-startupcoin":"startupcoin","emirex":"emirex-token","sol-labubu-xyz":"labubu-xyz","sol-masha":"masha","monolith":"tokencard","sun-contract":"suncontract","sol-tiger-shark":"tiger-shark","machine-xchange-coin":"mxc","sol-moonpig":"moonpig","library-credit":"library-credits","super-zero":"super-zero-protocol","neutrino-dollar":"neutrino-usd","nss":"nss-coin","p-klima-dao":"klimadao","xcrypt":"xcrypt-token","internet-node-token":"int-chain","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","lukki":"lukki-operating-token","paccoin":"pac-protocol","sol-ani-grok-companion":"ani-grok-companion","stone":"stone-token","probit":"probit-token","bzx":"bzx-protocol","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
