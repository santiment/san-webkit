<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","sol-pump-fun":"pump-fun","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","blockstack":"stacks","o-optimism":"optimism-ethereum","curve":"curve-dao-token","arb-curve":"curve-dao-token","floki-inu-v2":"floki-inu","o-synthetix-network-token":"synthetix","gala-v2":"gala","sol-raydium":"raydium","sol-zebec-network":"zebec-network","sol-theuselesscoin":"theuselesscoin","luna":"terra-luna","zencash":"horizen","kickico":"kick-token","sol-loaded-lions":"loaded-lions","wrapped-nxm":"nxm","bnb-attestation-service":"bnb-attestation-service","nexus-mutual":"nxm","sol-soon":"soon","sushi":"sushiswap","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","stasis-euro":"stasis-eurs","mantra-dao":"mantra","zb":"zb-token","noia-network":"syntropy","swipe":"sxp","bnb-swipe":"sxp","sol-launch-coin-on-believe":"launch-coin-on-believe","hive":"hive-blockchain","sol-huma-finance":"huma-finance","dia-data":"dia","rif-token":"rsk-infrastructure-framework","funfair":"funtoken","small-love-potion":"smooth-love-potion","sol-nobody-sausage":"nobody-sausage","bounce":"bounce-token","sol-collector-crypt":"collector-crypt","amino":"amino-network","uquid_coin":"uquid-coin","terra-virtua-kolekt":"vanar","scroll-v2":"scroll","ton-crystal":"everscale","BTRST":"braintrust","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","sol-mori-coin":"mori-coin","sol-agenda-47":"agenda-47","sol-uranus-coin":"uranus-coin","sol-unstable-coin-sol":"unstable-coin-sol","p-ixt-token":"ix-token","omisego":"omg","ethos":"voyager-token","aavegotchi-ghst-token":"aavegotchi","melon":"enzyme","sol-cudis":"cudis","sol-zeta":"zeta","sol-graphite-protocol":"graphite-protocol","gridplus":"grid","sol-verse-world":"verse-world","sol-dowge":"dowge","sol-mobyscreener":"mobyscreener","synternet-v2":"synternet","sol-estatex":"estatex","sol-hyperpigmentation":"hyperpigmentation","sol-light":"light","emirex":"emirex-token","chronotech":"chrono-tech","sol-agi-alpha-agent":"agi-alpha-agent","sol-masha":"masha","sol-hosico":"hosico","sol-kokok-the-roach":"kokok-the-roach","sol-labubu-xyz":"labubu-xyz","monolith":"tokencard","p-klima-dao":"klimadao","sol-startupcoin":"startupcoin","sun-contract":"suncontract","machine-xchange-coin":"mxc","neutrino-dollar":"neutrino-usd","super-zero":"super-zero-protocol","library-credit":"library-credits","nss":"nss-coin","xcrypt":"xcrypt-token","sol-tiger-shark":"tiger-shark","internet-node-token":"int-chain","sol-moonpig":"moonpig","forceprotocol":"the-force-protocol","blue-whale-token":"blue-whale-exchange","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","lukki":"lukki-operating-token","perl-eco":"perlin","sol-yeti":"yeti","paccoin":"pac-protocol","stone":"stone-token","sol-ani-grok-companion":"ani-grok-companion","probit":"probit-token","bzx":"bzx-protocol","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
