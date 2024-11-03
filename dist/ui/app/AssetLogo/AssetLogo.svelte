<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"binance-coin":"bnb","blockstack":"stacks","file-coin":"filecoin","crypto-com-coin":"cronos","o-optimism":"optimism-ethereum","hedera-hashgraph":"hedera","floki-inu-v2":"floki-inu","mantra-dao":"mantra","p-matic-network":"polygon","gatechain-token":"gatetoken","gala-v2":"gala","luna":"terra-luna","o-synthetix-network-token":"synthetix","curve":"curve-dao-token","arb-curve":"curve-dao-token","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","arb-sushi":"sushiswap","sushi":"sushiswap","bnb-sushi":"bsc-sushi","bnb-swipe":"sxp","swipe":"sxp","stasis-euro":"stasis-eurs","zencash":"horizen","terra-virtua-kolekt":"vanar","zb":"zb-token","small-love-potion":"smooth-love-potion","dia-data":"dia","noia-network":"syntropy","hive":"hive-blockchain","BTRST":"braintrust","rif-token":"rsk-infrastructure-framework","bounce":"bounce-token","aavegotchi-ghst-token":"aavegotchi","uquid_coin":"uquid-coin","ton-crystal":"everscale","melon":"enzyme","amino":"amino-network","omisego":"omg","funfair":"funtoken","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","ethos":"voyager-token","machine-xchange-coin":"mxc","p-klima-dao":"klimadao","super-zero":"super-zero-protocol","chronotech":"chrono-tech","gridplus":"grid","emirex":"emirex-token","forceprotocol":"the-force-protocol","library-credit":"library-credits","sun-contract":"suncontract","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","neutrino-dollar":"neutrino-usd","shroom-finance":"niftyx-protocol","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","paccoin":"pac-protocol","perl-eco":"perlin","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","stone":"stone-token","p-ixt-token":"ix-token","probit":"probit-token","monolith":"tokencard","yobit":"yobit-token","exmr":"exmr-fdn","reddcoin":"redd","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
