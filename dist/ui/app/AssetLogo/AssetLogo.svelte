<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","gatechain-token":"gatetoken","staked-ethena":"ethena","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","o-optimism":"optimism-ethereum","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","floki-inu-v2":"floki-inu","gala-v2":"gala","sol-raydium":"raydium","luna":"terra-luna","mantra-dao":"mantra","o-synthetix-network-token":"synthetix","kickico":"kick-token","wrapped-nxm":"nxm","nexus-mutual":"nxm","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","sushi":"sushiswap","sol-launch-coin-on-believe":"launch-coin-on-believe","zencash":"horizen","stasis-euro":"stasis-eurs","bnb-swipe":"sxp","swipe":"sxp","hive":"hive-blockchain","zb":"zb-token","noia-network":"syntropy","sol-huma-finance":"huma-finance","BTRST":"braintrust","terra-virtua-kolekt":"vanar","bounce":"bounce-token","small-love-potion":"smooth-love-potion","rif-token":"rsk-infrastructure-framework","scroll-v2":"scroll","dia-data":"dia","neutrino-dollar":"neutrino-usd","amino":"amino-network","funfair":"funtoken","uquid_coin":"uquid-coin","omisego":"omg","ton-crystal":"everscale","sol-hosico":"hosico","smart-bitcoin":"rsk-smart-bitcoin","melon":"enzyme","sol-agenda-47":"agenda-47","aavegotchi-ghst-token":"aavegotchi","sol-moonpig":"moonpig","sol-verse-world":"verse-world","ethos":"voyager-token","gridplus":"grid","zcoin":"firo","p-ixt-token":"ix-token","synternet-v2":"synternet","chronotech":"chrono-tech","machine-xchange-coin":"mxc","emirex":"emirex-token","sun-contract":"suncontract","super-zero":"super-zero-protocol","monolith":"tokencard","p-klima-dao":"klimadao","library-credit":"library-credits","forceprotocol":"the-force-protocol","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","paccoin":"pac-protocol","lukki":"lukki-operating-token","p-matic-network":"polygon","probit":"probit-token","stone":"stone-token","reddcoin":"redd","exmr":"exmr-fdn","yobit":"yobit-token","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
