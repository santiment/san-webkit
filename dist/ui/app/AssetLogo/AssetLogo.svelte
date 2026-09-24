<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","xinfin-network":"xinfin","sol-pump-fun":"pump-fun","gatechain-token":"gatetoken","p-matic-network":"polygon-ecosystem-token","file-coin":"filecoin","injective-protocol":"injective","blockstack":"stacks","sol-raydium":"raydium","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-first-digital-usd":"first-digital-usd","luna":"terra-luna","o-optimism":"optimism-ethereum","sol-monad":"monad","sol-theuselesscoin":"theuselesscoin","floki-inu-v2":"floki-inu","sol-zebec-network":"zebec-network","sol-meteora":"meteora","sol-doublezero":"doublezero","zencash":"horizen","sol-soon":"soon","sol-solana-mobile-seeker":"solana-mobile-seeker","gala-v2":"gala","rif-token":"rsk-infrastructure-framework","sol-stonk-fun":"stonk-fun","sol-backpack-exchange":"backpack-exchange","sol-light":"light","sol-yzy":"yzy","sol-huma-finance":"huma-finance","funfair":"funtoken","o-synthetix-network-token":"synthetix","bnb-cross-protocol":"cross","sol-anonymous-cat":"anonymous-cat","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-collector-crypt":"collector-crypt","sol-the-black-bull":"the-black-bull","bnb-attestation-service":"bnb-attestation-service","sol-loaded-lions":"loaded-lions","sol-ore-new":"ore-new","hive":"hive-blockchain","uquid_coin":"uquid-coin","bounce":"bounce-token","small-love-potion":"smooth-love-potion","zcoin":"firo","smart-bitcoin":"rsk-smart-bitcoin","dia-data":"dia","sol-graphite-protocol":"graphite-protocol","sol-humidifi":"humidifi","ethos":"voyager-token","omisego":"omg","melon":"enzyme","sol-dowge":"dowge","scroll-v2":"scroll","chronotech":"chrono-tech","aavegotchi-ghst-token":"aavegotchi","sol-mori-coin":"mori-coin","sol-avici":"avici","sol-unstable-coin-sol":"unstable-coin-sol","terra-virtua-kolekt":"vanar","sol-verse-world":"verse-world","ton-crystal":"everscale","sol-mobyscreener":"mobyscreener","monolith":"tokencard","sol-agenda-47":"agenda-47","sun-contract":"suncontract","forceprotocol":"the-force-protocol","neutrino-dollar":"neutrino-usd","sol-the-white-whale":"the-white-whale","sol-nietzschean-penguin":"nietzschean-penguin","sol-nobody-sausage":"nobody-sausage","sol-uranus-coin":"uranus-coin","sol-make-aliens-great-again":"make-aliens-great-again","sol-labubu-xyz":"labubu-xyz","sol-war":"war","sol-cudis":"cudis","sol-lolonsol":"lolonsol","sol-estatex":"estatex","sol-moonpig":"moonpig","sol-zeta":"zeta","sol-kokok-the-roach":"kokok-the-roach","sol-hosico":"hosico","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","sol-agi-alpha-agent":"agi-alpha-agent","perl-eco":"perlin","sol-startupcoin":"startupcoin","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-hyperpigmentation":"hyperpigmentation","sol-2131kobushide":"2131kobushide","sol-yeti":"yeti","sol-dinosol":"dinosol","p-klima-dao":"klimadao","p-ixt-token":"ix-token","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token","mantra-dao":"mantra","bnb-swipe":"sxp","swipe":"sxp"} as Record<string, undefined | string> // NOTE: Appending list during build
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
