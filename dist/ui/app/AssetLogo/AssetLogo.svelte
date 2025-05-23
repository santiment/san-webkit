<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","gatechain-token":"gatetoken","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","blockstack":"stacks","injective-protocol":"injective","o-optimism":"optimism-ethereum","arb-curve":"curve-dao-token","curve":"curve-dao-token","floki-inu-v2":"floki-inu","sol-raydium":"raydium","gala-v2":"gala","mantra-dao":"mantra","luna":"terra-luna","o-synthetix-network-token":"synthetix","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","bnb-sushi":"bsc-sushi","sushi":"sushiswap","arb-sushi":"sushiswap","sol-launch-coin-on-believe":"launch-coin-on-believe","zencash":"horizen","stasis-euro":"stasis-eurs","hive":"hive-blockchain","swipe":"sxp","bnb-swipe":"sxp","zb":"zb-token","noia-network":"syntropy","sol-moonpig":"moonpig","terra-virtua-kolekt":"vanar","small-love-potion":"smooth-love-potion","bounce":"bounce-token","scroll-v2":"scroll","BTRST":"braintrust","dia-data":"dia","rif-token":"rsk-infrastructure-framework","funfair":"funtoken","amino":"amino-network","ton-crystal":"everscale","neutrino-dollar":"neutrino-usd","uquid_coin":"uquid-coin","omisego":"omg","smart-bitcoin":"rsk-smart-bitcoin","aavegotchi-ghst-token":"aavegotchi","melon":"enzyme","sol-agenda-47":"agenda-47","ethos":"voyager-token","sol-hosico":"hosico","p-ixt-token":"ix-token","gridplus":"grid","synternet-v2":"synternet","zcoin":"firo","chronotech":"chrono-tech","emirex":"emirex-token","sun-contract":"suncontract","super-zero":"super-zero-protocol","machine-xchange-coin":"mxc","monolith":"tokencard","p-klima-dao":"klimadao","library-credit":"library-credits","forceprotocol":"the-force-protocol","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","perl-eco":"perlin","blue-whale-token":"blue-whale-exchange","paccoin":"pac-protocol","lukki":"lukki-operating-token","p-matic-network":"polygon","stone":"stone-token","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
