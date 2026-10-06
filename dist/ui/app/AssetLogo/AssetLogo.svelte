<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","toncoin":"gram","crypto-com-coin":"cronos","staked-ethena":"ethena","sol-pump-fun":"pump-fun","xinfin-network":"xinfin","gatechain-token":"gatetoken","p-matic-network":"polygon-ecosystem-token","file-coin":"filecoin","injective-protocol":"injective","blockstack":"stacks","sol-raydium":"raydium","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-monad":"monad","sol-first-digital-usd":"first-digital-usd","o-optimism":"optimism-ethereum","luna":"terra-luna","floki-inu-v2":"floki-inu","sol-zebec-network":"zebec-network","eigenlayer":"eigencloud","sol-theuselesscoin":"theuselesscoin","sol-soon":"soon","sol-meteora":"meteora","sol-doublezero":"doublezero","zencash":"horizen","gala-v2":"gala","sol-backpack-exchange":"backpack-exchange","sol-stonk-fun":"stonk-fun","sol-light":"light","sol-collector-crypt":"collector-crypt","sol-huma-finance":"huma-finance","o-synthetix-network-token":"synthetix","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-yzy":"yzy","funfair":"funtoken","rif-token":"rsk-infrastructure-framework","bnb-cross-protocol":"cross","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","story-protocol":"data-network","sol-anonymous-cat":"anonymous-cat","sol-the-black-bull":"the-black-bull","bnb-attestation-service":"bnb-attestation-service","sol-ore-new":"ore-new","sol-loaded-lions":"loaded-lions","hive":"hive-blockchain","uquid_coin":"uquid-coin","bounce":"bounce-token","small-love-potion":"smooth-love-potion","sol-graphite-protocol":"graphite-protocol","dia-data":"dia","zcoin":"firo","quantixai":"quantix-finance","smart-bitcoin":"rsk-smart-bitcoin","ethos":"voyager-token","sol-humidifi":"humidifi","xion":"verona","omisego":"omg","sol-dowge":"dowge","scroll-v2":"scroll","melon":"enzyme","sol-unstable-coin-sol":"unstable-coin-sol","sol-avici":"avici","aavegotchi-ghst-token":"aavegotchi","sol-mori-coin":"mori-coin","ton-crystal":"everscale","terra-virtua-kolekt":"vanar","sol-verse-world":"verse-world","monolith":"tokencard","sol-agenda-47":"agenda-47","sun-contract":"suncontract","sol-mobyscreener":"mobyscreener","sol-hosico":"hosico","neutrino-dollar":"neutrino-usd","argentinefootballassociationfantoken":"argentine-football-association-fan-token","sol-the-white-whale":"the-white-whale","sol-nietzschean-penguin":"nietzschean-penguin","sol-nobody-sausage":"nobody-sausage","epns":"push","sol-uranus-coin":"uranus-coin","sol-war":"war","sol-labubu-xyz":"labubu-xyz","sol-make-aliens-great-again":"make-aliens-great-again","sol-cudis":"cudis","sol-estatex":"estatex","sol-moonpig":"moonpig","sol-lolonsol":"lolonsol","sol-zeta":"zeta","sol-kokok-the-roach":"kokok-the-roach","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","sol-agi-alpha-agent":"agi-alpha-agent","perl-eco":"perlin","sol-startupcoin":"startupcoin","forceprotocol":"the-force-protocol","sol-launch-coin-on-believe":"launch-coin-on-believe","chronotech":"chrono-tech","sol-hyperpigmentation":"hyperpigmentation","sol-2131kobushide":"2131kobushide","sol-yeti":"yeti","sol-dinosol":"dinosol","p-klima-dao":"klimadao","p-ixt-token":"ix-token","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token","bnb-swipe":"sxp","swipe":"sxp","mantra-dao":"mantra"} as Record<string, undefined | string> // NOTE: Appending list during build
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
