<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","sol-pump-fun":"pump-fun","file-coin":"filecoin","o-optimism":"optimism-ethereum","injective-protocol":"injective","gatechain-token":"gatetoken","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","curve":"curve-dao-token","arb-curve":"curve-dao-token","floki-inu-v2":"floki-inu","sol-raydium":"raydium","gala-v2":"gala","sol-zebec-network":"zebec-network","luna":"terra-luna","o-synthetix-network-token":"synthetix","mantra-dao":"mantra","kickico":"kick-token","sol-loaded-lions":"loaded-lions","nexus-mutual":"nxm","wrapped-nxm":"nxm","arb-sushi":"sushiswap","sushi":"sushiswap","bnb-sushi":"bsc-sushi","sol-theuselesscoin":"theuselesscoin","stasis-euro":"stasis-eurs","zencash":"horizen","zb":"zb-token","bnb-swipe":"sxp","swipe":"sxp","noia-network":"syntropy","funfair":"funtoken","sol-soon":"soon","hive":"hive-blockchain","dia-data":"dia","sol-collector-crypt":"collector-crypt","sol-launch-coin-on-believe":"launch-coin-on-believe","small-love-potion":"smooth-love-potion","sol-huma-finance":"huma-finance","sol-nobody-sausage":"nobody-sausage","rif-token":"rsk-infrastructure-framework","scroll-v2":"scroll","bounce":"bounce-token","terra-virtua-kolekt":"vanar","amino":"amino-network","sol-mori-coin":"mori-coin","BTRST":"braintrust","bnb-attestation-service":"bnb-attestation-service","uquid_coin":"uquid-coin","ton-crystal":"everscale","sol-unstable-coin-sol":"unstable-coin-sol","sol-graphite-protocol":"graphite-protocol","smart-bitcoin":"rsk-smart-bitcoin","sol-agenda-47":"agenda-47","sol-cudis":"cudis","aavegotchi-ghst-token":"aavegotchi","omisego":"omg","melon":"enzyme","sol-uranus-coin":"uranus-coin","ethos":"voyager-token","sol-zeta":"zeta","sol-agi-alpha-agent":"agi-alpha-agent","sol-verse-world":"verse-world","sol-mobyscreener":"mobyscreener","p-ixt-token":"ix-token","gridplus":"grid","sol-hyperpigmentation":"hyperpigmentation","sol-estatex":"estatex","sol-hosico":"hosico","sol-light":"light","zcoin":"firo","sol-dowge":"dowge","sol-startupcoin":"startupcoin","chronotech":"chrono-tech","sol-kokok-the-roach":"kokok-the-roach","synternet-v2":"synternet","sol-yeti":"yeti","emirex":"emirex-token","sol-masha":"masha","sol-labubu-xyz":"labubu-xyz","monolith":"tokencard","sol-tiger-shark":"tiger-shark","sun-contract":"suncontract","machine-xchange-coin":"mxc","sol-moonpig":"moonpig","neutrino-dollar":"neutrino-usd","super-zero":"super-zero-protocol","library-credit":"library-credits","nss":"nss-coin","xcrypt":"xcrypt-token","p-klima-dao":"klimadao","internet-node-token":"int-chain","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","blue-whale-token":"blue-whale-exchange","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","perl-eco":"perlin","lukki":"lukki-operating-token","paccoin":"pac-protocol","sol-ani-grok-companion":"ani-grok-companion","stone":"stone-token","probit":"probit-token","bzx":"bzx-protocol","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
