<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","sol-pump-fun":"pump-fun","file-coin":"filecoin","gatechain-token":"gatetoken","injective-protocol":"injective","o-optimism":"optimism-ethereum","sol-first-digital-usd":"first-digital-usd","blockstack":"stacks","curve":"curve-dao-token","arb-curve":"curve-dao-token","floki-inu-v2":"floki-inu","sol-raydium":"raydium","gala-v2":"gala","o-synthetix-network-token":"synthetix","sol-zebec-network":"zebec-network","luna":"terra-luna","kickico":"kick-token","sol-light":"light","sol-loaded-lions":"loaded-lions","nexus-mutual":"nxm","wrapped-nxm":"nxm","arb-sushi":"sushiswap","sushi":"sushiswap","bnb-sushi":"bsc-sushi","mantra-dao":"mantra","sol-theuselesscoin":"theuselesscoin","stasis-euro":"stasis-eurs","zencash":"horizen","zb":"zb-token","bnb-swipe":"sxp","swipe":"sxp","noia-network":"syntropy","funfair":"funtoken","sol-soon":"soon","hive":"hive-blockchain","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-huma-finance":"huma-finance","dia-data":"dia","sol-collector-crypt":"collector-crypt","rif-token":"rsk-infrastructure-framework","small-love-potion":"smooth-love-potion","scroll-v2":"scroll","bounce":"bounce-token","sol-nobody-sausage":"nobody-sausage","terra-virtua-kolekt":"vanar","amino":"amino-network","bnb-attestation-service":"bnb-attestation-service","BTRST":"braintrust","uquid_coin":"uquid-coin","sol-unstable-coin-sol":"unstable-coin-sol","ton-crystal":"everscale","sol-mori-coin":"mori-coin","smart-bitcoin":"rsk-smart-bitcoin","sol-graphite-protocol":"graphite-protocol","sol-agenda-47":"agenda-47","sol-uranus-coin":"uranus-coin","melon":"enzyme","sol-zeta":"zeta","omisego":"omg","aavegotchi-ghst-token":"aavegotchi","ethos":"voyager-token","p-ixt-token":"ix-token","sol-verse-world":"verse-world","gridplus":"grid","sol-cudis":"cudis","sol-mobyscreener":"mobyscreener","sol-dowge":"dowge","sol-hyperpigmentation":"hyperpigmentation","zcoin":"firo","sol-estatex":"estatex","synternet-v2":"synternet","chronotech":"chrono-tech","sol-hosico":"hosico","emirex":"emirex-token","sol-labubu-xyz":"labubu-xyz","sol-kokok-the-roach":"kokok-the-roach","sol-masha":"masha","sol-yeti":"yeti","sol-startupcoin":"startupcoin","sol-agi-alpha-agent":"agi-alpha-agent","monolith":"tokencard","sol-tiger-shark":"tiger-shark","sun-contract":"suncontract","p-klima-dao":"klimadao","sol-moonpig":"moonpig","machine-xchange-coin":"mxc","neutrino-dollar":"neutrino-usd","super-zero":"super-zero-protocol","library-credit":"library-credits","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","forceprotocol":"the-force-protocol","blue-whale-token":"blue-whale-exchange","shroom-finance":"niftyx-protocol","perl-eco":"perlin","lukki":"lukki-operating-token","paccoin":"pac-protocol","stone":"stone-token","sol-ani-grok-companion":"ani-grok-companion","probit":"probit-token","bzx":"bzx-protocol","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
