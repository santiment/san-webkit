<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"binance-coin":"bnb","hedera-hashgraph":"hedera","mantra-dao":"mantra","crypto-com-coin":"cronos","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","o-optimism":"optimism-ethereum","injective-protocol":"injective","blockstack":"stacks","gala-v2":"gala","arb-curve":"curve-dao-token","curve":"curve-dao-token","floki-inu-v2":"floki-inu","luna":"terra-luna","o-synthetix-network-token":"synthetix","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","sushi":"sushiswap","zencash":"horizen","bounce":"bounce-token","bnb-swipe":"sxp","swipe":"sxp","stasis-euro":"stasis-eurs","hive":"hive-blockchain","zb":"zb-token","noia-network":"syntropy","small-love-potion":"smooth-love-potion","BTRST":"braintrust","terra-virtua-kolekt":"vanar","dia-data":"dia","rif-token":"rsk-infrastructure-framework","uquid_coin":"uquid-coin","amino":"amino-network","omisego":"omg","melon":"enzyme","funfair":"funtoken","aavegotchi-ghst-token":"aavegotchi","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","p-ixt-token":"ix-token","ton-crystal":"everscale","ethos":"voyager-token","synternet-v2":"synternet","gridplus":"grid","chronotech":"chrono-tech","emirex":"emirex-token","machine-xchange-coin":"mxc","p-klima-dao":"klimadao","super-zero":"super-zero-protocol","sun-contract":"suncontract","library-credit":"library-credits","monolith":"tokencard","neutrino-dollar":"neutrino-usd","forceprotocol":"the-force-protocol","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","perl-eco":"perlin","paccoin":"pac-protocol","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","p-matic-network":"polygon","stone":"stone-token","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","probit":"probit-token","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
