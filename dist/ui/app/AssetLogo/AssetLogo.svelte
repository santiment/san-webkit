<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","sol-pump-fun":"pump-fun","file-coin":"filecoin","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","curve":"curve-dao-token","arb-curve":"curve-dao-token","injective-protocol":"injective","floki-inu-v2":"floki-inu","o-optimism":"optimism-ethereum","sol-doublezero":"doublezero","sol-monad":"monad","sol-zebec-network":"zebec-network","luna":"terra-luna","gala-v2":"gala","sol-raydium":"raydium","o-synthetix-network-token":"synthetix","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-meteora":"meteora","zencash":"horizen","sol-yzy":"yzy","sol-loaded-lions":"loaded-lions","mantra-dao":"mantra","sol-soon":"soon","sol-the-white-whale":"the-white-whale","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","sushi":"sushiswap","sol-theuselesscoin":"theuselesscoin","hive":"hive-blockchain","rif-token":"rsk-infrastructure-framework","sol-ore-new":"ore-new","bounce":"bounce-token","sol-huma-finance":"huma-finance","uquid_coin":"uquid-coin","sol-war":"war","small-love-potion":"smooth-love-potion","dia-data":"dia","sol-humidifi":"humidifi","sol-collector-crypt":"collector-crypt","bnb-attestation-service":"bnb-attestation-service","smart-bitcoin":"rsk-smart-bitcoin","BTRST":"braintrust","zcoin":"firo","sol-avici":"avici","funfair":"funtoken","terra-virtua-kolekt":"vanar","swipe":"sxp","bnb-swipe":"sxp","melon":"enzyme","ethos":"voyager-token","sol-zeta":"zeta","sol-nietzschean-penguin":"nietzschean-penguin","sol-graphite-protocol":"graphite-protocol","sol-wojak-sol":"wojak-sol","scroll-v2":"scroll","p-ixt-token":"ix-token","omisego":"omg","ton-crystal":"everscale","sol-mori-coin":"mori-coin","aavegotchi-ghst-token":"aavegotchi","sol-nobody-sausage":"nobody-sausage","sol-agenda-47":"agenda-47","sol-verse-world":"verse-world","sol-dowge":"dowge","machine-xchange-coin":"mxc","sol-mobyscreener":"mobyscreener","sol-cudis":"cudis","chronotech":"chrono-tech","sol-unstable-coin-sol":"unstable-coin-sol","neutrino-dollar":"neutrino-usd","sol-uranus-coin":"uranus-coin","sol-agi-alpha-agent":"agi-alpha-agent","sun-contract":"suncontract","sol-2131kobushide":"2131kobushide","monolith":"tokencard","sol-estatex":"estatex","sol-light":"light","sol-labubu-xyz":"labubu-xyz","sol-moonpig":"moonpig","sol-kokok-the-roach":"kokok-the-roach","p-klima-dao":"klimadao","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","sol-hosico":"hosico","paccoin":"pac-protocol","sol-launch-coin-on-believe":"launch-coin-on-believe","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","perl-eco":"perlin","synternet-v2":"synternet","sol-startupcoin":"startupcoin","sol-hyperpigmentation":"hyperpigmentation","sol-dinosol":"dinosol","sol-yeti":"yeti","super-zero":"super-zero-protocol","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","stasis-euro":"stasis-eurs","yobit":"yobit-token","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
