<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","staked-ethena":"ethena","sol-pump-fun":"pump-fun","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","file-coin":"filecoin","injective-protocol":"injective","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-raydium":"raydium","sol-monad":"monad","sol-first-digital-usd":"first-digital-usd","o-optimism":"optimism-ethereum","luna":"terra-luna","floki-inu-v2":"floki-inu","sol-theuselesscoin":"theuselesscoin","sol-doublezero":"doublezero","sol-zebec-network":"zebec-network","sol-soon":"soon","sol-meteora":"meteora","zencash":"horizen","gala-v2":"gala","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-backpack-exchange":"backpack-exchange","sol-stonk-fun":"stonk-fun","sol-light":"light","sol-huma-finance":"huma-finance","sol-yzy":"yzy","rif-token":"rsk-infrastructure-framework","o-synthetix-network-token":"synthetix","funfair":"funtoken","bnb-cross-protocol":"cross","sol-collector-crypt":"collector-crypt","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-the-black-bull":"the-black-bull","sol-anonymous-cat":"anonymous-cat","bnb-attestation-service":"bnb-attestation-service","sol-loaded-lions":"loaded-lions","sol-ore-new":"ore-new","hive":"hive-blockchain","uquid_coin":"uquid-coin","bounce":"bounce-token","zcoin":"firo","small-love-potion":"smooth-love-potion","sol-graphite-protocol":"graphite-protocol","dia-data":"dia","smart-bitcoin":"rsk-smart-bitcoin","sol-humidifi":"humidifi","ethos":"voyager-token","omisego":"omg","melon":"enzyme","sol-dowge":"dowge","scroll-v2":"scroll","sol-mori-coin":"mori-coin","chronotech":"chrono-tech","sol-avici":"avici","aavegotchi-ghst-token":"aavegotchi","sol-unstable-coin-sol":"unstable-coin-sol","terra-virtua-kolekt":"vanar","sol-verse-world":"verse-world","ton-crystal":"everscale","sol-mobyscreener":"mobyscreener","monolith":"tokencard","sol-agenda-47":"agenda-47","sun-contract":"suncontract","forceprotocol":"the-force-protocol","neutrino-dollar":"neutrino-usd","sol-the-white-whale":"the-white-whale","sol-nietzschean-penguin":"nietzschean-penguin","sol-nobody-sausage":"nobody-sausage","sol-labubu-xyz":"labubu-xyz","sol-uranus-coin":"uranus-coin","sol-make-aliens-great-again":"make-aliens-great-again","sol-war":"war","sol-hosico":"hosico","sol-estatex":"estatex","sol-lolonsol":"lolonsol","sol-cudis":"cudis","sol-moonpig":"moonpig","sol-kokok-the-roach":"kokok-the-roach","sol-zeta":"zeta","sol-agi-alpha-agent":"agi-alpha-agent","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","perl-eco":"perlin","sol-startupcoin":"startupcoin","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-hyperpigmentation":"hyperpigmentation","sol-2131kobushide":"2131kobushide","sol-yeti":"yeti","sol-dinosol":"dinosol","p-ixt-token":"ix-token","p-klima-dao":"klimadao","sol-umbra":"umbra","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token","mantra-dao":"mantra","bnb-swipe":"sxp","swipe":"sxp"} as Record<string, undefined | string> // NOTE: Appending list during build
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
