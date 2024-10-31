<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"binance-coin":"bnb","blockstack":"stacks","file-coin":"filecoin","o-optimism":"optimism-ethereum","crypto-com-coin":"cronos","hedera-hashgraph":"hedera","floki-inu-v2":"floki-inu","mantra-dao":"mantra","p-matic-network":"polygon","gatechain-token":"gatetoken","gala-v2":"gala","luna":"terra-luna","o-synthetix-network-token":"synthetix","curve":"curve-dao-token","arb-curve":"curve-dao-token","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","sushi":"sushiswap","bnb-swipe":"sxp","swipe":"sxp","stasis-euro":"stasis-eurs","terra-virtua-kolekt":"vanar","small-love-potion":"smooth-love-potion","zencash":"horizen","zb":"zb-token","dia-data":"dia","noia-network":"syntropy","rif-token":"rsk-infrastructure-framework","hive":"hive-blockchain","bounce":"bounce-token","BTRST":"braintrust","uquid_coin":"uquid-coin","aavegotchi-ghst-token":"aavegotchi","ton-crystal":"everscale","melon":"enzyme","amino":"amino-network","funfair":"funtoken","omisego":"omg","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","machine-xchange-coin":"mxc","ethos":"voyager-token","p-klima-dao":"klimadao","chronotech":"chrono-tech","super-zero":"super-zero-protocol","gridplus":"grid","emirex":"emirex-token","library-credit":"library-credits","forceprotocol":"the-force-protocol","sun-contract":"suncontract","neutrino-dollar":"neutrino-usd","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","nss":"nss-coin","xcrypt":"xcrypt-token","paccoin":"pac-protocol","internet-node-token":"int-chain","perl-eco":"perlin","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","stone":"stone-token","p-ixt-token":"ix-token","probit":"probit-token","monolith":"tokencard","yobit":"yobit-token","exmr":"exmr-fdn","reddcoin":"redd","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
    {...rest}
    src="https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_{logo}.png"
  >
    <Svg id="asset-small" w={placeholderSize}></Svg>
  </Picture>
{/key}
