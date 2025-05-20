<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","gatechain-token":"gatetoken","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","blockstack":"stacks","injective-protocol":"injective","o-optimism":"optimism-ethereum","curve":"curve-dao-token","arb-curve":"curve-dao-token","floki-inu-v2":"floki-inu","sol-raydium":"raydium","gala-v2":"gala","mantra-dao":"mantra","luna":"terra-luna","o-synthetix-network-token":"synthetix","kickico":"kick-token","wrapped-nxm":"nxm","nexus-mutual":"nxm","sol-launch-coin-on-believe":"launch-coin-on-believe","sushi":"sushiswap","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","zencash":"horizen","stasis-euro":"stasis-eurs","hive":"hive-blockchain","swipe":"sxp","bnb-swipe":"sxp","zb":"zb-token","noia-network":"syntropy","small-love-potion":"smooth-love-potion","bounce":"bounce-token","scroll-v2":"scroll","terra-virtua-kolekt":"vanar","BTRST":"braintrust","dia-data":"dia","rif-token":"rsk-infrastructure-framework","funfair":"funtoken","amino":"amino-network","ton-crystal":"everscale","neutrino-dollar":"neutrino-usd","uquid_coin":"uquid-coin","omisego":"omg","aavegotchi-ghst-token":"aavegotchi","smart-bitcoin":"rsk-smart-bitcoin","melon":"enzyme","sol-moonpig":"moonpig","sol-hosico":"hosico","ethos":"voyager-token","p-ixt-token":"ix-token","gridplus":"grid","synternet-v2":"synternet","zcoin":"firo","chronotech":"chrono-tech","emirex":"emirex-token","sun-contract":"suncontract","machine-xchange-coin":"mxc","super-zero":"super-zero-protocol","monolith":"tokencard","library-credit":"library-credits","p-klima-dao":"klimadao","forceprotocol":"the-force-protocol","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","perl-eco":"perlin","blue-whale-token":"blue-whale-exchange","paccoin":"pac-protocol","lukki":"lukki-operating-token","p-matic-network":"polygon","stone":"stone-token","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
