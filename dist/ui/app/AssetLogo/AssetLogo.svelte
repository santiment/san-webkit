<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","toncoin":"gram","hedera-hashgraph":"hedera","staked-ethena":"ethena","crypto-com-coin":"cronos","sol-pump-fun":"pump-fun","xinfin-network":"xinfin","gatechain-token":"gatetoken","p-matic-network":"polygon-ecosystem-token","injective-protocol":"injective","file-coin":"filecoin","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-raydium":"raydium","sol-first-digital-usd":"first-digital-usd","sol-monad":"monad","o-optimism":"optimism-ethereum","luna":"terra-luna","sol-zebec-network":"zebec-network","floki-inu-v2":"floki-inu","eigenlayer":"eigencloud","sol-soon":"soon","sol-meteora":"meteora","sol-theuselesscoin":"theuselesscoin","zencash":"horizen","sol-doublezero":"doublezero","funfair":"funtoken","gala-v2":"gala","sol-backpack-exchange":"backpack-exchange","sol-collector-crypt":"collector-crypt","sol-stonk-fun":"stonk-fun","sol-huma-finance":"huma-finance","sol-yzy":"yzy","sol-ore-new":"ore-new","sol-solana-mobile-seeker":"solana-mobile-seeker","rif-token":"rsk-infrastructure-framework","o-synthetix-network-token":"synthetix","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","bnb-cross-protocol":"cross","story-protocol":"data-network","sol-anonymous-cat":"anonymous-cat","bnb-attestation-service":"bnb-attestation-service","sol-loaded-lions":"loaded-lions","hive":"hive-blockchain","uquid_coin":"uquid-coin","sol-the-black-bull":"the-black-bull","bounce":"bounce-token","small-love-potion":"smooth-love-potion","quantixai":"quantix-finance","dia-data":"dia","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","sol-graphite-protocol":"graphite-protocol","xion":"verona","ethos":"voyager-token","sol-humidifi":"humidifi","omisego":"omg","sol-dowge":"dowge","melon":"enzyme","scroll-v2":"scroll","sol-avici":"avici","aavegotchi-ghst-token":"aavegotchi","sol-unstable-coin-sol":"unstable-coin-sol","sol-mori-coin":"mori-coin","ton-crystal":"everscale","terra-virtua-kolekt":"vanar","sol-verse-world":"verse-world","monolith":"tokencard","sun-contract":"suncontract","sol-mobyscreener":"mobyscreener","forceprotocol":"the-force-protocol","argentinefootballassociationfantoken":"argentine-football-association-fan-token","neutrino-dollar":"neutrino-usd","sol-hosico":"hosico","sol-the-white-whale":"the-white-whale","sol-agenda-47":"agenda-47","sol-war":"war","sol-nietzschean-penguin":"nietzschean-penguin","sol-labubu-xyz":"labubu-xyz","sol-nobody-sausage":"nobody-sausage","sol-uranus-coin":"uranus-coin","sol-make-aliens-great-again":"make-aliens-great-again","sol-estatex":"estatex","sol-zeta":"zeta","sol-cudis":"cudis","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-kokok-the-roach":"kokok-the-roach","sol-moonpig":"moonpig","shroom-finance":"niftyx-protocol","epns":"push","sol-agi-alpha-agent":"agi-alpha-agent","sol-lolonsol":"lolonsol","perl-eco":"perlin","chronotech":"chrono-tech","sol-startupcoin":"startupcoin","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-hyperpigmentation":"hyperpigmentation","p-ixt-token":"ix-token","sol-2131kobushide":"2131kobushide","sol-yeti":"yeti","sol-dinosol":"dinosol","p-klima-dao":"klimadao","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token","mantra-dao":"mantra","bnb-swipe":"sxp","swipe":"sxp"} as Record<string, undefined | string> // NOTE: Appending list during build
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
