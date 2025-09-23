<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","sol-pump-fun":"pump-fun","file-coin":"filecoin","gatechain-token":"gatetoken","o-optimism":"optimism-ethereum","injective-protocol":"injective","sol-first-digital-usd":"first-digital-usd","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","floki-inu-v2":"floki-inu","sol-raydium":"raydium","gala-v2":"gala","sol-zebec-network":"zebec-network","luna":"terra-luna","o-synthetix-network-token":"synthetix","kickico":"kick-token","sol-loaded-lions":"loaded-lions","wrapped-nxm":"nxm","nexus-mutual":"nxm","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","mantra-dao":"mantra","sol-theuselesscoin":"theuselesscoin","stasis-euro":"stasis-eurs","zencash":"horizen","zb":"zb-token","swipe":"sxp","bnb-swipe":"sxp","noia-network":"syntropy","sol-soon":"soon","funfair":"funtoken","hive":"hive-blockchain","dia-data":"dia","sol-huma-finance":"huma-finance","sol-launch-coin-on-believe":"launch-coin-on-believe","small-love-potion":"smooth-love-potion","rif-token":"rsk-infrastructure-framework","bounce":"bounce-token","scroll-v2":"scroll","sol-nobody-sausage":"nobody-sausage","terra-virtua-kolekt":"vanar","sol-collector-crypt":"collector-crypt","amino":"amino-network","BTRST":"braintrust","bnb-attestation-service":"bnb-attestation-service","uquid_coin":"uquid-coin","sol-mori-coin":"mori-coin","ton-crystal":"everscale","sol-graphite-protocol":"graphite-protocol","smart-bitcoin":"rsk-smart-bitcoin","sol-unstable-coin-sol":"unstable-coin-sol","sol-uranus-coin":"uranus-coin","sol-zeta":"zeta","sol-agenda-47":"agenda-47","sol-cudis":"cudis","omisego":"omg","aavegotchi-ghst-token":"aavegotchi","melon":"enzyme","ethos":"voyager-token","sol-agi-alpha-agent":"agi-alpha-agent","sol-verse-world":"verse-world","p-ixt-token":"ix-token","sol-mobyscreener":"mobyscreener","gridplus":"grid","sol-hyperpigmentation":"hyperpigmentation","sol-dowge":"dowge","sol-estatex":"estatex","zcoin":"firo","sol-hosico":"hosico","sol-light":"light","chronotech":"chrono-tech","sol-startupcoin":"startupcoin","sol-kokok-the-roach":"kokok-the-roach","emirex":"emirex-token","synternet-v2":"synternet","sol-yeti":"yeti","sol-masha":"masha","sol-labubu-xyz":"labubu-xyz","monolith":"tokencard","sol-tiger-shark":"tiger-shark","sun-contract":"suncontract","machine-xchange-coin":"mxc","sol-moonpig":"moonpig","neutrino-dollar":"neutrino-usd","super-zero":"super-zero-protocol","library-credit":"library-credits","nss":"nss-coin","p-klima-dao":"klimadao","xcrypt":"xcrypt-token","internet-node-token":"int-chain","forceprotocol":"the-force-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","shroom-finance":"niftyx-protocol","perl-eco":"perlin","lukki":"lukki-operating-token","paccoin":"pac-protocol","stone":"stone-token","sol-ani-grok-companion":"ani-grok-companion","probit":"probit-token","bzx":"bzx-protocol","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
