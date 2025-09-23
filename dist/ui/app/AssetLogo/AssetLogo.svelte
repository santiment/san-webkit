<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","sol-pump-fun":"pump-fun","file-coin":"filecoin","gatechain-token":"gatetoken","o-optimism":"optimism-ethereum","injective-protocol":"injective","sol-first-digital-usd":"first-digital-usd","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","floki-inu-v2":"floki-inu","sol-raydium":"raydium","gala-v2":"gala","sol-zebec-network":"zebec-network","luna":"terra-luna","o-synthetix-network-token":"synthetix","kickico":"kick-token","sol-loaded-lions":"loaded-lions","wrapped-nxm":"nxm","nexus-mutual":"nxm","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","mantra-dao":"mantra","sol-theuselesscoin":"theuselesscoin","stasis-euro":"stasis-eurs","zencash":"horizen","zb":"zb-token","bnb-swipe":"sxp","swipe":"sxp","sol-soon":"soon","noia-network":"syntropy","funfair":"funtoken","hive":"hive-blockchain","sol-huma-finance":"huma-finance","dia-data":"dia","small-love-potion":"smooth-love-potion","rif-token":"rsk-infrastructure-framework","sol-launch-coin-on-believe":"launch-coin-on-believe","bounce":"bounce-token","scroll-v2":"scroll","sol-collector-crypt":"collector-crypt","sol-nobody-sausage":"nobody-sausage","terra-virtua-kolekt":"vanar","amino":"amino-network","BTRST":"braintrust","bnb-attestation-service":"bnb-attestation-service","uquid_coin":"uquid-coin","sol-mori-coin":"mori-coin","sol-graphite-protocol":"graphite-protocol","ton-crystal":"everscale","sol-unstable-coin-sol":"unstable-coin-sol","smart-bitcoin":"rsk-smart-bitcoin","sol-uranus-coin":"uranus-coin","sol-agenda-47":"agenda-47","sol-cudis":"cudis","omisego":"omg","sol-zeta":"zeta","melon":"enzyme","aavegotchi-ghst-token":"aavegotchi","ethos":"voyager-token","sol-agi-alpha-agent":"agi-alpha-agent","sol-verse-world":"verse-world","p-ixt-token":"ix-token","gridplus":"grid","sol-mobyscreener":"mobyscreener","sol-hyperpigmentation":"hyperpigmentation","sol-dowge":"dowge","sol-estatex":"estatex","zcoin":"firo","sol-hosico":"hosico","sol-light":"light","chronotech":"chrono-tech","emirex":"emirex-token","sol-kokok-the-roach":"kokok-the-roach","sol-startupcoin":"startupcoin","synternet-v2":"synternet","sol-yeti":"yeti","sol-masha":"masha","sol-labubu-xyz":"labubu-xyz","monolith":"tokencard","sol-tiger-shark":"tiger-shark","sun-contract":"suncontract","sol-moonpig":"moonpig","machine-xchange-coin":"mxc","neutrino-dollar":"neutrino-usd","super-zero":"super-zero-protocol","library-credit":"library-credits","nss":"nss-coin","p-klima-dao":"klimadao","xcrypt":"xcrypt-token","internet-node-token":"int-chain","forceprotocol":"the-force-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","shroom-finance":"niftyx-protocol","perl-eco":"perlin","lukki":"lukki-operating-token","paccoin":"pac-protocol","stone":"stone-token","sol-ani-grok-companion":"ani-grok-companion","probit":"probit-token","bzx":"bzx-protocol","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
