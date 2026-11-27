<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","toncoin":"gram","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","sol-pump-fun":"pump-fun","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","injective-protocol":"injective","blockstack":"stacks","file-coin":"filecoin","sol-raydium":"raydium","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-monad":"monad","sol-first-digital-usd":"first-digital-usd","luna":"terra-luna","sol-zebec-network":"zebec-network","o-optimism":"optimism-ethereum","floki-inu-v2":"floki-inu","sol-soon":"soon","eigenlayer":"eigencloud","sol-meteora":"meteora","sol-theuselesscoin":"theuselesscoin","zencash":"horizen","gala-v2":"gala","sol-backpack-exchange":"backpack-exchange","sol-yzy":"yzy","sol-collector-crypt":"collector-crypt","bnb-cross-protocol":"cross","sol-doublezero":"doublezero","o-synthetix-network-token":"synthetix","sol-solana-mobile-seeker":"solana-mobile-seeker","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","rif-token":"rsk-infrastructure-framework","sol-ore-new":"ore-new","story-protocol":"data-network","bnb-attestation-service":"bnb-attestation-service","uquid_coin":"uquid-coin","sol-stonk-fun":"stonk-fun","sol-loaded-lions":"loaded-lions","sol-huma-finance":"huma-finance","funfair":"funtoken","hive":"hive-blockchain","bounce":"bounce-token","sol-anonymous-cat":"anonymous-cat","small-love-potion":"smooth-love-potion","dia-data":"dia","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","sol-the-black-bull":"the-black-bull","ethos":"voyager-token","sol-graphite-protocol":"graphite-protocol","xion":"verona","sol-humidifi":"humidifi","omisego":"omg","melon":"enzyme","scroll-v2":"scroll","sol-avici":"avici","sol-dowge":"dowge","quantixai":"quantix-finance","aavegotchi-ghst-token":"aavegotchi","sol-mori-coin":"mori-coin","argentinefootballassociationfantoken":"argentine-football-association-fan-token","sun-contract":"suncontract","sol-unstable-coin-sol":"unstable-coin-sol","monolith":"tokencard","sol-verse-world":"verse-world","sol-mobyscreener":"mobyscreener","terra-virtua-kolekt":"vanar","neutrino-dollar":"neutrino-usd","sol-agenda-47":"agenda-47","ton-crystal":"everscale","sol-the-white-whale":"the-white-whale","sol-hosico":"hosico","sol-nietzschean-penguin":"nietzschean-penguin","sol-war":"war","sol-make-aliens-great-again":"make-aliens-great-again","sol-labubu-xyz":"labubu-xyz","sol-uranus-coin":"uranus-coin","sol-nobody-sausage":"nobody-sausage","sol-estatex":"estatex","sol-zeta":"zeta","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","epns":"push","sol-moonpig":"moonpig","sol-kokok-the-roach":"kokok-the-roach","sol-agi-alpha-agent":"agi-alpha-agent","perl-eco":"perlin","sol-lolonsol":"lolonsol","shroom-finance":"niftyx-protocol","chronotech":"chrono-tech","forceprotocol":"the-force-protocol","sol-cudis":"cudis","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-startupcoin":"startupcoin","p-ixt-token":"ix-token","sol-hyperpigmentation":"hyperpigmentation","sol-yeti":"yeti","sol-2131kobushide":"2131kobushide","sol-dinosol":"dinosol","p-klima-dao":"klimadao","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","reddcoin":"redd","mantra-dao":"mantra","stasis-euro":"stasis-eurs","yobit":"yobit-token","bnb-swipe":"sxp","swipe":"sxp"} as Record<string, undefined | string> // NOTE: Appending list during build
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
