<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"binance-coin":"bnb","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","file-coin":"filecoin","mantra-dao":"mantra","blockstack":"stacks","o-optimism":"optimism-ethereum","floki-inu-v2":"floki-inu","gala-v2":"gala","curve":"curve-dao-token","arb-curve":"curve-dao-token","peanut-the-squirrel":"peanut-the-squirrel_MTI26QSL","p-matic-network":"polygon","gatechain-token":"gatetoken","o-synthetix-network-token":"synthetix","luna":"terra-luna","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","kickico":"kick-token","wrapped-nxm":"nxm","nexus-mutual":"nxm","terra-virtua-kolekt":"vanar","zencash":"horizen","swipe":"sxp","bnb-swipe":"sxp","small-love-potion":"smooth-love-potion","zb":"zb-token","noia-network":"syntropy","hive":"hive-blockchain","rif-token":"rsk-infrastructure-framework","BTRST":"braintrust","stasis-euro":"stasis-eurs","bounce":"bounce-token","dia-data":"dia","uquid_coin":"uquid-coin","amino":"amino-network","omisego":"omg","aavegotchi-ghst-token":"aavegotchi","melon":"enzyme","funfair":"funtoken","ton-crystal":"everscale","smart-bitcoin":"rsk-smart-bitcoin","ethos":"voyager-token","zcoin":"firo","machine-xchange-coin":"mxc","gridplus":"grid","chronotech":"chrono-tech","p-klima-dao":"klimadao","super-zero":"super-zero-protocol","emirex":"emirex-token","library-credit":"library-credits","sun-contract":"suncontract","monolith":"tokencard","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","forceprotocol":"the-force-protocol","neutrino-dollar":"neutrino-usd","shroom-finance":"niftyx-protocol","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","perl-eco":"perlin","paccoin":"pac-protocol","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","stone":"stone-token","p-ixt-token":"ix-token","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
