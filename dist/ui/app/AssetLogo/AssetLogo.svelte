<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","sol-pump-fun":"pump-fun","file-coin":"filecoin","gatechain-token":"gatetoken","o-optimism":"optimism-ethereum","injective-protocol":"injective","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","arb-curve":"curve-dao-token","curve":"curve-dao-token","floki-inu-v2":"floki-inu","sol-raydium":"raydium","gala-v2":"gala","o-synthetix-network-token":"synthetix","sol-zebec-network":"zebec-network","luna":"terra-luna","kickico":"kick-token","sol-loaded-lions":"loaded-lions","sol-light":"light","wrapped-nxm":"nxm","nexus-mutual":"nxm","sol-theuselesscoin":"theuselesscoin","arb-sushi":"sushiswap","sushi":"sushiswap","bnb-sushi":"bsc-sushi","zencash":"horizen","mantra-dao":"mantra","stasis-euro":"stasis-eurs","sol-soon":"soon","sol-launch-coin-on-believe":"launch-coin-on-believe","zb":"zb-token","noia-network":"syntropy","bnb-swipe":"sxp","swipe":"sxp","funfair":"funtoken","hive":"hive-blockchain","sol-collector-crypt":"collector-crypt","sol-huma-finance":"huma-finance","dia-data":"dia","small-love-potion":"smooth-love-potion","rif-token":"rsk-infrastructure-framework","scroll-v2":"scroll","terra-virtua-kolekt":"vanar","bounce":"bounce-token","sol-nobody-sausage":"nobody-sausage","amino":"amino-network","sol-unstable-coin-sol":"unstable-coin-sol","bnb-attestation-service":"bnb-attestation-service","BTRST":"braintrust","ton-crystal":"everscale","uquid_coin":"uquid-coin","sol-mori-coin":"mori-coin","smart-bitcoin":"rsk-smart-bitcoin","sol-graphite-protocol":"graphite-protocol","sol-agenda-47":"agenda-47","sol-zeta":"zeta","sol-uranus-coin":"uranus-coin","melon":"enzyme","aavegotchi-ghst-token":"aavegotchi","omisego":"omg","ethos":"voyager-token","p-ixt-token":"ix-token","sol-dowge":"dowge","sol-mobyscreener":"mobyscreener","gridplus":"grid","sol-verse-world":"verse-world","sol-cudis":"cudis","zcoin":"firo","sol-hyperpigmentation":"hyperpigmentation","sol-estatex":"estatex","synternet-v2":"synternet","chronotech":"chrono-tech","sol-hosico":"hosico","sol-startupcoin":"startupcoin","sol-kokok-the-roach":"kokok-the-roach","emirex":"emirex-token","sol-labubu-xyz":"labubu-xyz","sol-masha":"masha","sol-yeti":"yeti","sol-agi-alpha-agent":"agi-alpha-agent","monolith":"tokencard","sol-tiger-shark":"tiger-shark","sun-contract":"suncontract","p-klima-dao":"klimadao","machine-xchange-coin":"mxc","neutrino-dollar":"neutrino-usd","sol-moonpig":"moonpig","super-zero":"super-zero-protocol","library-credit":"library-credits","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","forceprotocol":"the-force-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","shroom-finance":"niftyx-protocol","perl-eco":"perlin","lukki":"lukki-operating-token","paccoin":"pac-protocol","stone":"stone-token","sol-ani-grok-companion":"ani-grok-companion","probit":"probit-token","bzx":"bzx-protocol","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
