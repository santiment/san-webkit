<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","sol-pump-fun":"pump-fun","gatechain-token":"gatetoken","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","sol-doublezero":"doublezero","blockstack":"stacks","o-optimism":"optimism-ethereum","curve":"curve-dao-token","arb-curve":"curve-dao-token","floki-inu-v2":"floki-inu","gala-v2":"gala","o-synthetix-network-token":"synthetix","sol-raydium":"raydium","sol-zebec-network":"zebec-network","sol-theuselesscoin":"theuselesscoin","luna":"terra-luna","zencash":"horizen","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","sol-loaded-lions":"loaded-lions","sol-soon":"soon","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","stasis-euro":"stasis-eurs","mantra-dao":"mantra","zb":"zb-token","noia-network":"syntropy","swipe":"sxp","bnb-swipe":"sxp","sol-launch-coin-on-believe":"launch-coin-on-believe","hive":"hive-blockchain","sol-huma-finance":"huma-finance","bounce":"bounce-token","dia-data":"dia","rif-token":"rsk-infrastructure-framework","small-love-potion":"smooth-love-potion","funfair":"funtoken","sol-collector-crypt":"collector-crypt","amino":"amino-network","sol-nobody-sausage":"nobody-sausage","uquid_coin":"uquid-coin","BTRST":"braintrust","terra-virtua-kolekt":"vanar","bnb-attestation-service":"bnb-attestation-service","scroll-v2":"scroll","ton-crystal":"everscale","melon":"enzyme","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","p-ixt-token":"ix-token","sol-uranus-coin":"uranus-coin","sol-mori-coin":"mori-coin","sol-agenda-47":"agenda-47","omisego":"omg","sol-unstable-coin-sol":"unstable-coin-sol","ethos":"voyager-token","sol-zeta":"zeta","aavegotchi-ghst-token":"aavegotchi","sol-graphite-protocol":"graphite-protocol","gridplus":"grid","sol-cudis":"cudis","sol-verse-world":"verse-world","sol-dowge":"dowge","sol-mobyscreener":"mobyscreener","sol-estatex":"estatex","sol-hyperpigmentation":"hyperpigmentation","sol-agi-alpha-agent":"agi-alpha-agent","emirex":"emirex-token","chronotech":"chrono-tech","sol-light":"light","synternet-v2":"synternet","sol-masha":"masha","sol-kokok-the-roach":"kokok-the-roach","sol-hosico":"hosico","sol-labubu-xyz":"labubu-xyz","monolith":"tokencard","p-klima-dao":"klimadao","sun-contract":"suncontract","sol-startupcoin":"startupcoin","machine-xchange-coin":"mxc","neutrino-dollar":"neutrino-usd","super-zero":"super-zero-protocol","library-credit":"library-credits","nss":"nss-coin","sol-tiger-shark":"tiger-shark","xcrypt":"xcrypt-token","sol-moonpig":"moonpig","internet-node-token":"int-chain","forceprotocol":"the-force-protocol","blue-whale-token":"blue-whale-exchange","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","lukki":"lukki-operating-token","perl-eco":"perlin","sol-yeti":"yeti","paccoin":"pac-protocol","stone":"stone-token","sol-ani-grok-companion":"ani-grok-companion","probit":"probit-token","bzx":"bzx-protocol","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
