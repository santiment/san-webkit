<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","gatechain-token":"gatetoken","crypto-com-coin":"cronos","xinfin-network":"xinfin","file-coin":"filecoin","staked-ethena":"ethena","sol-first-digital-usd":"first-digital-usd","blockstack":"stacks","o-optimism":"optimism-ethereum","injective-protocol":"injective","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-raydium":"raydium","floki-inu-v2":"floki-inu","gala-v2":"gala","mantra-dao":"mantra","luna":"terra-luna","o-synthetix-network-token":"synthetix","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","sushi":"sushiswap","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","stasis-euro":"stasis-eurs","zencash":"horizen","bnb-swipe":"sxp","swipe":"sxp","hive":"hive-blockchain","zb":"zb-token","noia-network":"syntropy","bounce":"bounce-token","BTRST":"braintrust","small-love-potion":"smooth-love-potion","dia-data":"dia","terra-virtua-kolekt":"vanar","funfair":"funtoken","rif-token":"rsk-infrastructure-framework","ton-crystal":"everscale","amino":"amino-network","uquid_coin":"uquid-coin","omisego":"omg","melon":"enzyme","smart-bitcoin":"rsk-smart-bitcoin","aavegotchi-ghst-token":"aavegotchi","ethos":"voyager-token","p-ixt-token":"ix-token","synternet-v2":"synternet","gridplus":"grid","zcoin":"firo","chronotech":"chrono-tech","emirex":"emirex-token","machine-xchange-coin":"mxc","sun-contract":"suncontract","super-zero":"super-zero-protocol","p-klima-dao":"klimadao","monolith":"tokencard","neutrino-dollar":"neutrino-usd","library-credit":"library-credits","forceprotocol":"the-force-protocol","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","paccoin":"pac-protocol","lukki":"lukki-operating-token","p-matic-network":"polygon","stone":"stone-token","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
