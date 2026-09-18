<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","sol-pump-fun":"pump-fun","xinfin-network":"xinfin","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","file-coin":"filecoin","injective-protocol":"injective","arb-curve":"curve-dao-token","curve":"curve-dao-token","blockstack":"stacks","sol-raydium":"raydium","sol-first-digital-usd":"first-digital-usd","sol-monad":"monad","luna":"terra-luna","sol-theuselesscoin":"theuselesscoin","o-optimism":"optimism-ethereum","floki-inu-v2":"floki-inu","sol-zebec-network":"zebec-network","sol-doublezero":"doublezero","sol-meteora":"meteora","zencash":"horizen","sol-soon":"soon","sol-solana-mobile-seeker":"solana-mobile-seeker","gala-v2":"gala","sol-stonk-fun":"stonk-fun","sol-backpack-exchange":"backpack-exchange","sol-anonymous-cat":"anonymous-cat","sol-light":"light","sol-yzy":"yzy","bnb-cross-protocol":"cross","sol-huma-finance":"huma-finance","rif-token":"rsk-infrastructure-framework","funfair":"funtoken","o-synthetix-network-token":"synthetix","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-the-black-bull":"the-black-bull","sol-collector-crypt":"collector-crypt","bnb-attestation-service":"bnb-attestation-service","sol-loaded-lions":"loaded-lions","sol-ore-new":"ore-new","hive":"hive-blockchain","uquid_coin":"uquid-coin","bounce":"bounce-token","small-love-potion":"smooth-love-potion","zcoin":"firo","smart-bitcoin":"rsk-smart-bitcoin","dia-data":"dia","sol-graphite-protocol":"graphite-protocol","ethos":"voyager-token","sol-humidifi":"humidifi","omisego":"omg","melon":"enzyme","scroll-v2":"scroll","sol-dowge":"dowge","chronotech":"chrono-tech","sol-mori-coin":"mori-coin","sol-avici":"avici","aavegotchi-ghst-token":"aavegotchi","ton-crystal":"everscale","sol-unstable-coin-sol":"unstable-coin-sol","terra-virtua-kolekt":"vanar","sol-verse-world":"verse-world","sol-agenda-47":"agenda-47","monolith":"tokencard","sun-contract":"suncontract","neutrino-dollar":"neutrino-usd","sol-mobyscreener":"mobyscreener","sol-the-white-whale":"the-white-whale","sol-nobody-sausage":"nobody-sausage","sol-nietzschean-penguin":"nietzschean-penguin","sol-uranus-coin":"uranus-coin","sol-make-aliens-great-again":"make-aliens-great-again","sol-labubu-xyz":"labubu-xyz","sol-hosico":"hosico","sol-war":"war","sol-lolonsol":"lolonsol","sol-agi-alpha-agent":"agi-alpha-agent","sol-cudis":"cudis","sol-moonpig":"moonpig","sol-estatex":"estatex","sol-zeta":"zeta","sol-kokok-the-roach":"kokok-the-roach","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","perl-eco":"perlin","sol-startupcoin":"startupcoin","sol-launch-coin-on-believe":"launch-coin-on-believe","forceprotocol":"the-force-protocol","sol-hyperpigmentation":"hyperpigmentation","sol-2131kobushide":"2131kobushide","sol-yeti":"yeti","sol-dinosol":"dinosol","p-ixt-token":"ix-token","p-klima-dao":"klimadao","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","reddcoin":"redd","sol-umbra":"umbra","stasis-euro":"stasis-eurs","yobit":"yobit-token","bnb-swipe":"sxp","swipe":"sxp","mantra-dao":"mantra"} as Record<string, undefined | string> // NOTE: Appending list during build
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
