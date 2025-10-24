<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","sol-pump-fun":"pump-fun","gatechain-token":"gatetoken","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","sol-doublezero":"doublezero","blockstack":"stacks","o-optimism":"optimism-ethereum","arb-curve":"curve-dao-token","curve":"curve-dao-token","floki-inu-v2":"floki-inu","gala-v2":"gala","sol-raydium":"raydium","o-synthetix-network-token":"synthetix","sol-zebec-network":"zebec-network","sol-theuselesscoin":"theuselesscoin","luna":"terra-luna","zencash":"horizen","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","sol-loaded-lions":"loaded-lions","sol-soon":"soon","sushi":"sushiswap","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","stasis-euro":"stasis-eurs","mantra-dao":"mantra","zb":"zb-token","noia-network":"syntropy","swipe":"sxp","bnb-swipe":"sxp","sol-launch-coin-on-believe":"launch-coin-on-believe","hive":"hive-blockchain","sol-huma-finance":"huma-finance","bounce":"bounce-token","dia-data":"dia","rif-token":"rsk-infrastructure-framework","sol-collector-crypt":"collector-crypt","small-love-potion":"smooth-love-potion","bnb-attestation-service":"bnb-attestation-service","amino":"amino-network","funfair":"funtoken","sol-nobody-sausage":"nobody-sausage","uquid_coin":"uquid-coin","sol-uranus-coin":"uranus-coin","terra-virtua-kolekt":"vanar","scroll-v2":"scroll","BTRST":"braintrust","ton-crystal":"everscale","zcoin":"firo","smart-bitcoin":"rsk-smart-bitcoin","melon":"enzyme","sol-mori-coin":"mori-coin","p-ixt-token":"ix-token","sol-unstable-coin-sol":"unstable-coin-sol","sol-agenda-47":"agenda-47","sol-graphite-protocol":"graphite-protocol","ethos":"voyager-token","omisego":"omg","aavegotchi-ghst-token":"aavegotchi","sol-zeta":"zeta","sol-cudis":"cudis","gridplus":"grid","sol-verse-world":"verse-world","sol-dowge":"dowge","sol-mobyscreener":"mobyscreener","sol-estatex":"estatex","sol-agi-alpha-agent":"agi-alpha-agent","sol-hyperpigmentation":"hyperpigmentation","sol-light":"light","synternet-v2":"synternet","chronotech":"chrono-tech","emirex":"emirex-token","sol-masha":"masha","sol-hosico":"hosico","sol-kokok-the-roach":"kokok-the-roach","sol-labubu-xyz":"labubu-xyz","monolith":"tokencard","sol-startupcoin":"startupcoin","sun-contract":"suncontract","neutrino-dollar":"neutrino-usd","library-credit":"library-credits","machine-xchange-coin":"mxc","super-zero":"super-zero-protocol","p-klima-dao":"klimadao","nss":"nss-coin","xcrypt":"xcrypt-token","sol-tiger-shark":"tiger-shark","sol-moonpig":"moonpig","internet-node-token":"int-chain","forceprotocol":"the-force-protocol","blue-whale-token":"blue-whale-exchange","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","sol-yeti":"yeti","perl-eco":"perlin","lukki":"lukki-operating-token","paccoin":"pac-protocol","stone":"stone-token","sol-ani-grok-companion":"ani-grok-companion","probit":"probit-token","bzx":"bzx-protocol","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
