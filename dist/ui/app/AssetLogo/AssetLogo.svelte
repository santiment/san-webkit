<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","toncoin":"gram","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","sol-pump-fun":"pump-fun","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","injective-protocol":"injective","file-coin":"filecoin","blockstack":"stacks","sol-raydium":"raydium","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-first-digital-usd":"first-digital-usd","luna":"terra-luna","sol-zebec-network":"zebec-network","o-optimism":"optimism-ethereum","sol-monad":"monad","floki-inu-v2":"floki-inu","sol-meteora":"meteora","sol-soon":"soon","eigenlayer":"eigencloud","sol-theuselesscoin":"theuselesscoin","zencash":"horizen","gala-v2":"gala","sol-backpack-exchange":"backpack-exchange","sol-yzy":"yzy","bnb-cross-protocol":"cross","sol-collector-crypt":"collector-crypt","sol-doublezero":"doublezero","rif-token":"rsk-infrastructure-framework","o-synthetix-network-token":"synthetix","sol-solana-mobile-seeker":"solana-mobile-seeker","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-ore-new":"ore-new","sol-stonk-fun":"stonk-fun","story-protocol":"data-network","bnb-attestation-service":"bnb-attestation-service","sol-huma-finance":"huma-finance","sol-loaded-lions":"loaded-lions","uquid_coin":"uquid-coin","hive":"hive-blockchain","sol-anonymous-cat":"anonymous-cat","funfair":"funtoken","sol-the-black-bull":"the-black-bull","bounce":"bounce-token","small-love-potion":"smooth-love-potion","zcoin":"firo","dia-data":"dia","smart-bitcoin":"rsk-smart-bitcoin","ethos":"voyager-token","sol-graphite-protocol":"graphite-protocol","xion":"verona","sol-humidifi":"humidifi","omisego":"omg","scroll-v2":"scroll","melon":"enzyme","sol-avici":"avici","sol-dowge":"dowge","aavegotchi-ghst-token":"aavegotchi","sol-mori-coin":"mori-coin","quantixai":"quantix-finance","sun-contract":"suncontract","sol-unstable-coin-sol":"unstable-coin-sol","monolith":"tokencard","sol-verse-world":"verse-world","terra-virtua-kolekt":"vanar","sol-mobyscreener":"mobyscreener","forceprotocol":"the-force-protocol","argentinefootballassociationfantoken":"argentine-football-association-fan-token","sol-hosico":"hosico","ton-crystal":"everscale","sol-agenda-47":"agenda-47","sol-war":"war","sol-the-white-whale":"the-white-whale","neutrino-dollar":"neutrino-usd","sol-nietzschean-penguin":"nietzschean-penguin","sol-uranus-coin":"uranus-coin","sol-make-aliens-great-again":"make-aliens-great-again","sol-labubu-xyz":"labubu-xyz","sol-nobody-sausage":"nobody-sausage","sol-zeta":"zeta","sol-estatex":"estatex","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-moonpig":"moonpig","sol-kokok-the-roach":"kokok-the-roach","epns":"push","perl-eco":"perlin","sol-lolonsol":"lolonsol","sol-agi-alpha-agent":"agi-alpha-agent","sol-cudis":"cudis","shroom-finance":"niftyx-protocol","chronotech":"chrono-tech","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-startupcoin":"startupcoin","p-ixt-token":"ix-token","sol-hyperpigmentation":"hyperpigmentation","sol-2131kobushide":"2131kobushide","sol-dinosol":"dinosol","sol-yeti":"yeti","p-klima-dao":"klimadao","sol-umbra":"umbra","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","reddcoin":"redd","mantra-dao":"mantra","bnb-swipe":"sxp","swipe":"sxp","yobit":"yobit-token","stasis-euro":"stasis-eurs"} as Record<string, undefined | string> // NOTE: Appending list during build
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
