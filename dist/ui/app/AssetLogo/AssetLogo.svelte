<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","gatechain-token":"gatetoken","xinfin-network":"xinfin","staked-ethena":"ethena","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","blockstack":"stacks","o-optimism":"optimism-ethereum","injective-protocol":"injective","arb-curve":"curve-dao-token","curve":"curve-dao-token","floki-inu-v2":"floki-inu","gala-v2":"gala","sol-raydium":"raydium","luna":"terra-luna","mantra-dao":"mantra","o-synthetix-network-token":"synthetix","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","zencash":"horizen","bnb-swipe":"sxp","swipe":"sxp","stasis-euro":"stasis-eurs","hive":"hive-blockchain","zb":"zb-token","noia-network":"syntropy","small-love-potion":"smooth-love-potion","bounce":"bounce-token","terra-virtua-kolekt":"vanar","scroll-v2":"scroll","BTRST":"braintrust","dia-data":"dia","funfair":"funtoken","rif-token":"rsk-infrastructure-framework","amino":"amino-network","ton-crystal":"everscale","uquid_coin":"uquid-coin","neutrino-dollar":"neutrino-usd","omisego":"omg","melon":"enzyme","smart-bitcoin":"rsk-smart-bitcoin","aavegotchi-ghst-token":"aavegotchi","ethos":"voyager-token","p-ixt-token":"ix-token","synternet-v2":"synternet","gridplus":"grid","zcoin":"firo","chronotech":"chrono-tech","emirex":"emirex-token","machine-xchange-coin":"mxc","sun-contract":"suncontract","super-zero":"super-zero-protocol","monolith":"tokencard","p-klima-dao":"klimadao","library-credit":"library-credits","forceprotocol":"the-force-protocol","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","paccoin":"pac-protocol","perl-eco":"perlin","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","p-matic-network":"polygon","stone":"stone-token","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
