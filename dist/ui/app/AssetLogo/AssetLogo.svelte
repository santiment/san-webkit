<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"binance-coin":"bnb","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","mantra-dao":"mantra","file-coin":"filecoin","staked-ethena":"ethena","o-optimism":"optimism-ethereum","blockstack":"stacks","floki-inu-v2":"floki-inu","gatechain-token":"gatetoken","gala-v2":"gala","arb-curve":"curve-dao-token","curve":"curve-dao-token","p-matic-network":"polygon","o-synthetix-network-token":"synthetix","luna":"terra-luna","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","sushi":"sushiswap","zencash":"horizen","kickico":"kick-token","wrapped-nxm":"nxm","nexus-mutual":"nxm","hive":"hive-blockchain","bnb-swipe":"sxp","swipe":"sxp","terra-virtua-kolekt":"vanar","zb":"zb-token","noia-network":"syntropy","small-love-potion":"smooth-love-potion","stasis-euro":"stasis-eurs","bounce":"bounce-token","BTRST":"braintrust","rif-token":"rsk-infrastructure-framework","dia-data":"dia","amino":"amino-network","aavegotchi-ghst-token":"aavegotchi","uquid_coin":"uquid-coin","melon":"enzyme","funfair":"funtoken","omisego":"omg","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","ton-crystal":"everscale","synternet-v2":"synternet-synt","ethos":"voyager-token","paccoin":"pac-protocol","gridplus":"grid","chronotech":"chrono-tech","machine-xchange-coin":"mxc","emirex":"emirex-token","p-klima-dao":"klimadao","super-zero":"super-zero-protocol","library-credit":"library-credits","sun-contract":"suncontract","monolith":"tokencard","neutrino-dollar":"neutrino-usd","forceprotocol":"the-force-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","nss":"nss-coin","xcrypt":"xcrypt-token","shroom-finance":"niftyx-protocol","internet-node-token":"int-chain","perl-eco":"perlin","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","stone":"stone-token","probit":"probit-token","p-ixt-token":"ix-token","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
