<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","gatechain-token":"gatetoken","xinfin-network":"xinfin","staked-ethena":"ethena","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","o-optimism":"optimism-ethereum","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","floki-inu-v2":"floki-inu","gala-v2":"gala","sol-raydium":"raydium","luna":"terra-luna","mantra-dao":"mantra","o-synthetix-network-token":"synthetix","kickico":"kick-token","sol-loaded-lions":"loaded-lions","wrapped-nxm":"nxm","nexus-mutual":"nxm","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","stasis-euro":"stasis-eurs","zencash":"horizen","sol-launch-coin-on-believe":"launch-coin-on-believe","swipe":"sxp","bnb-swipe":"sxp","hive":"hive-blockchain","zb":"zb-token","noia-network":"syntropy","sol-theuselesscoin":"theuselesscoin","sol-huma-finance":"huma-finance","bounce":"bounce-token","BTRST":"braintrust","small-love-potion":"smooth-love-potion","rif-token":"rsk-infrastructure-framework","terra-virtua-kolekt":"vanar","funfair":"funtoken","scroll-v2":"scroll","dia-data":"dia","amino":"amino-network","uquid_coin":"uquid-coin","omisego":"omg","sol-agenda-47":"agenda-47","smart-bitcoin":"rsk-smart-bitcoin","melon":"enzyme","ton-crystal":"everscale","aavegotchi-ghst-token":"aavegotchi","sol-hosico":"hosico","sol-verse-world":"verse-world","ethos":"voyager-token","zcoin":"firo","gridplus":"grid","sol-moonpig":"moonpig","p-ixt-token":"ix-token","chronotech":"chrono-tech","synternet-v2":"synternet","emirex":"emirex-token","machine-xchange-coin":"mxc","sun-contract":"suncontract","super-zero":"super-zero-protocol","monolith":"tokencard","neutrino-dollar":"neutrino-usd","p-klima-dao":"klimadao","forceprotocol":"the-force-protocol","library-credit":"library-credits","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","perl-eco":"perlin","blue-whale-token":"blue-whale-exchange","paccoin":"pac-protocol","lukki":"lukki-operating-token","p-matic-network":"polygon","stone":"stone-token","probit":"probit-token","reddcoin":"redd","exmr":"exmr-fdn","yobit":"yobit-token","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
