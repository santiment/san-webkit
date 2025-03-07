<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"binance-coin":"bnb","hedera-hashgraph":"hedera","mantra-dao":"mantra","crypto-com-coin":"cronos","file-coin":"filecoin","gatechain-token":"gatetoken","o-optimism":"optimism-ethereum","staked-ethena":"ethena","injective-protocol":"injective","blockstack":"stacks","gala-v2":"gala","floki-inu-v2":"floki-inu","curve":"curve-dao-token","arb-curve":"curve-dao-token","p-matic-network":"polygon","luna":"terra-luna","o-synthetix-network-token":"synthetix","arb-sushi":"sushiswap","sushi":"sushiswap","bnb-sushi":"bsc-sushi","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","zencash":"horizen","hive":"hive-blockchain","stasis-euro":"stasis-eurs","bnb-swipe":"sxp","swipe":"sxp","zb":"zb-token","bounce":"bounce-token","noia-network":"syntropy","small-love-potion":"smooth-love-potion","BTRST":"braintrust","terra-virtua-kolekt":"vanar","dia-data":"dia","rif-token":"rsk-infrastructure-framework","uquid_coin":"uquid-coin","amino":"amino-network","omisego":"omg","melon":"enzyme","aavegotchi-ghst-token":"aavegotchi","smart-bitcoin":"rsk-smart-bitcoin","funfair":"funtoken","zcoin":"firo","ton-crystal":"everscale","ethos":"voyager-token","synternet-v2":"synternet","chronotech":"chrono-tech","gridplus":"grid","machine-xchange-coin":"mxc","emirex":"emirex-token","p-klima-dao":"klimadao","super-zero":"super-zero-protocol","sun-contract":"suncontract","monolith":"tokencard","library-credit":"library-credits","neutrino-dollar":"neutrino-usd","forceprotocol":"the-force-protocol","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","perl-eco":"perlin","paccoin":"pac-protocol","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","stone":"stone-token","probit":"probit-token","p-ixt-token":"ix-token","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
