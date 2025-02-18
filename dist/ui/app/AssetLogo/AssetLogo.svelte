<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"binance-coin":"bnb","hedera-hashgraph":"hedera","mantra-dao":"mantra","crypto-com-coin":"cronos","file-coin":"filecoin","gatechain-token":"gatetoken","o-optimism":"optimism-ethereum","injective-protocol":"injective","blockstack":"stacks","staked-ethena":"ethena","floki-inu-v2":"floki-inu","gala-v2":"gala","arb-curve":"curve-dao-token","curve":"curve-dao-token","p-matic-network":"polygon","luna":"terra-luna","o-synthetix-network-token":"synthetix","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","zencash":"horizen","hive":"hive-blockchain","bnb-swipe":"sxp","swipe":"sxp","stasis-euro":"stasis-eurs","zb":"zb-token","noia-network":"syntropy","small-love-potion":"smooth-love-potion","BTRST":"braintrust","terra-virtua-kolekt":"vanar","bounce":"bounce-token","dia-data":"dia","rif-token":"rsk-infrastructure-framework","amino":"amino-network","uquid_coin":"uquid-coin","omisego":"omg","melon":"enzyme","funfair":"funtoken","aavegotchi-ghst-token":"aavegotchi","smart-bitcoin":"rsk-smart-bitcoin","ton-crystal":"everscale","zcoin":"firo","ethos":"voyager-token","synternet-v2":"synternet","gridplus":"grid","chronotech":"chrono-tech","machine-xchange-coin":"mxc","emirex":"emirex-token","p-klima-dao":"klimadao","super-zero":"super-zero-protocol","sun-contract":"suncontract","library-credit":"library-credits","monolith":"tokencard","neutrino-dollar":"neutrino-usd","forceprotocol":"the-force-protocol","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","shroom-finance":"niftyx-protocol","paccoin":"pac-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","perl-eco":"perlin","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","stone":"stone-token","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd","p-ixt-token":"ix-token","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
