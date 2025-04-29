<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","gatechain-token":"gatetoken","crypto-com-coin":"cronos","xinfin-network":"xinfin","file-coin":"filecoin","staked-ethena":"ethena","sol-first-digital-usd":"first-digital-usd","o-optimism":"optimism-ethereum","blockstack":"stacks","injective-protocol":"injective","curve":"curve-dao-token","arb-curve":"curve-dao-token","sol-raydium":"raydium","floki-inu-v2":"floki-inu","gala-v2":"gala","mantra-dao":"mantra","luna":"terra-luna","o-synthetix-network-token":"synthetix","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","sushi":"sushiswap","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","zencash":"horizen","stasis-euro":"stasis-eurs","swipe":"sxp","bnb-swipe":"sxp","hive":"hive-blockchain","zb":"zb-token","noia-network":"syntropy","dia-data":"dia","bounce":"bounce-token","small-love-potion":"smooth-love-potion","BTRST":"braintrust","terra-virtua-kolekt":"vanar","funfair":"funtoken","rif-token":"rsk-infrastructure-framework","uquid_coin":"uquid-coin","amino":"amino-network","ton-crystal":"everscale","omisego":"omg","melon":"enzyme","aavegotchi-ghst-token":"aavegotchi","smart-bitcoin":"rsk-smart-bitcoin","p-ixt-token":"ix-token","ethos":"voyager-token","synternet-v2":"synternet","gridplus":"grid","zcoin":"firo","chronotech":"chrono-tech","emirex":"emirex-token","machine-xchange-coin":"mxc","sun-contract":"suncontract","p-klima-dao":"klimadao","super-zero":"super-zero-protocol","paccoin":"pac-protocol","monolith":"tokencard","neutrino-dollar":"neutrino-usd","library-credit":"library-credits","forceprotocol":"the-force-protocol","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","perl-eco":"perlin","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","probit":"probit-token","p-matic-network":"polygon","stone":"stone-token","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
    alt="logo"
    {...rest}
    src="https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_{logo}.png"
  >
    <Svg id="asset-small" w={placeholderSize}></Svg>
  </Picture>
{/key}
