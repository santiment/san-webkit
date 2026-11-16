<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","toncoin":"gram","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","sol-pump-fun":"pump-fun","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","injective-protocol":"injective","file-coin":"filecoin","blockstack":"stacks","sol-raydium":"raydium","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-first-digital-usd":"first-digital-usd","luna":"terra-luna","o-optimism":"optimism-ethereum","sol-monad":"monad","floki-inu-v2":"floki-inu","sol-zebec-network":"zebec-network","sol-meteora":"meteora","sol-soon":"soon","eigenlayer":"eigencloud","sol-theuselesscoin":"theuselesscoin","zencash":"horizen","gala-v2":"gala","sol-backpack-exchange":"backpack-exchange","sol-yzy":"yzy","bnb-cross-protocol":"cross","sol-collector-crypt":"collector-crypt","sol-doublezero":"doublezero","sol-solana-mobile-seeker":"solana-mobile-seeker","o-synthetix-network-token":"synthetix","rif-token":"rsk-infrastructure-framework","sol-ore-new":"ore-new","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-stonk-fun":"stonk-fun","story-protocol":"data-network","bnb-attestation-service":"bnb-attestation-service","sol-loaded-lions":"loaded-lions","uquid_coin":"uquid-coin","sol-huma-finance":"huma-finance","hive":"hive-blockchain","sol-the-black-bull":"the-black-bull","funfair":"funtoken","sol-anonymous-cat":"anonymous-cat","bounce":"bounce-token","small-love-potion":"smooth-love-potion","dia-data":"dia","zcoin":"firo","smart-bitcoin":"rsk-smart-bitcoin","sol-graphite-protocol":"graphite-protocol","ethos":"voyager-token","xion":"verona","sol-humidifi":"humidifi","quantixai":"quantix-finance","omisego":"omg","melon":"enzyme","scroll-v2":"scroll","sol-dowge":"dowge","sol-avici":"avici","aavegotchi-ghst-token":"aavegotchi","sol-mori-coin":"mori-coin","sol-unstable-coin-sol":"unstable-coin-sol","sun-contract":"suncontract","ton-crystal":"everscale","monolith":"tokencard","sol-verse-world":"verse-world","terra-virtua-kolekt":"vanar","sol-mobyscreener":"mobyscreener","forceprotocol":"the-force-protocol","argentinefootballassociationfantoken":"argentine-football-association-fan-token","sol-hosico":"hosico","sol-agenda-47":"agenda-47","sol-the-white-whale":"the-white-whale","sol-war":"war","neutrino-dollar":"neutrino-usd","sol-nietzschean-penguin":"nietzschean-penguin","sol-uranus-coin":"uranus-coin","sol-make-aliens-great-again":"make-aliens-great-again","sol-labubu-xyz":"labubu-xyz","sol-nobody-sausage":"nobody-sausage","sol-zeta":"zeta","sol-estatex":"estatex","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-moonpig":"moonpig","sol-kokok-the-roach":"kokok-the-roach","sol-cudis":"cudis","epns":"push","perl-eco":"perlin","sol-lolonsol":"lolonsol","sol-agi-alpha-agent":"agi-alpha-agent","shroom-finance":"niftyx-protocol","chronotech":"chrono-tech","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-startupcoin":"startupcoin","p-ixt-token":"ix-token","sol-hyperpigmentation":"hyperpigmentation","sol-2131kobushide":"2131kobushide","sol-dinosol":"dinosol","sol-yeti":"yeti","p-klima-dao":"klimadao","sol-umbra":"umbra","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","reddcoin":"redd","mantra-dao":"mantra","bnb-swipe":"sxp","swipe":"sxp","yobit":"yobit-token","stasis-euro":"stasis-eurs"} as Record<string, undefined | string> // NOTE: Appending list during build
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
