<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","gatechain-token":"gatetoken","xinfin-network":"xinfin","staked-ethena":"ethena","file-coin":"filecoin","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","blockstack":"stacks","o-optimism":"optimism-ethereum","floki-inu-v2":"floki-inu","curve":"curve-dao-token","arb-curve":"curve-dao-token","gala-v2":"gala","sol-raydium":"raydium","luna":"terra-luna","mantra-dao":"mantra","o-synthetix-network-token":"synthetix","kickico":"kick-token","sol-theuselesscoin":"theuselesscoin","nexus-mutual":"nxm","wrapped-nxm":"nxm","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","stasis-euro":"stasis-eurs","sol-launch-coin-on-believe":"launch-coin-on-believe","zencash":"horizen","swipe":"sxp","bnb-swipe":"sxp","funfair":"funtoken","hive":"hive-blockchain","zb":"zb-token","noia-network":"syntropy","sol-huma-finance":"huma-finance","BTRST":"braintrust","bounce":"bounce-token","rif-token":"rsk-infrastructure-framework","terra-virtua-kolekt":"vanar","scroll-v2":"scroll","small-love-potion":"smooth-love-potion","dia-data":"dia","sol-soon":"soon","amino":"amino-network","sol-hosico":"hosico","sol-labubu-xyz":"labubu-xyz","uquid_coin":"uquid-coin","sol-zeta":"zeta","sol-kokok-the-roach":"kokok-the-roach","omisego":"omg","sol-masha":"masha","smart-bitcoin":"rsk-smart-bitcoin","ton-crystal":"everscale","sol-verse-world":"verse-world","melon":"enzyme","sol-agenda-47":"agenda-47","aavegotchi-ghst-token":"aavegotchi","sol-yeti":"yeti","ethos":"voyager-token","sol-cudis":"cudis","sol- tiger-shark":"tiger-shark","zcoin":"firo","gridplus":"grid","p-ixt-token":"ix-token","synternet-v2":"synternet","chronotech":"chrono-tech","machine-xchange-coin":"mxc","emirex":"emirex-token","sol-moonpig":"moonpig","sun-contract":"suncontract","monolith":"tokencard","super-zero":"super-zero-protocol","neutrino-dollar":"neutrino-usd","p-klima-dao":"klimadao","library-credit":"library-credits","nss":"nss-coin","forceprotocol":"the-force-protocol","xcrypt":"xcrypt-token","internet-node-token":"int-chain","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","blue-whale-token":"blue-whale-exchange","perl-eco":"perlin","paccoin":"pac-protocol","lukki":"lukki-operating-token","p-matic-network":"polygon","stone":"stone-token","sol-loaded-lions":"loaded-lions","probit":"probit-token","yobit":"yobit-token","reddcoin":"redd","exmr":"exmr-fdn","yamv3":"yamv1"} as Record<string, undefined | string> // NOTE: Appending list during build
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
