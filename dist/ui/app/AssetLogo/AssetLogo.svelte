<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"binance-coin":"bnb","crypto-com-coin":"cronos","hedera-hashgraph":"hedera","blockstack":"stacks","mantra-dao":"mantra","file-coin":"filecoin","floki-inu-v2":"floki-inu","o-optimism":"optimism-ethereum","gala-v2":"gala","p-matic-network":"polygon","gatechain-token":"gatetoken","luna":"terra-luna","o-synthetix-network-token":"synthetix","arb-curve":"curve-dao-token","curve":"curve-dao-token","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","swipe":"sxp","bnb-swipe":"sxp","bnb-sushi":"bsc-sushi","sushi":"sushiswap","arb-sushi":"sushiswap","terra-virtua-kolekt":"vanar","zencash":"horizen","zb":"zb-token","small-love-potion":"smooth-love-potion","stasis-euro":"stasis-eurs","noia-network":"syntropy","hive":"hive-blockchain","rif-token":"rsk-infrastructure-framework","bounce":"bounce-token","dia-data":"dia","BTRST":"braintrust","uquid_coin":"uquid-coin","aavegotchi-ghst-token":"aavegotchi","amino":"amino-network","melon":"enzyme","omisego":"omg","ton-crystal":"everscale","funfair":"funtoken","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","ethos":"voyager-token","machine-xchange-coin":"mxc","chronotech":"chrono-tech","gridplus":"grid","p-klima-dao":"klimadao","super-zero":"super-zero-protocol","emirex":"emirex-token","sun-contract":"suncontract","library-credit":"library-credits","forceprotocol":"the-force-protocol","monolith":"tokencard","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","paccoin":"pac-protocol","neutrino-dollar":"neutrino-usd","shroom-finance":"niftyx-protocol","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","perl-eco":"perlin","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","probit":"probit-token","stone":"stone-token","p-ixt-token":"ix-token","yobit":"yobit-token","exmr":"exmr-fdn","reddcoin":"redd","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
