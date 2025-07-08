<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","gatechain-token":"gatetoken","xinfin-network":"xinfin","staked-ethena":"ethena","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","blockstack":"stacks","o-optimism":"optimism-ethereum","floki-inu-v2":"floki-inu","arb-curve":"curve-dao-token","curve":"curve-dao-token","gala-v2":"gala","sol-raydium":"raydium","luna":"terra-luna","mantra-dao":"mantra","o-synthetix-network-token":"synthetix","kickico":"kick-token","wrapped-nxm":"nxm","nexus-mutual":"nxm","sol-theuselesscoin":"theuselesscoin","sushi":"sushiswap","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","stasis-euro":"stasis-eurs","funfair":"funtoken","sol-launch-coin-on-believe":"launch-coin-on-believe","zencash":"horizen","bnb-swipe":"sxp","swipe":"sxp","hive":"hive-blockchain","zb":"zb-token","noia-network":"syntropy","sol-hosico":"hosico","sol-huma-finance":"huma-finance","BTRST":"braintrust","bounce":"bounce-token","rif-token":"rsk-infrastructure-framework","terra-virtua-kolekt":"vanar","scroll-v2":"scroll","small-love-potion":"smooth-love-potion","dia-data":"dia","amino":"amino-network","uquid_coin":"uquid-coin","sol-kokok-the-roach":"kokok-the-roach","sol-soon":"soon","sol-masha":"masha","omisego":"omg","sol-agenda-47":"agenda-47","sol-verse-world":"verse-world","sol-zeta":"zeta","smart-bitcoin":"rsk-smart-bitcoin","melon":"enzyme","sol-labubu-xyz":"labubu-xyz","ton-crystal":"everscale","aavegotchi-ghst-token":"aavegotchi","ethos":"voyager-token","sol-yeti":"yeti","sol-cudis":"cudis","zcoin":"firo","gridplus":"grid","p-ixt-token":"ix-token","synternet-v2":"synternet","sol- tiger-shark":"tiger-shark","chronotech":"chrono-tech","emirex":"emirex-token","machine-xchange-coin":"mxc","sol-moonpig":"moonpig","sun-contract":"suncontract","super-zero":"super-zero-protocol","monolith":"tokencard","neutrino-dollar":"neutrino-usd","p-klima-dao":"klimadao","library-credit":"library-credits","nss":"nss-coin","forceprotocol":"the-force-protocol","xcrypt":"xcrypt-token","internet-node-token":"int-chain","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","paccoin":"pac-protocol","lukki":"lukki-operating-token","p-matic-network":"polygon","stone":"stone-token","probit":"probit-token","sol-loaded-lions":"loaded-lions","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
