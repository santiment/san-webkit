<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","p-matic-network":"polygon","xinfin-network":"xinfin","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","blockstack":"stacks","o-optimism":"optimism-ethereum","curve":"curve-dao-token","arb-curve":"curve-dao-token","floki-inu-v2":"floki-inu","gala-v2":"gala","sol-raydium":"raydium","luna":"terra-luna","sol-zebec-network":"zebec-network","funfair":"funtoken","mantra-dao":"mantra","o-synthetix-network-token":"synthetix","kickico":"kick-token","sol-theuselesscoin":"theuselesscoin","nexus-mutual":"nxm","wrapped-nxm":"nxm","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-launch-coin-on-believe":"launch-coin-on-believe","stasis-euro":"stasis-eurs","zencash":"horizen","swipe":"sxp","bnb-swipe":"sxp","hive":"hive-blockchain","zb":"zb-token","noia-network":"syntropy","bounce":"bounce-token","terra-virtua-kolekt":"vanar","sol-huma-finance":"huma-finance","scroll-v2":"scroll","rif-token":"rsk-infrastructure-framework","BTRST":"braintrust","small-love-potion":"smooth-love-potion","dia-data":"dia","sol-hosico":"hosico","amino":"amino-network","uquid_coin":"uquid-coin","sol-masha":"masha","sol-kokok-the-roach":"kokok-the-roach","sol-verse-world":"verse-world","sol-soon":"soon","omisego":"omg","smart-bitcoin":"rsk-smart-bitcoin","sol-agi-alpha-agent":"agi-alpha-agent","aavegotchi-ghst-token":"aavegotchi","melon":"enzyme","ton-crystal":"everscale","sol-zeta":"zeta","sol-agenda-47":"agenda-47","sol-hyperpigmentation":"hyperpigmentation","ethos":"voyager-token","sol-cudis":"cudis","zcoin":"firo","sol-yeti":"yeti","gridplus":"grid","p-ixt-token":"ix-token","sol-labubu-xyz":"labubu-xyz","sol-unstable-coin-sol":"unstable-coin-sol","synternet-v2":"synternet","chronotech":"chrono-tech","emirex":"emirex-token","sol-tiger-shark":"tiger-shark","machine-xchange-coin":"mxc","paccoin":"pac-protocol","sun-contract":"suncontract","sol-moonpig":"moonpig","monolith":"tokencard","super-zero":"super-zero-protocol","neutrino-dollar":"neutrino-usd","p-klima-dao":"klimadao","library-credit":"library-credits","nss":"nss-coin","xcrypt":"xcrypt-token","forceprotocol":"the-force-protocol","internet-node-token":"int-chain","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","lukki":"lukki-operating-token","sol-loaded-lions":"loaded-lions","stone":"stone-token","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
