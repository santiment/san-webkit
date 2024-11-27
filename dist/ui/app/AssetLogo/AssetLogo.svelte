<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"binance-coin":"bnb","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","file-coin":"filecoin","mantra-dao":"mantra","blockstack":"stacks","o-optimism":"optimism-ethereum","floki-inu-v2":"floki-inu","gala-v2":"gala","p-matic-network":"polygon","gatechain-token":"gatetoken","o-synthetix-network-token":"synthetix","luna":"terra-luna","curve":"curve-dao-token","arb-curve":"curve-dao-token","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","bnb-sushi":"bsc-sushi","sushi":"sushiswap","arb-sushi":"sushiswap","swipe":"sxp","bnb-swipe":"sxp","terra-virtua-kolekt":"vanar","zencash":"horizen","zb":"zb-token","small-love-potion":"smooth-love-potion","noia-network":"syntropy","hive":"hive-blockchain","rif-token":"rsk-infrastructure-framework","stasis-euro":"stasis-eurs","bounce":"bounce-token","dia-data":"dia","BTRST":"braintrust","uquid_coin":"uquid-coin","amino":"amino-network","aavegotchi-ghst-token":"aavegotchi","omisego":"omg","melon":"enzyme","funfair":"funtoken","smart-bitcoin":"rsk-smart-bitcoin","ton-crystal":"everscale","zcoin":"firo","ethos":"voyager-token","chronotech":"chrono-tech","gridplus":"grid","machine-xchange-coin":"mxc","super-zero":"super-zero-protocol","p-klima-dao":"klimadao","emirex":"emirex-token","library-credit":"library-credits","sun-contract":"suncontract","monolith":"tokencard","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","forceprotocol":"the-force-protocol","neutrino-dollar":"neutrino-usd","shroom-finance":"niftyx-protocol","nss":"nss-coin","paccoin":"pac-protocol","xcrypt":"xcrypt-token","internet-node-token":"int-chain","perl-eco":"perlin","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","stone":"stone-token","probit":"probit-token","p-ixt-token":"ix-token","yobit":"yobit-token","exmr":"exmr-fdn","reddcoin":"redd","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
