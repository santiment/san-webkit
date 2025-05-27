<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","gatechain-token":"gatetoken","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","blockstack":"stacks","o-optimism":"optimism-ethereum","arb-curve":"curve-dao-token","curve":"curve-dao-token","floki-inu-v2":"floki-inu","sol-raydium":"raydium","gala-v2":"gala","mantra-dao":"mantra","luna":"terra-luna","o-synthetix-network-token":"synthetix","kickico":"kick-token","wrapped-nxm":"nxm","nexus-mutual":"nxm","bnb-sushi":"bsc-sushi","sushi":"sushiswap","arb-sushi":"sushiswap","sol-launch-coin-on-believe":"launch-coin-on-believe","zencash":"horizen","stasis-euro":"stasis-eurs","hive":"hive-blockchain","swipe":"sxp","bnb-swipe":"sxp","zb":"zb-token","noia-network":"syntropy","terra-virtua-kolekt":"vanar","bounce":"bounce-token","small-love-potion":"smooth-love-potion","BTRST":"braintrust","sol-moonpig":"moonpig","scroll-v2":"scroll","dia-data":"dia","rif-token":"rsk-infrastructure-framework","amino":"amino-network","funfair":"funtoken","ton-crystal":"everscale","uquid_coin":"uquid-coin","neutrino-dollar":"neutrino-usd","omisego":"omg","smart-bitcoin":"rsk-smart-bitcoin","melon":"enzyme","aavegotchi-ghst-token":"aavegotchi","sol-hosico":"hosico","ethos":"voyager-token","sol-agenda-47":"agenda-47","p-ixt-token":"ix-token","gridplus":"grid","zcoin":"firo","synternet-v2":"synternet","chronotech":"chrono-tech","emirex":"emirex-token","sun-contract":"suncontract","super-zero":"super-zero-protocol","machine-xchange-coin":"mxc","monolith":"tokencard","p-klima-dao":"klimadao","library-credit":"library-credits","forceprotocol":"the-force-protocol","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","perl-eco":"perlin","blue-whale-token":"blue-whale-exchange","paccoin":"pac-protocol","lukki":"lukki-operating-token","p-matic-network":"polygon","stone":"stone-token","yobit":"yobit-token","probit":"probit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
