<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","xinfin-network":"xinfin","gatechain-token":"gatetoken","crypto-com-coin":"cronos","staked-ethena":"ethena","file-coin":"filecoin","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","o-optimism":"optimism-ethereum","injective-protocol":"injective","floki-inu-v2":"floki-inu","curve":"curve-dao-token","arb-curve":"curve-dao-token","gala-v2":"gala","sol-raydium":"raydium","mantra-dao":"mantra","luna":"terra-luna","o-synthetix-network-token":"synthetix","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","bnb-sushi":"bsc-sushi","sushi":"sushiswap","arb-sushi":"sushiswap","zencash":"horizen","swipe":"sxp","bnb-swipe":"sxp","stasis-euro":"stasis-eurs","hive":"hive-blockchain","zb":"zb-token","noia-network":"syntropy","terra-virtua-kolekt":"vanar","small-love-potion":"smooth-love-potion","bounce":"bounce-token","scroll-v2":"scroll","BTRST":"braintrust","dia-data":"dia","rif-token":"rsk-infrastructure-framework","funfair":"funtoken","amino":"amino-network","ton-crystal":"everscale","uquid_coin":"uquid-coin","aavegotchi-ghst-token":"aavegotchi","omisego":"omg","melon":"enzyme","neutrino-dollar":"neutrino-usd","smart-bitcoin":"rsk-smart-bitcoin","ethos":"voyager-token","synternet-v2":"synternet","p-ixt-token":"ix-token","gridplus":"grid","zcoin":"firo","chronotech":"chrono-tech","emirex":"emirex-token","machine-xchange-coin":"mxc","sun-contract":"suncontract","super-zero":"super-zero-protocol","monolith":"tokencard","p-klima-dao":"klimadao","library-credit":"library-credits","forceprotocol":"the-force-protocol","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","perl-eco":"perlin","blue-whale-token":"blue-whale-exchange","paccoin":"pac-protocol","lukki":"lukki-operating-token","p-matic-network":"polygon","stone":"stone-token","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
