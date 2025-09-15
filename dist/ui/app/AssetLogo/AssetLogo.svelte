<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","sol-pump-fun":"pump-fun","xinfin-network":"xinfin","p-matic-network":"polygon","file-coin":"filecoin","gatechain-token":"gatetoken","injective-protocol":"injective","o-optimism":"optimism-ethereum","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","arb-curve":"curve-dao-token","curve":"curve-dao-token","floki-inu-v2":"floki-inu","sol-raydium":"raydium","gala-v2":"gala","sol-zebec-network":"zebec-network","luna":"terra-luna","o-synthetix-network-token":"synthetix","sol-theuselesscoin":"theuselesscoin","kickico":"kick-token","sol-loaded-lions":"loaded-lions","nexus-mutual":"nxm","wrapped-nxm":"nxm","mantra-dao":"mantra","sushi":"sushiswap","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","stasis-euro":"stasis-eurs","zencash":"horizen","zb":"zb-token","sol-collector-crypt":"collector-crypt","swipe":"sxp","bnb-swipe":"sxp","noia-network":"syntropy","hive":"hive-blockchain","funfair":"funtoken","sol-soon":"soon","sol-launch-coin-on-believe":"launch-coin-on-believe","dia-data":"dia","small-love-potion":"smooth-love-potion","scroll-v2":"scroll","sol-nobody-sausage":"nobody-sausage","rif-token":"rsk-infrastructure-framework","bounce":"bounce-token","sol-huma-finance":"huma-finance","bnb-attestation-service":"bnb-attestation-service","terra-virtua-kolekt":"vanar","BTRST":"braintrust","amino":"amino-network","sol-mori-coin":"mori-coin","sol-unstable-coin-sol":"unstable-coin-sol","uquid_coin":"uquid-coin","sol-graphite-protocol":"graphite-protocol","smart-bitcoin":"rsk-smart-bitcoin","ton-crystal":"everscale","sol-uranus-coin":"uranus-coin","sol-cudis":"cudis","sol-agenda-47":"agenda-47","sol-agi-alpha-agent":"agi-alpha-agent","omisego":"omg","aavegotchi-ghst-token":"aavegotchi","melon":"enzyme","ethos":"voyager-token","sol-mobyscreener":"mobyscreener","sol-verse-world":"verse-world","sol-hyperpigmentation":"hyperpigmentation","p-ixt-token":"ix-token","gridplus":"grid","sol-hosico":"hosico","sol-dowge":"dowge","zcoin":"firo","sol-estatex":"estatex","sol-zeta":"zeta","sol-light":"light","sol-startupcoin":"startupcoin","chronotech":"chrono-tech","sol-yeti":"yeti","synternet-v2":"synternet","sol-kokok-the-roach":"kokok-the-roach","emirex":"emirex-token","sol-labubu-xyz":"labubu-xyz","sol-masha":"masha","sol-tiger-shark":"tiger-shark","monolith":"tokencard","machine-xchange-coin":"mxc","sun-contract":"suncontract","sol-moonpig":"moonpig","neutrino-dollar":"neutrino-usd","super-zero":"super-zero-protocol","library-credit":"library-credits","nss":"nss-coin","xcrypt":"xcrypt-token","p-klima-dao":"klimadao","internet-node-token":"int-chain","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","blue-whale-token":"blue-whale-exchange","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","perl-eco":"perlin","lukki":"lukki-operating-token","paccoin":"pac-protocol","sol-ani-grok-companion":"ani-grok-companion","stone":"stone-token","bzx":"bzx-protocol","probit":"probit-token","yobit":"yobit-token","exmr":"exmr-fdn","yamv3":"yamv1","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
