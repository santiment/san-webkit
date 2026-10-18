<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","toncoin":"gram","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","sol-pump-fun":"pump-fun","xinfin-network":"xinfin","gatechain-token":"gatetoken","p-matic-network":"polygon-ecosystem-token","file-coin":"filecoin","injective-protocol":"injective","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-raydium":"raydium","sol-first-digital-usd":"first-digital-usd","o-optimism":"optimism-ethereum","luna":"terra-luna","sol-monad":"monad","eigenlayer":"eigencloud","floki-inu-v2":"floki-inu","sol-zebec-network":"zebec-network","sol-soon":"soon","sol-meteora":"meteora","sol-theuselesscoin":"theuselesscoin","zencash":"horizen","sol-doublezero":"doublezero","gala-v2":"gala","funfair":"funtoken","sol-backpack-exchange":"backpack-exchange","sol-light":"light","sol-collector-crypt":"collector-crypt","sol-huma-finance":"huma-finance","sol-yzy":"yzy","sol-stonk-fun":"stonk-fun","rif-token":"rsk-infrastructure-framework","sol-solana-mobile-seeker":"solana-mobile-seeker","o-synthetix-network-token":"synthetix","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","story-protocol":"data-network","bnb-cross-protocol":"cross","sol-ore-new":"ore-new","bnb-attestation-service":"bnb-attestation-service","sol-the-black-bull":"the-black-bull","sol-anonymous-cat":"anonymous-cat","sol-loaded-lions":"loaded-lions","hive":"hive-blockchain","uquid_coin":"uquid-coin","bounce":"bounce-token","small-love-potion":"smooth-love-potion","dia-data":"dia","sol-graphite-protocol":"graphite-protocol","quantixai":"quantix-finance","zcoin":"firo","smart-bitcoin":"rsk-smart-bitcoin","ethos":"voyager-token","xion":"verona","sol-humidifi":"humidifi","omisego":"omg","sol-dowge":"dowge","melon":"enzyme","scroll-v2":"scroll","sol-avici":"avici","aavegotchi-ghst-token":"aavegotchi","sol-mori-coin":"mori-coin","sol-unstable-coin-sol":"unstable-coin-sol","ton-crystal":"everscale","terra-virtua-kolekt":"vanar","sol-verse-world":"verse-world","monolith":"tokencard","sol-mobyscreener":"mobyscreener","sun-contract":"suncontract","argentinefootballassociationfantoken":"argentine-football-association-fan-token","neutrino-dollar":"neutrino-usd","forceprotocol":"the-force-protocol","sol-hosico":"hosico","sol-the-white-whale":"the-white-whale","sol-agenda-47":"agenda-47","sol-nietzschean-penguin":"nietzschean-penguin","sol-war":"war","sol-nobody-sausage":"nobody-sausage","sol-labubu-xyz":"labubu-xyz","sol-uranus-coin":"uranus-coin","sol-make-aliens-great-again":"make-aliens-great-again","sol-estatex":"estatex","sol-zeta":"zeta","sol-cudis":"cudis","sol-kokok-the-roach":"kokok-the-roach","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","epns":"push","sol-moonpig":"moonpig","shroom-finance":"niftyx-protocol","sol-agi-alpha-agent":"agi-alpha-agent","sol-lolonsol":"lolonsol","perl-eco":"perlin","chronotech":"chrono-tech","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-startupcoin":"startupcoin","sol-hyperpigmentation":"hyperpigmentation","sol-2131kobushide":"2131kobushide","sol-dinosol":"dinosol","sol-yeti":"yeti","p-ixt-token":"ix-token","p-klima-dao":"klimadao","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token","mantra-dao":"mantra","bnb-swipe":"sxp","swipe":"sxp"} as Record<string, undefined | string> // NOTE: Appending list during build
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
