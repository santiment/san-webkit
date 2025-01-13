<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"binance-coin":"bnb","hedera-hashgraph":"hedera","mantra-dao":"mantra","crypto-com-coin":"cronos","file-coin":"filecoin","staked-ethena":"ethena","o-optimism":"optimism-ethereum","blockstack":"stacks","gatechain-token":"gatetoken","floki-inu-v2":"floki-inu","gala-v2":"gala","arb-curve":"curve-dao-token","curve":"curve-dao-token","p-matic-network":"polygon","o-synthetix-network-token":"synthetix","luna":"terra-luna","sushi":"sushiswap","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","zencash":"horizen","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","hive":"hive-blockchain","swipe":"sxp","bnb-swipe":"sxp","zb":"zb-token","terra-virtua-kolekt":"vanar","noia-network":"syntropy","small-love-potion":"smooth-love-potion","stasis-euro":"stasis-eurs","BTRST":"braintrust","bounce":"bounce-token","rif-token":"rsk-infrastructure-framework","dia-data":"dia","amino":"amino-network","uquid_coin":"uquid-coin","funfair":"funtoken","aavegotchi-ghst-token":"aavegotchi","melon":"enzyme","omisego":"omg","smart-bitcoin":"rsk-smart-bitcoin","ton-crystal":"everscale","zcoin":"firo","synternet-v2":"synternet-synt","ethos":"voyager-token","gridplus":"grid","chronotech":"chrono-tech","machine-xchange-coin":"mxc","emirex":"emirex-token","p-klima-dao":"klimadao","super-zero":"super-zero-protocol","library-credit":"library-credits","sun-contract":"suncontract","monolith":"tokencard","neutrino-dollar":"neutrino-usd","forceprotocol":"the-force-protocol","nss":"nss-coin","shroom-finance":"niftyx-protocol","xcrypt":"xcrypt-token","internet-node-token":"int-chain","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","perl-eco":"perlin","paccoin":"pac-protocol","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","stone":"stone-token","p-ixt-token":"ix-token","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
