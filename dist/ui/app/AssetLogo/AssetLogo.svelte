<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"binance-coin":"bnb","crypto-com-coin":"cronos","blockstack":"stacks","file-coin":"filecoin","floki-inu-v2":"floki-inu","hedera-hashgraph":"hedera","o-optimism":"optimism-ethereum","mantra-dao":"mantra","gala-v2":"gala","p-matic-network":"polygon","gatechain-token":"gatetoken","luna":"terra-luna","o-synthetix-network-token":"synthetix","curve":"curve-dao-token","arb-curve":"curve-dao-token","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","bnb-swipe":"sxp","swipe":"sxp","sushi":"sushiswap","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","terra-virtua-kolekt":"vanar","zencash":"horizen","zb":"zb-token","stasis-euro":"stasis-eurs","hive":"hive-blockchain","noia-network":"syntropy","small-love-potion":"smooth-love-potion","rif-token":"rsk-infrastructure-framework","bounce":"bounce-token","dia-data":"dia","BTRST":"braintrust","uquid_coin":"uquid-coin","aavegotchi-ghst-token":"aavegotchi","amino":"amino-network","ton-crystal":"everscale","melon":"enzyme","omisego":"omg","smart-bitcoin":"rsk-smart-bitcoin","funfair":"funtoken","paccoin":"pac-protocol","ethos":"voyager-token","zcoin":"firo","machine-xchange-coin":"mxc","chronotech":"chrono-tech","p-klima-dao":"klimadao","gridplus":"grid","super-zero":"super-zero-protocol","emirex":"emirex-token","sun-contract":"suncontract","library-credit":"library-credits","forceprotocol":"the-force-protocol","probit":"probit-token","monolith":"tokencard","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","neutrino-dollar":"neutrino-usd","shroom-finance":"niftyx-protocol","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","perl-eco":"perlin","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","stone":"stone-token","p-ixt-token":"ix-token","yobit":"yobit-token","exmr":"exmr-fdn","reddcoin":"redd","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
