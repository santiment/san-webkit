<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","sol-pump-fun":"pump-fun","file-coin":"filecoin","gatechain-token":"gatetoken","o-optimism":"optimism-ethereum","injective-protocol":"injective","sol-first-digital-usd":"first-digital-usd","blockstack":"stacks","curve":"curve-dao-token","arb-curve":"curve-dao-token","floki-inu-v2":"floki-inu","sol-raydium":"raydium","gala-v2":"gala","sol-zebec-network":"zebec-network","luna":"terra-luna","kickico":"kick-token","sol-loaded-lions":"loaded-lions","wrapped-nxm":"nxm","nexus-mutual":"nxm","o-synthetix-network-token":"synthetix","sushi":"sushiswap","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","mantra-dao":"mantra","sol-theuselesscoin":"theuselesscoin","stasis-euro":"stasis-eurs","zencash":"horizen","zb":"zb-token","bnb-swipe":"sxp","swipe":"sxp","noia-network":"syntropy","sol-soon":"soon","funfair":"funtoken","hive":"hive-blockchain","dia-data":"dia","sol-collector-crypt":"collector-crypt","sol-huma-finance":"huma-finance","small-love-potion":"smooth-love-potion","rif-token":"rsk-infrastructure-framework","sol-launch-coin-on-believe":"launch-coin-on-believe","bounce":"bounce-token","scroll-v2":"scroll","terra-virtua-kolekt":"vanar","BTRST":"braintrust","amino":"amino-network","sol-nobody-sausage":"nobody-sausage","sol-mori-coin":"mori-coin","bnb-attestation-service":"bnb-attestation-service","uquid_coin":"uquid-coin","ton-crystal":"everscale","sol-unstable-coin-sol":"unstable-coin-sol","smart-bitcoin":"rsk-smart-bitcoin","sol-agenda-47":"agenda-47","sol-graphite-protocol":"graphite-protocol","sol-cudis":"cudis","omisego":"omg","sol-zeta":"zeta","sol-uranus-coin":"uranus-coin","aavegotchi-ghst-token":"aavegotchi","melon":"enzyme","sol-agi-alpha-agent":"agi-alpha-agent","ethos":"voyager-token","sol-verse-world":"verse-world","p-ixt-token":"ix-token","gridplus":"grid","sol-mobyscreener":"mobyscreener","sol-hyperpigmentation":"hyperpigmentation","sol-estatex":"estatex","zcoin":"firo","sol-dowge":"dowge","sol-hosico":"hosico","sol-light":"light","chronotech":"chrono-tech","sol-kokok-the-roach":"kokok-the-roach","synternet-v2":"synternet","emirex":"emirex-token","sol-startupcoin":"startupcoin","sol-yeti":"yeti","sol-labubu-xyz":"labubu-xyz","sol-masha":"masha","monolith":"tokencard","sol-tiger-shark":"tiger-shark","sun-contract":"suncontract","sol-moonpig":"moonpig","machine-xchange-coin":"mxc","neutrino-dollar":"neutrino-usd","super-zero":"super-zero-protocol","library-credit":"library-credits","nss":"nss-coin","p-klima-dao":"klimadao","xcrypt":"xcrypt-token","internet-node-token":"int-chain","forceprotocol":"the-force-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","shroom-finance":"niftyx-protocol","perl-eco":"perlin","lukki":"lukki-operating-token","paccoin":"pac-protocol","stone":"stone-token","sol-ani-grok-companion":"ani-grok-companion","bzx":"bzx-protocol","yobit":"yobit-token","exmr":"exmr-fdn","probit":"probit-token","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
