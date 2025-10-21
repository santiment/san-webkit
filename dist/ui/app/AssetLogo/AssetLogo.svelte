<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","sol-pump-fun":"pump-fun","gatechain-token":"gatetoken","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","blockstack":"stacks","o-optimism":"optimism-ethereum","curve":"curve-dao-token","arb-curve":"curve-dao-token","floki-inu-v2":"floki-inu","o-synthetix-network-token":"synthetix","gala-v2":"gala","sol-raydium":"raydium","sol-zebec-network":"zebec-network","sol-theuselesscoin":"theuselesscoin","luna":"terra-luna","zencash":"horizen","kickico":"kick-token","wrapped-nxm":"nxm","nexus-mutual":"nxm","sol-loaded-lions":"loaded-lions","sol-soon":"soon","bnb-sushi":"bsc-sushi","sushi":"sushiswap","arb-sushi":"sushiswap","stasis-euro":"stasis-eurs","mantra-dao":"mantra","zb":"zb-token","noia-network":"syntropy","bnb-swipe":"sxp","swipe":"sxp","hive":"hive-blockchain","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-huma-finance":"huma-finance","bounce":"bounce-token","dia-data":"dia","rif-token":"rsk-infrastructure-framework","small-love-potion":"smooth-love-potion","funfair":"funtoken","sol-collector-crypt":"collector-crypt","bnb-attestation-service":"bnb-attestation-service","amino":"amino-network","sol-nobody-sausage":"nobody-sausage","uquid_coin":"uquid-coin","terra-virtua-kolekt":"vanar","ton-crystal":"everscale","scroll-v2":"scroll","BTRST":"braintrust","melon":"enzyme","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","sol-mori-coin":"mori-coin","p-ixt-token":"ix-token","sol-agenda-47":"agenda-47","omisego":"omg","sol-unstable-coin-sol":"unstable-coin-sol","ethos":"voyager-token","sol-uranus-coin":"uranus-coin","aavegotchi-ghst-token":"aavegotchi","sol-graphite-protocol":"graphite-protocol","gridplus":"grid","sol-zeta":"zeta","sol-cudis":"cudis","sol-verse-world":"verse-world","sol-dowge":"dowge","sol-mobyscreener":"mobyscreener","sol-estatex":"estatex","synternet-v2":"synternet","sol-light":"light","sol-hyperpigmentation":"hyperpigmentation","sol-agi-alpha-agent":"agi-alpha-agent","emirex":"emirex-token","chronotech":"chrono-tech","sol-masha":"masha","sol-hosico":"hosico","sol-kokok-the-roach":"kokok-the-roach","sol-labubu-xyz":"labubu-xyz","monolith":"tokencard","p-klima-dao":"klimadao","sol-startupcoin":"startupcoin","sun-contract":"suncontract","machine-xchange-coin":"mxc","neutrino-dollar":"neutrino-usd","library-credit":"library-credits","super-zero":"super-zero-protocol","nss":"nss-coin","xcrypt":"xcrypt-token","sol-tiger-shark":"tiger-shark","sol-moonpig":"moonpig","internet-node-token":"int-chain","forceprotocol":"the-force-protocol","blue-whale-token":"blue-whale-exchange","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","lukki":"lukki-operating-token","perl-eco":"perlin","sol-yeti":"yeti","paccoin":"pac-protocol","stone":"stone-token","sol-ani-grok-companion":"ani-grok-companion","probit":"probit-token","bzx":"bzx-protocol","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
