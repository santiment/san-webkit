<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","gatechain-token":"gatetoken","xinfin-network":"xinfin","staked-ethena":"ethena","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","blockstack":"stacks","o-optimism":"optimism-ethereum","curve":"curve-dao-token","arb-curve":"curve-dao-token","floki-inu-v2":"floki-inu","gala-v2":"gala","sol-raydium":"raydium","luna":"terra-luna","mantra-dao":"mantra","o-synthetix-network-token":"synthetix","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","sushi":"sushiswap","zencash":"horizen","sol-launch-coin-on-believe":"launch-coin-on-believe","stasis-euro":"stasis-eurs","hive":"hive-blockchain","bnb-swipe":"sxp","swipe":"sxp","zb":"zb-token","noia-network":"syntropy","sol-huma-finance":"huma-finance","terra-virtua-kolekt":"vanar","bounce":"bounce-token","BTRST":"braintrust","small-love-potion":"smooth-love-potion","scroll-v2":"scroll","rif-token":"rsk-infrastructure-framework","dia-data":"dia","amino":"amino-network","funfair":"funtoken","sol-moonpig":"moonpig","omisego":"omg","neutrino-dollar":"neutrino-usd","uquid_coin":"uquid-coin","smart-bitcoin":"rsk-smart-bitcoin","melon":"enzyme","aavegotchi-ghst-token":"aavegotchi","ton-crystal":"everscale","sol-agenda-47":"agenda-47","ethos":"voyager-token","gridplus":"grid","p-ixt-token":"ix-token","synternet-v2":"synternet","zcoin":"firo","sol-hosico":"hosico","chronotech":"chrono-tech","machine-xchange-coin":"mxc","emirex":"emirex-token","sun-contract":"suncontract","super-zero":"super-zero-protocol","monolith":"tokencard","p-klima-dao":"klimadao","forceprotocol":"the-force-protocol","library-credit":"library-credits","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","perl-eco":"perlin","blue-whale-token":"blue-whale-exchange","paccoin":"pac-protocol","lukki":"lukki-operating-token","p-matic-network":"polygon","stone":"stone-token","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
