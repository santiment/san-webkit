<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","sol-pump-fun":"pump-fun","file-coin":"filecoin","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","curve":"curve-dao-token","arb-curve":"curve-dao-token","injective-protocol":"injective","o-optimism":"optimism-ethereum","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","sol-monad":"monad","sol-zebec-network":"zebec-network","luna":"terra-luna","gala-v2":"gala","sol-raydium":"raydium","sol-meteora":"meteora","o-synthetix-network-token":"synthetix","zencash":"horizen","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-yzy":"yzy","sol-loaded-lions":"loaded-lions","mantra-dao":"mantra","sol-soon":"soon","arb-sushi":"sushiswap","sushi":"sushiswap","bnb-sushi":"bsc-sushi","sol-the-white-whale":"the-white-whale","sol-theuselesscoin":"theuselesscoin","hive":"hive-blockchain","sol-huma-finance":"huma-finance","sol-ore-new":"ore-new","rif-token":"rsk-infrastructure-framework","sol-war":"war","bounce":"bounce-token","uquid_coin":"uquid-coin","small-love-potion":"smooth-love-potion","dia-data":"dia","sol-humidifi":"humidifi","bnb-swipe":"sxp","swipe":"sxp","sol-collector-crypt":"collector-crypt","BTRST":"braintrust","bnb-attestation-service":"bnb-attestation-service","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","funfair":"funtoken","sol-avici":"avici","terra-virtua-kolekt":"vanar","melon":"enzyme","ethos":"voyager-token","sol-zeta":"zeta","sol-graphite-protocol":"graphite-protocol","scroll-v2":"scroll","ton-crystal":"everscale","p-ixt-token":"ix-token","omisego":"omg","sol-nietzschean-penguin":"nietzschean-penguin","sol-wojak-sol":"wojak-sol","sol-mori-coin":"mori-coin","aavegotchi-ghst-token":"aavegotchi","sol-nobody-sausage":"nobody-sausage","sol-agenda-47":"agenda-47","sol-verse-world":"verse-world","sol-dowge":"dowge","machine-xchange-coin":"mxc","sol-cudis":"cudis","sol-mobyscreener":"mobyscreener","chronotech":"chrono-tech","sol-unstable-coin-sol":"unstable-coin-sol","sol-2131kobushide":"2131kobushide","neutrino-dollar":"neutrino-usd","sol-agi-alpha-agent":"agi-alpha-agent","sun-contract":"suncontract","monolith":"tokencard","sol-uranus-coin":"uranus-coin","sol-estatex":"estatex","sol-light":"light","sol-labubu-xyz":"labubu-xyz","sol-moonpig":"moonpig","sol-kokok-the-roach":"kokok-the-roach","p-klima-dao":"klimadao","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","paccoin":"pac-protocol","sol-hosico":"hosico","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","perl-eco":"perlin","sol-startupcoin":"startupcoin","sol-hyperpigmentation":"hyperpigmentation","synternet-v2":"synternet","sol-dinosol":"dinosol","sol-yeti":"yeti","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","stasis-euro":"stasis-eurs","yobit":"yobit-token","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
