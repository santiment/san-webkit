<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","gatechain-token":"gatetoken","crypto-com-coin":"cronos","file-coin":"filecoin","staked-ethena":"ethena","o-optimism":"optimism-ethereum","blockstack":"stacks","curve":"curve-dao-token","arb-curve":"curve-dao-token","injective-protocol":"injective","gala-v2":"gala","mantra-dao":"mantra","floki-inu-v2":"floki-inu","luna":"terra-luna","o-synthetix-network-token":"synthetix","kickico":"kick-token","wrapped-nxm":"nxm","nexus-mutual":"nxm","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","sushi":"sushiswap","stasis-euro":"stasis-eurs","zencash":"horizen","bnb-swipe":"sxp","swipe":"sxp","hive":"hive-blockchain","zb":"zb-token","funfair":"funtoken","noia-network":"syntropy","bounce":"bounce-token","BTRST":"braintrust","small-love-potion":"smooth-love-potion","terra-virtua-kolekt":"vanar","dia-data":"dia","rif-token":"rsk-infrastructure-framework","uquid_coin":"uquid-coin","amino":"amino-network","omisego":"omg","ton-crystal":"everscale","melon":"enzyme","aavegotchi-ghst-token":"aavegotchi","smart-bitcoin":"rsk-smart-bitcoin","p-ixt-token":"ix-token","ethos":"voyager-token","synternet-v2":"synternet","gridplus":"grid","chronotech":"chrono-tech","zcoin":"firo","emirex":"emirex-token","machine-xchange-coin":"mxc","p-klima-dao":"klimadao","sun-contract":"suncontract","super-zero":"super-zero-protocol","monolith":"tokencard","neutrino-dollar":"neutrino-usd","library-credit":"library-credits","forceprotocol":"the-force-protocol","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","paccoin":"pac-protocol","perl-eco":"perlin","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","probit":"probit-token","p-matic-network":"polygon","stone":"stone-token","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
