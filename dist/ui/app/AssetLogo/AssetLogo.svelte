<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","gatechain-token":"gatetoken","crypto-com-coin":"cronos","file-coin":"filecoin","staked-ethena":"ethena","blockstack":"stacks","o-optimism":"optimism-ethereum","injective-protocol":"injective","arb-curve":"curve-dao-token","curve":"curve-dao-token","gala-v2":"gala","floki-inu-v2":"floki-inu","mantra-dao":"mantra","luna":"terra-luna","o-synthetix-network-token":"synthetix","kickico":"kick-token","wrapped-nxm":"nxm","nexus-mutual":"nxm","sushi":"sushiswap","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","stasis-euro":"stasis-eurs","zencash":"horizen","swipe":"sxp","bnb-swipe":"sxp","hive":"hive-blockchain","zb":"zb-token","noia-network":"syntropy","bounce":"bounce-token","small-love-potion":"smooth-love-potion","BTRST":"braintrust","funfair":"funtoken","terra-virtua-kolekt":"vanar","dia-data":"dia","rif-token":"rsk-infrastructure-framework","amino":"amino-network","uquid_coin":"uquid-coin","ton-crystal":"everscale","omisego":"omg","melon":"enzyme","aavegotchi-ghst-token":"aavegotchi","smart-bitcoin":"rsk-smart-bitcoin","p-ixt-token":"ix-token","ethos":"voyager-token","synternet-v2":"synternet","gridplus":"grid","chronotech":"chrono-tech","zcoin":"firo","emirex":"emirex-token","paccoin":"pac-protocol","machine-xchange-coin":"mxc","p-klima-dao":"klimadao","sun-contract":"suncontract","super-zero":"super-zero-protocol","monolith":"tokencard","neutrino-dollar":"neutrino-usd","forceprotocol":"the-force-protocol","library-credit":"library-credits","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","perl-eco":"perlin","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","probit":"probit-token","p-matic-network":"polygon","stone":"stone-token","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
