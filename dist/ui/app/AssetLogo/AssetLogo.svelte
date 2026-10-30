<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","toncoin":"gram","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","sol-pump-fun":"pump-fun","xinfin-network":"xinfin","gatechain-token":"gatetoken","p-matic-network":"polygon-ecosystem-token","injective-protocol":"injective","file-coin":"filecoin","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-raydium":"raydium","sol-first-digital-usd":"first-digital-usd","o-optimism":"optimism-ethereum","luna":"terra-luna","sol-monad":"monad","floki-inu-v2":"floki-inu","sol-zebec-network":"zebec-network","sol-soon":"soon","eigenlayer":"eigencloud","sol-meteora":"meteora","sol-theuselesscoin":"theuselesscoin","zencash":"horizen","sol-doublezero":"doublezero","gala-v2":"gala","sol-backpack-exchange":"backpack-exchange","sol-collector-crypt":"collector-crypt","sol-stonk-fun":"stonk-fun","sol-huma-finance":"huma-finance","sol-yzy":"yzy","sol-ore-new":"ore-new","rif-token":"rsk-infrastructure-framework","sol-solana-mobile-seeker":"solana-mobile-seeker","o-synthetix-network-token":"synthetix","bnb-cross-protocol":"cross","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","story-protocol":"data-network","sol-anonymous-cat":"anonymous-cat","bnb-attestation-service":"bnb-attestation-service","funfair":"funtoken","sol-loaded-lions":"loaded-lions","hive":"hive-blockchain","uquid_coin":"uquid-coin","bounce":"bounce-token","sol-the-black-bull":"the-black-bull","small-love-potion":"smooth-love-potion","quantixai":"quantix-finance","zcoin":"firo","dia-data":"dia","smart-bitcoin":"rsk-smart-bitcoin","sol-graphite-protocol":"graphite-protocol","ethos":"voyager-token","xion":"verona","sol-humidifi":"humidifi","omisego":"omg","sol-dowge":"dowge","melon":"enzyme","scroll-v2":"scroll","sol-avici":"avici","aavegotchi-ghst-token":"aavegotchi","sol-unstable-coin-sol":"unstable-coin-sol","ton-crystal":"everscale","sol-mori-coin":"mori-coin","terra-virtua-kolekt":"vanar","sol-verse-world":"verse-world","monolith":"tokencard","sun-contract":"suncontract","sol-mobyscreener":"mobyscreener","argentinefootballassociationfantoken":"argentine-football-association-fan-token","sol-hosico":"hosico","neutrino-dollar":"neutrino-usd","sol-the-white-whale":"the-white-whale","sol-agenda-47":"agenda-47","sol-war":"war","sol-nietzschean-penguin":"nietzschean-penguin","sol-labubu-xyz":"labubu-xyz","sol-nobody-sausage":"nobody-sausage","sol-make-aliens-great-again":"make-aliens-great-again","sol-uranus-coin":"uranus-coin","sol-estatex":"estatex","sol-cudis":"cudis","sol-zeta":"zeta","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-kokok-the-roach":"kokok-the-roach","sol-moonpig":"moonpig","shroom-finance":"niftyx-protocol","epns":"push","sol-agi-alpha-agent":"agi-alpha-agent","sol-lolonsol":"lolonsol","perl-eco":"perlin","chronotech":"chrono-tech","sol-startupcoin":"startupcoin","sol-launch-coin-on-believe":"launch-coin-on-believe","forceprotocol":"the-force-protocol","sol-hyperpigmentation":"hyperpigmentation","p-ixt-token":"ix-token","sol-2131kobushide":"2131kobushide","sol-yeti":"yeti","sol-dinosol":"dinosol","p-klima-dao":"klimadao","sol-umbra":"umbra","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","stasis-euro":"stasis-eurs","reddcoin":"redd","yobit":"yobit-token","mantra-dao":"mantra","bnb-swipe":"sxp","swipe":"sxp"} as Record<string, undefined | string> // NOTE: Appending list during build
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
