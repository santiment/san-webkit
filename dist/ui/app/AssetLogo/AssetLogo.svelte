<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","gatechain-token":"gatetoken","xinfin-network":"xinfin","staked-ethena":"ethena","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","o-optimism":"optimism-ethereum","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","floki-inu-v2":"floki-inu","gala-v2":"gala","sol-raydium":"raydium","luna":"terra-luna","mantra-dao":"mantra","o-synthetix-network-token":"synthetix","kickico":"kick-token","sol-loaded-lions":"loaded-lions","nexus-mutual":"nxm","wrapped-nxm":"nxm","arb-sushi":"sushiswap","sushi":"sushiswap","bnb-sushi":"bsc-sushi","stasis-euro":"stasis-eurs","zencash":"horizen","sol-launch-coin-on-believe":"launch-coin-on-believe","swipe":"sxp","bnb-swipe":"sxp","hive":"hive-blockchain","zb":"zb-token","sol-theuselesscoin":"theuselesscoin","noia-network":"syntropy","sol-huma-finance":"huma-finance","BTRST":"braintrust","bounce":"bounce-token","small-love-potion":"smooth-love-potion","terra-virtua-kolekt":"vanar","rif-token":"rsk-infrastructure-framework","scroll-v2":"scroll","funfair":"funtoken","dia-data":"dia","amino":"amino-network","uquid_coin":"uquid-coin","omisego":"omg","sol-agenda-47":"agenda-47","sol-hosico":"hosico","smart-bitcoin":"rsk-smart-bitcoin","ton-crystal":"everscale","melon":"enzyme","aavegotchi-ghst-token":"aavegotchi","ethos":"voyager-token","sol-verse-world":"verse-world","zcoin":"firo","gridplus":"grid","p-ixt-token":"ix-token","sol-moonpig":"moonpig","synternet-v2":"synternet","chronotech":"chrono-tech","machine-xchange-coin":"mxc","emirex":"emirex-token","sun-contract":"suncontract","super-zero":"super-zero-protocol","monolith":"tokencard","neutrino-dollar":"neutrino-usd","p-klima-dao":"klimadao","library-credit":"library-credits","forceprotocol":"the-force-protocol","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","paccoin":"pac-protocol","lukki":"lukki-operating-token","p-matic-network":"polygon","stone":"stone-token","probit":"probit-token","reddcoin":"redd","exmr":"exmr-fdn","yobit":"yobit-token","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
