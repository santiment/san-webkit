<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","toncoin":"gram","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","sol-pump-fun":"pump-fun","gatechain-token":"gatetoken","p-matic-network":"polygon-ecosystem-token","injective-protocol":"injective","file-coin":"filecoin","blockstack":"stacks","sol-raydium":"raydium","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-first-digital-usd":"first-digital-usd","o-optimism":"optimism-ethereum","luna":"terra-luna","sol-monad":"monad","floki-inu-v2":"floki-inu","sol-zebec-network":"zebec-network","sol-meteora":"meteora","eigenlayer":"eigencloud","sol-soon":"soon","sol-theuselesscoin":"theuselesscoin","zencash":"horizen","gala-v2":"gala","sol-backpack-exchange":"backpack-exchange","sol-yzy":"yzy","sol-collector-crypt":"collector-crypt","sol-doublezero":"doublezero","bnb-cross-protocol":"cross","rif-token":"rsk-infrastructure-framework","o-synthetix-network-token":"synthetix","sol-solana-mobile-seeker":"solana-mobile-seeker","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-ore-new":"ore-new","sol-stonk-fun":"stonk-fun","story-protocol":"data-network","bnb-attestation-service":"bnb-attestation-service","sol-loaded-lions":"loaded-lions","sol-huma-finance":"huma-finance","uquid_coin":"uquid-coin","hive":"hive-blockchain","sol-the-black-bull":"the-black-bull","bounce":"bounce-token","funfair":"funtoken","small-love-potion":"smooth-love-potion","dia-data":"dia","sol-anonymous-cat":"anonymous-cat","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","sol-graphite-protocol":"graphite-protocol","xion":"verona","ethos":"voyager-token","sol-humidifi":"humidifi","omisego":"omg","melon":"enzyme","sol-avici":"avici","sol-dowge":"dowge","scroll-v2":"scroll","quantixai":"quantix-finance","aavegotchi-ghst-token":"aavegotchi","sol-mori-coin":"mori-coin","sol-unstable-coin-sol":"unstable-coin-sol","sun-contract":"suncontract","sol-verse-world":"verse-world","ton-crystal":"everscale","monolith":"tokencard","terra-virtua-kolekt":"vanar","sol-mobyscreener":"mobyscreener","forceprotocol":"the-force-protocol","argentinefootballassociationfantoken":"argentine-football-association-fan-token","sol-hosico":"hosico","neutrino-dollar":"neutrino-usd","sol-agenda-47":"agenda-47","sol-the-white-whale":"the-white-whale","sol-war":"war","sol-nietzschean-penguin":"nietzschean-penguin","sol-uranus-coin":"uranus-coin","sol-labubu-xyz":"labubu-xyz","sol-nobody-sausage":"nobody-sausage","sol-make-aliens-great-again":"make-aliens-great-again","sol-zeta":"zeta","sol-estatex":"estatex","sol-cudis":"cudis","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-moonpig":"moonpig","sol-kokok-the-roach":"kokok-the-roach","perl-eco":"perlin","shroom-finance":"niftyx-protocol","epns":"push","sol-agi-alpha-agent":"agi-alpha-agent","sol-lolonsol":"lolonsol","chronotech":"chrono-tech","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-startupcoin":"startupcoin","p-ixt-token":"ix-token","sol-hyperpigmentation":"hyperpigmentation","sol-yeti":"yeti","sol-2131kobushide":"2131kobushide","sol-dinosol":"dinosol","p-klima-dao":"klimadao","sol-umbra":"umbra","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","reddcoin":"redd","mantra-dao":"mantra","bnb-swipe":"sxp","swipe":"sxp","stasis-euro":"stasis-eurs","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
