<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","p-matic-network":"polygon","xinfin-network":"xinfin","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","blockstack":"stacks","o-optimism":"optimism-ethereum","arb-curve":"curve-dao-token","curve":"curve-dao-token","floki-inu-v2":"floki-inu","gala-v2":"gala","sol-raydium":"raydium","luna":"terra-luna","sol-zebec-network":"zebec-network","mantra-dao":"mantra","o-synthetix-network-token":"synthetix","funfair":"funtoken","kickico":"kick-token","sol-theuselesscoin":"theuselesscoin","nexus-mutual":"nxm","wrapped-nxm":"nxm","sushi":"sushiswap","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","sol-launch-coin-on-believe":"launch-coin-on-believe","stasis-euro":"stasis-eurs","zencash":"horizen","swipe":"sxp","bnb-swipe":"sxp","zb":"zb-token","hive":"hive-blockchain","noia-network":"syntropy","terra-virtua-kolekt":"vanar","bounce":"bounce-token","scroll-v2":"scroll","sol-huma-finance":"huma-finance","rif-token":"rsk-infrastructure-framework","BTRST":"braintrust","small-love-potion":"smooth-love-potion","dia-data":"dia","amino":"amino-network","uquid_coin":"uquid-coin","sol-hosico":"hosico","sol-masha":"masha","sol-verse-world":"verse-world","sol-soon":"soon","sol-kokok-the-roach":"kokok-the-roach","sol-agi-alpha-agent":"agi-alpha-agent","smart-bitcoin":"rsk-smart-bitcoin","omisego":"omg","aavegotchi-ghst-token":"aavegotchi","melon":"enzyme","ton-crystal":"everscale","sol-agenda-47":"agenda-47","sol-cudis":"cudis","sol-hyperpigmentation":"hyperpigmentation","sol-zeta":"zeta","ethos":"voyager-token","sol-labubu-xyz":"labubu-xyz","zcoin":"firo","sol-yeti":"yeti","gridplus":"grid","p-ixt-token":"ix-token","sol-unstable-coin-sol":"unstable-coin-sol","synternet-v2":"synternet","chronotech":"chrono-tech","emirex":"emirex-token","sol-tiger-shark":"tiger-shark","machine-xchange-coin":"mxc","sol-moonpig":"moonpig","sun-contract":"suncontract","monolith":"tokencard","super-zero":"super-zero-protocol","neutrino-dollar":"neutrino-usd","p-klima-dao":"klimadao","library-credit":"library-credits","nss":"nss-coin","xcrypt":"xcrypt-token","forceprotocol":"the-force-protocol","internet-node-token":"int-chain","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","paccoin":"pac-protocol","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","lukki":"lukki-operating-token","sol-loaded-lions":"loaded-lions","stone":"stone-token","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
