<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","toncoin":"gram","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","sol-pump-fun":"pump-fun","xinfin-network":"xinfin","gatechain-token":"gatetoken","p-matic-network":"polygon-ecosystem-token","file-coin":"filecoin","injective-protocol":"injective","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-raydium":"raydium","sol-first-digital-usd":"first-digital-usd","o-optimism":"optimism-ethereum","sol-monad":"monad","luna":"terra-luna","sol-zebec-network":"zebec-network","floki-inu-v2":"floki-inu","eigenlayer":"eigencloud","sol-soon":"soon","sol-meteora":"meteora","sol-theuselesscoin":"theuselesscoin","zencash":"horizen","sol-doublezero":"doublezero","gala-v2":"gala","funfair":"funtoken","sol-backpack-exchange":"backpack-exchange","sol-light":"light","sol-collector-crypt":"collector-crypt","sol-huma-finance":"huma-finance","sol-yzy":"yzy","sol-stonk-fun":"stonk-fun","sol-solana-mobile-seeker":"solana-mobile-seeker","o-synthetix-network-token":"synthetix","rif-token":"rsk-infrastructure-framework","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-ore-new":"ore-new","bnb-cross-protocol":"cross","story-protocol":"data-network","sol-anonymous-cat":"anonymous-cat","bnb-attestation-service":"bnb-attestation-service","sol-loaded-lions":"loaded-lions","sol-the-black-bull":"the-black-bull","hive":"hive-blockchain","uquid_coin":"uquid-coin","bounce":"bounce-token","small-love-potion":"smooth-love-potion","dia-data":"dia","quantixai":"quantix-finance","smart-bitcoin":"rsk-smart-bitcoin","sol-graphite-protocol":"graphite-protocol","zcoin":"firo","ethos":"voyager-token","xion":"verona","sol-humidifi":"humidifi","omisego":"omg","sol-dowge":"dowge","melon":"enzyme","scroll-v2":"scroll","sol-avici":"avici","aavegotchi-ghst-token":"aavegotchi","sol-mori-coin":"mori-coin","sol-unstable-coin-sol":"unstable-coin-sol","ton-crystal":"everscale","terra-virtua-kolekt":"vanar","sol-verse-world":"verse-world","sol-mobyscreener":"mobyscreener","monolith":"tokencard","sun-contract":"suncontract","forceprotocol":"the-force-protocol","argentinefootballassociationfantoken":"argentine-football-association-fan-token","sol-the-white-whale":"the-white-whale","neutrino-dollar":"neutrino-usd","sol-hosico":"hosico","sol-agenda-47":"agenda-47","sol-cudis":"cudis","sol-nietzschean-penguin":"nietzschean-penguin","sol-war":"war","sol-nobody-sausage":"nobody-sausage","sol-labubu-xyz":"labubu-xyz","sol-uranus-coin":"uranus-coin","sol-make-aliens-great-again":"make-aliens-great-again","sol-estatex":"estatex","sol-zeta":"zeta","sol-kokok-the-roach":"kokok-the-roach","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-moonpig":"moonpig","shroom-finance":"niftyx-protocol","epns":"push","sol-agi-alpha-agent":"agi-alpha-agent","sol-lolonsol":"lolonsol","perl-eco":"perlin","chronotech":"chrono-tech","sol-startupcoin":"startupcoin","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-hyperpigmentation":"hyperpigmentation","p-ixt-token":"ix-token","sol-2131kobushide":"2131kobushide","sol-dinosol":"dinosol","sol-yeti":"yeti","p-klima-dao":"klimadao","sol-umbra":"umbra","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","stasis-euro":"stasis-eurs","reddcoin":"redd","yobit":"yobit-token","mantra-dao":"mantra","bnb-swipe":"sxp","swipe":"sxp"} as Record<string, undefined | string> // NOTE: Appending list during build
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
