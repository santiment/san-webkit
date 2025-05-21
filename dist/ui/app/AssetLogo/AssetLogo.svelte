<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","gatechain-token":"gatetoken","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","blockstack":"stacks","injective-protocol":"injective","o-optimism":"optimism-ethereum","arb-curve":"curve-dao-token","curve":"curve-dao-token","floki-inu-v2":"floki-inu","sol-raydium":"raydium","gala-v2":"gala","mantra-dao":"mantra","luna":"terra-luna","o-synthetix-network-token":"synthetix","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","sol-launch-coin-on-believe":"launch-coin-on-believe","sushi":"sushiswap","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","zencash":"horizen","stasis-euro":"stasis-eurs","hive":"hive-blockchain","bnb-swipe":"sxp","swipe":"sxp","zb":"zb-token","noia-network":"syntropy","small-love-potion":"smooth-love-potion","bounce":"bounce-token","terra-virtua-kolekt":"vanar","scroll-v2":"scroll","BTRST":"braintrust","dia-data":"dia","rif-token":"rsk-infrastructure-framework","funfair":"funtoken","amino":"amino-network","ton-crystal":"everscale","sol-moonpig":"moonpig","uquid_coin":"uquid-coin","neutrino-dollar":"neutrino-usd","omisego":"omg","smart-bitcoin":"rsk-smart-bitcoin","aavegotchi-ghst-token":"aavegotchi","melon":"enzyme","ethos":"voyager-token","sol-hosico":"hosico","p-ixt-token":"ix-token","gridplus":"grid","zcoin":"firo","synternet-v2":"synternet","chronotech":"chrono-tech","emirex":"emirex-token","sun-contract":"suncontract","super-zero":"super-zero-protocol","machine-xchange-coin":"mxc","monolith":"tokencard","library-credit":"library-credits","p-klima-dao":"klimadao","forceprotocol":"the-force-protocol","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","perl-eco":"perlin","blue-whale-token":"blue-whale-exchange","paccoin":"pac-protocol","lukki":"lukki-operating-token","p-matic-network":"polygon","stone":"stone-token","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
