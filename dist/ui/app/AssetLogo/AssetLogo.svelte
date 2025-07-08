<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","gatechain-token":"gatetoken","staked-ethena":"ethena","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","blockstack":"stacks","o-optimism":"optimism-ethereum","floki-inu-v2":"floki-inu","arb-curve":"curve-dao-token","curve":"curve-dao-token","gala-v2":"gala","sol-raydium":"raydium","luna":"terra-luna","mantra-dao":"mantra","o-synthetix-network-token":"synthetix","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","sol-theuselesscoin":"theuselesscoin","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","stasis-euro":"stasis-eurs","sol-launch-coin-on-believe":"launch-coin-on-believe","funfair":"funtoken","zencash":"horizen","swipe":"sxp","bnb-swipe":"sxp","hive":"hive-blockchain","zb":"zb-token","noia-network":"syntropy","bounce":"bounce-token","BTRST":"braintrust","sol-hosico":"hosico","sol-huma-finance":"huma-finance","rif-token":"rsk-infrastructure-framework","scroll-v2":"scroll","terra-virtua-kolekt":"vanar","small-love-potion":"smooth-love-potion","dia-data":"dia","amino":"amino-network","sol-kokok-the-roach":"kokok-the-roach","uquid_coin":"uquid-coin","sol-soon":"soon","sol-masha":"masha","omisego":"omg","sol-verse-world":"verse-world","sol-agenda-47":"agenda-47","smart-bitcoin":"rsk-smart-bitcoin","sol-zeta":"zeta","melon":"enzyme","sol-labubu-xyz":"labubu-xyz","ton-crystal":"everscale","aavegotchi-ghst-token":"aavegotchi","ethos":"voyager-token","sol-yeti":"yeti","sol-cudis":"cudis","zcoin":"firo","gridplus":"grid","p-ixt-token":"ix-token","synternet-v2":"synternet","sol- tiger-shark":"tiger-shark","chronotech":"chrono-tech","emirex":"emirex-token","machine-xchange-coin":"mxc","sol-moonpig":"moonpig","sun-contract":"suncontract","monolith":"tokencard","super-zero":"super-zero-protocol","neutrino-dollar":"neutrino-usd","p-klima-dao":"klimadao","library-credit":"library-credits","nss":"nss-coin","forceprotocol":"the-force-protocol","xcrypt":"xcrypt-token","internet-node-token":"int-chain","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","paccoin":"pac-protocol","lukki":"lukki-operating-token","p-matic-network":"polygon","stone":"stone-token","probit":"probit-token","sol-loaded-lions":"loaded-lions","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
