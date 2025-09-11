<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","xinfin-network":"xinfin","p-matic-network":"polygon","sol-pump-fun":"pump-fun","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","o-optimism":"optimism-ethereum","gatechain-token":"gatetoken","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","floki-inu-v2":"floki-inu","sol-raydium":"raydium","gala-v2":"gala","sol-zebec-network":"zebec-network","luna":"terra-luna","sol-theuselesscoin":"theuselesscoin","o-synthetix-network-token":"synthetix","mantra-dao":"mantra","sushi":"sushiswap","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","kickico":"kick-token","sol-loaded-lions":"loaded-lions","nexus-mutual":"nxm","wrapped-nxm":"nxm","stasis-euro":"stasis-eurs","zencash":"horizen","zb":"zb-token","bnb-swipe":"sxp","swipe":"sxp","noia-network":"syntropy","sol-soon":"soon","hive":"hive-blockchain","sol-launch-coin-on-believe":"launch-coin-on-believe","funfair":"funtoken","dia-data":"dia","small-love-potion":"smooth-love-potion","scroll-v2":"scroll","sol-huma-finance":"huma-finance","rif-token":"rsk-infrastructure-framework","bounce":"bounce-token","terra-virtua-kolekt":"vanar","sol-unstable-coin-sol":"unstable-coin-sol","bnb-attestation-service":"bnb-attestation-service","BTRST":"braintrust","amino":"amino-network","sol-graphite-protocol":"graphite-protocol","uquid_coin":"uquid-coin","sol-mori-coin":"mori-coin","smart-bitcoin":"rsk-smart-bitcoin","sol-agi-alpha-agent":"agi-alpha-agent","melon":"enzyme","aavegotchi-ghst-token":"aavegotchi","ton-crystal":"everscale","omisego":"omg","sol-cudis":"cudis","sol-agenda-47":"agenda-47","ethos":"voyager-token","sol-mobyscreener":"mobyscreener","sol-verse-world":"verse-world","sol-hyperpigmentation":"hyperpigmentation","p-ixt-token":"ix-token","gridplus":"grid","sol-estatex":"estatex","sol-startupcoin":"startupcoin","zcoin":"firo","sol-zeta":"zeta","sol-hosico":"hosico","sol-dowge":"dowge","sol-kokok-the-roach":"kokok-the-roach","chronotech":"chrono-tech","synternet-v2":"synternet","sol-yeti":"yeti","sol-labubu-xyz":"labubu-xyz","emirex":"emirex-token","sol-masha":"masha","monolith":"tokencard","sol-tiger-shark":"tiger-shark","sun-contract":"suncontract","machine-xchange-coin":"mxc","sol-moonpig":"moonpig","super-zero":"super-zero-protocol","neutrino-dollar":"neutrino-usd","library-credit":"library-credits","nss":"nss-coin","xcrypt":"xcrypt-token","p-klima-dao":"klimadao","internet-node-token":"int-chain","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","blue-whale-token":"blue-whale-exchange","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","perl-eco":"perlin","lukki":"lukki-operating-token","paccoin":"pac-protocol","sol-ani-grok-companion":"ani-grok-companion","stone":"stone-token","probit":"probit-token","bzx":"bzx-protocol","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
