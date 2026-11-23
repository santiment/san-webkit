<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","toncoin":"gram","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","sol-pump-fun":"pump-fun","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","injective-protocol":"injective","blockstack":"stacks","file-coin":"filecoin","sol-raydium":"raydium","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-first-digital-usd":"first-digital-usd","luna":"terra-luna","sol-zebec-network":"zebec-network","sol-soon":"soon","o-optimism":"optimism-ethereum","floki-inu-v2":"floki-inu","sol-monad":"monad","sol-meteora":"meteora","eigenlayer":"eigencloud","sol-theuselesscoin":"theuselesscoin","zencash":"horizen","gala-v2":"gala","sol-backpack-exchange":"backpack-exchange","sol-yzy":"yzy","bnb-cross-protocol":"cross","sol-collector-crypt":"collector-crypt","sol-doublezero":"doublezero","o-synthetix-network-token":"synthetix","rif-token":"rsk-infrastructure-framework","sol-solana-mobile-seeker":"solana-mobile-seeker","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-ore-new":"ore-new","sol-huma-finance":"huma-finance","bnb-attestation-service":"bnb-attestation-service","story-protocol":"data-network","sol-stonk-fun":"stonk-fun","uquid_coin":"uquid-coin","sol-loaded-lions":"loaded-lions","funfair":"funtoken","hive":"hive-blockchain","sol-anonymous-cat":"anonymous-cat","bounce":"bounce-token","sol-the-black-bull":"the-black-bull","small-love-potion":"smooth-love-potion","zcoin":"firo","dia-data":"dia","smart-bitcoin":"rsk-smart-bitcoin","quantixai":"quantix-finance","ethos":"voyager-token","xion":"verona","sol-graphite-protocol":"graphite-protocol","sol-humidifi":"humidifi","omisego":"omg","melon":"enzyme","scroll-v2":"scroll","sol-dowge":"dowge","sol-avici":"avici","aavegotchi-ghst-token":"aavegotchi","argentinefootballassociationfantoken":"argentine-football-association-fan-token","sol-mori-coin":"mori-coin","sol-unstable-coin-sol":"unstable-coin-sol","sun-contract":"suncontract","monolith":"tokencard","sol-verse-world":"verse-world","sol-mobyscreener":"mobyscreener","terra-virtua-kolekt":"vanar","forceprotocol":"the-force-protocol","sol-agenda-47":"agenda-47","neutrino-dollar":"neutrino-usd","ton-crystal":"everscale","sol-the-white-whale":"the-white-whale","sol-hosico":"hosico","sol-war":"war","sol-uranus-coin":"uranus-coin","sol-nietzschean-penguin":"nietzschean-penguin","sol-make-aliens-great-again":"make-aliens-great-again","sol-nobody-sausage":"nobody-sausage","sol-labubu-xyz":"labubu-xyz","sol-zeta":"zeta","sol-estatex":"estatex","epns":"push","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-moonpig":"moonpig","sol-kokok-the-roach":"kokok-the-roach","perl-eco":"perlin","sol-agi-alpha-agent":"agi-alpha-agent","sol-lolonsol":"lolonsol","shroom-finance":"niftyx-protocol","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-cudis":"cudis","chronotech":"chrono-tech","sol-startupcoin":"startupcoin","p-ixt-token":"ix-token","sol-hyperpigmentation":"hyperpigmentation","sol-yeti":"yeti","sol-2131kobushide":"2131kobushide","sol-dinosol":"dinosol","p-klima-dao":"klimadao","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","sol-bullish-degen":"bullish-degen","reddcoin":"redd","stasis-euro":"stasis-eurs","mantra-dao":"mantra","yobit":"yobit-token","bnb-swipe":"sxp","swipe":"sxp"} as Record<string, undefined | string> // NOTE: Appending list during build
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
