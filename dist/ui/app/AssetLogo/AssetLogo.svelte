<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","mantra-dao":"mantra","crypto-com-coin":"cronos","gatechain-token":"gatetoken","file-coin":"filecoin","staked-ethena":"ethena","o-optimism":"optimism-ethereum","blockstack":"stacks","injective-protocol":"injective","curve":"curve-dao-token","arb-curve":"curve-dao-token","gala-v2":"gala","floki-inu-v2":"floki-inu","luna":"terra-luna","o-synthetix-network-token":"synthetix","kickico":"kick-token","wrapped-nxm":"nxm","nexus-mutual":"nxm","sushi":"sushiswap","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","stasis-euro":"stasis-eurs","zencash":"horizen","hive":"hive-blockchain","swipe":"sxp","bnb-swipe":"sxp","bounce":"bounce-token","zb":"zb-token","noia-network":"syntropy","BTRST":"braintrust","small-love-potion":"smooth-love-potion","funfair":"funtoken","terra-virtua-kolekt":"vanar","dia-data":"dia","uquid_coin":"uquid-coin","rif-token":"rsk-infrastructure-framework","melon":"enzyme","amino":"amino-network","omisego":"omg","aavegotchi-ghst-token":"aavegotchi","smart-bitcoin":"rsk-smart-bitcoin","p-ixt-token":"ix-token","ton-crystal":"everscale","zcoin":"firo","ethos":"voyager-token","synternet-v2":"synternet","chronotech":"chrono-tech","gridplus":"grid","emirex":"emirex-token","machine-xchange-coin":"mxc","p-klima-dao":"klimadao","super-zero":"super-zero-protocol","sun-contract":"suncontract","library-credit":"library-credits","monolith":"tokencard","neutrino-dollar":"neutrino-usd","forceprotocol":"the-force-protocol","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","perl-eco":"perlin","blue-whale-token":"blue-whale-exchange","paccoin":"pac-protocol","lukki":"lukki-operating-token","p-matic-network":"polygon","stone":"stone-token","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
