<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","sol-pump-fun":"pump-fun","file-coin":"filecoin","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","o-optimism":"optimism-ethereum","curve":"curve-dao-token","arb-curve":"curve-dao-token","injective-protocol":"injective","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","sol-monad":"monad","sol-zebec-network":"zebec-network","gala-v2":"gala","luna":"terra-luna","sol-raydium":"raydium","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-meteora":"meteora","zencash":"horizen","o-synthetix-network-token":"synthetix","sol-yzy":"yzy","sol-loaded-lions":"loaded-lions","sol-the-white-whale":"the-white-whale","sol-soon":"soon","mantra-dao":"mantra","bnb-sushi":"bsc-sushi","sushi":"sushiswap","arb-sushi":"sushiswap","sol-theuselesscoin":"theuselesscoin","sol-huma-finance":"huma-finance","hive":"hive-blockchain","sol-ore-new":"ore-new","bounce":"bounce-token","rif-token":"rsk-infrastructure-framework","uquid_coin":"uquid-coin","small-love-potion":"smooth-love-potion","sol-war":"war","dia-data":"dia","sol-humidifi":"humidifi","sol-collector-crypt":"collector-crypt","BTRST":"braintrust","sol-nietzschean-penguin":"nietzschean-penguin","zcoin":"firo","sol-avici":"avici","smart-bitcoin":"rsk-smart-bitcoin","swipe":"sxp","bnb-swipe":"sxp","funfair":"funtoken","terra-virtua-kolekt":"vanar","bnb-attestation-service":"bnb-attestation-service","sol-zeta":"zeta","melon":"enzyme","ethos":"voyager-token","sol-graphite-protocol":"graphite-protocol","sol-wojak-sol":"wojak-sol","scroll-v2":"scroll","omisego":"omg","p-ixt-token":"ix-token","sol-mori-coin":"mori-coin","aavegotchi-ghst-token":"aavegotchi","sol-nobody-sausage":"nobody-sausage","ton-crystal":"everscale","sol-agenda-47":"agenda-47","sol-verse-world":"verse-world","sol-dowge":"dowge","sol-mobyscreener":"mobyscreener","machine-xchange-coin":"mxc","sol-cudis":"cudis","sol-unstable-coin-sol":"unstable-coin-sol","chronotech":"chrono-tech","sol-labubu-xyz":"labubu-xyz","sol-uranus-coin":"uranus-coin","sun-contract":"suncontract","monolith":"tokencard","sol-agi-alpha-agent":"agi-alpha-agent","sol-2131kobushide":"2131kobushide","sol-estatex":"estatex","neutrino-dollar":"neutrino-usd","sol-light":"light","sol-moonpig":"moonpig","sol-hosico":"hosico","sol-kokok-the-roach":"kokok-the-roach","p-klima-dao":"klimadao","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","synternet-v2":"synternet","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","paccoin":"pac-protocol","sol-launch-coin-on-believe":"launch-coin-on-believe","perl-eco":"perlin","sol-startupcoin":"startupcoin","sol-hyperpigmentation":"hyperpigmentation","sol-dinosol":"dinosol","sol-yeti":"yeti","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","stasis-euro":"stasis-eurs","yobit":"yobit-token","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
