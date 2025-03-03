<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"binance-coin":"bnb","hedera-hashgraph":"hedera","mantra-dao":"mantra","crypto-com-coin":"cronos","file-coin":"filecoin","gatechain-token":"gatetoken","o-optimism":"optimism-ethereum","injective-protocol":"injective","staked-ethena":"ethena","blockstack":"stacks","floki-inu-v2":"floki-inu","gala-v2":"gala","curve":"curve-dao-token","arb-curve":"curve-dao-token","p-matic-network":"polygon","luna":"terra-luna","o-synthetix-network-token":"synthetix","sushi":"sushiswap","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","kickico":"kick-token","wrapped-nxm":"nxm","nexus-mutual":"nxm","zencash":"horizen","hive":"hive-blockchain","swipe":"sxp","bnb-swipe":"sxp","stasis-euro":"stasis-eurs","zb":"zb-token","noia-network":"syntropy","bounce":"bounce-token","small-love-potion":"smooth-love-potion","BTRST":"braintrust","terra-virtua-kolekt":"vanar","dia-data":"dia","rif-token":"rsk-infrastructure-framework","uquid_coin":"uquid-coin","amino":"amino-network","omisego":"omg","melon":"enzyme","funfair":"funtoken","aavegotchi-ghst-token":"aavegotchi","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","ton-crystal":"everscale","ethos":"voyager-token","synternet-v2":"synternet","gridplus":"grid","chronotech":"chrono-tech","machine-xchange-coin":"mxc","emirex":"emirex-token","p-klima-dao":"klimadao","super-zero":"super-zero-protocol","sun-contract":"suncontract","monolith":"tokencard","library-credit":"library-credits","neutrino-dollar":"neutrino-usd","forceprotocol":"the-force-protocol","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","perl-eco":"perlin","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","paccoin":"pac-protocol","stone":"stone-token","probit":"probit-token","p-ixt-token":"ix-token","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
