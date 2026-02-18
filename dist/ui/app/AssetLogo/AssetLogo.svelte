<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","sol-pump-fun":"pump-fun","file-coin":"filecoin","blockstack":"stacks","o-optimism":"optimism-ethereum","sol-first-digital-usd":"first-digital-usd","arb-curve":"curve-dao-token","curve":"curve-dao-token","injective-protocol":"injective","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","sol-monad":"monad","sol-zebec-network":"zebec-network","gala-v2":"gala","luna":"terra-luna","sol-raydium":"raydium","zencash":"horizen","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-meteora":"meteora","o-synthetix-network-token":"synthetix","sol-yzy":"yzy","sol-loaded-lions":"loaded-lions","sol-soon":"soon","mantra-dao":"mantra","sol-the-white-whale":"the-white-whale","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","sushi":"sushiswap","sol-theuselesscoin":"theuselesscoin","sol-huma-finance":"huma-finance","hive":"hive-blockchain","sol-ore-new":"ore-new","bounce":"bounce-token","rif-token":"rsk-infrastructure-framework","sol-war":"war","uquid_coin":"uquid-coin","dia-data":"dia","small-love-potion":"smooth-love-potion","sol-humidifi":"humidifi","BTRST":"braintrust","bnb-attestation-service":"bnb-attestation-service","sol-collector-crypt":"collector-crypt","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","sol-avici":"avici","bnb-swipe":"sxp","swipe":"sxp","funfair":"funtoken","terra-virtua-kolekt":"vanar","melon":"enzyme","ethos":"voyager-token","sol-zeta":"zeta","sol-nietzschean-penguin":"nietzschean-penguin","sol-graphite-protocol":"graphite-protocol","scroll-v2":"scroll","sol-wojak-sol":"wojak-sol","omisego":"omg","p-ixt-token":"ix-token","neutrino-dollar":"neutrino-usd","sol-mori-coin":"mori-coin","aavegotchi-ghst-token":"aavegotchi","sol-nobody-sausage":"nobody-sausage","ton-crystal":"everscale","sol-agenda-47":"agenda-47","sol-verse-world":"verse-world","sol-dowge":"dowge","sol-mobyscreener":"mobyscreener","machine-xchange-coin":"mxc","sol-cudis":"cudis","chronotech":"chrono-tech","sol-unstable-coin-sol":"unstable-coin-sol","sol-uranus-coin":"uranus-coin","sun-contract":"suncontract","monolith":"tokencard","sol-2131kobushide":"2131kobushide","sol-agi-alpha-agent":"agi-alpha-agent","sol-estatex":"estatex","sol-labubu-xyz":"labubu-xyz","sol-light":"light","sol-hosico":"hosico","sol-moonpig":"moonpig","sol-kokok-the-roach":"kokok-the-roach","p-klima-dao":"klimadao","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","paccoin":"pac-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","perl-eco":"perlin","synternet-v2":"synternet","sol-startupcoin":"startupcoin","sol-hyperpigmentation":"hyperpigmentation","sol-dinosol":"dinosol","sol-yeti":"yeti","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","stasis-euro":"stasis-eurs","yobit":"yobit-token","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
