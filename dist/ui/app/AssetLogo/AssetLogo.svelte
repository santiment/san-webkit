<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","sol-pump-fun":"pump-fun","staked-ethena":"ethena","xinfin-network":"xinfin","gatechain-token":"gatetoken","p-matic-network":"polygon-ecosystem-token","file-coin":"filecoin","injective-protocol":"injective","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-raydium":"raydium","sol-monad":"monad","sol-first-digital-usd":"first-digital-usd","o-optimism":"optimism-ethereum","luna":"terra-luna","floki-inu-v2":"floki-inu","sol-zebec-network":"zebec-network","sol-soon":"soon","sol-theuselesscoin":"theuselesscoin","eigenlayer":"eigencloud","sol-doublezero":"doublezero","sol-meteora":"meteora","zencash":"horizen","gala-v2":"gala","sol-backpack-exchange":"backpack-exchange","sol-stonk-fun":"stonk-fun","sol-light":"light","sol-huma-finance":"huma-finance","sol-collector-crypt":"collector-crypt","funfair":"funtoken","sol-yzy":"yzy","sol-solana-mobile-seeker":"solana-mobile-seeker","o-synthetix-network-token":"synthetix","rif-token":"rsk-infrastructure-framework","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","bnb-cross-protocol":"cross","sol-ore-new":"ore-new","sol-the-black-bull":"the-black-bull","bnb-attestation-service":"bnb-attestation-service","sol-loaded-lions":"loaded-lions","sol-anonymous-cat":"anonymous-cat","hive":"hive-blockchain","sol-graphite-protocol":"graphite-protocol","uquid_coin":"uquid-coin","bounce":"bounce-token","small-love-potion":"smooth-love-potion","zcoin":"firo","dia-data":"dia","smart-bitcoin":"rsk-smart-bitcoin","ethos":"voyager-token","sol-humidifi":"humidifi","omisego":"omg","scroll-v2":"scroll","melon":"enzyme","sol-dowge":"dowge","sol-unstable-coin-sol":"unstable-coin-sol","aavegotchi-ghst-token":"aavegotchi","sol-avici":"avici","sol-mori-coin":"mori-coin","terra-virtua-kolekt":"vanar","sol-verse-world":"verse-world","ton-crystal":"everscale","sol-hosico":"hosico","monolith":"tokencard","sol-agenda-47":"agenda-47","sun-contract":"suncontract","sol-mobyscreener":"mobyscreener","epns":"push","neutrino-dollar":"neutrino-usd","forceprotocol":"the-force-protocol","sol-the-white-whale":"the-white-whale","sol-nietzschean-penguin":"nietzschean-penguin","sol-nobody-sausage":"nobody-sausage","sol-uranus-coin":"uranus-coin","sol-labubu-xyz":"labubu-xyz","sol-war":"war","sol-make-aliens-great-again":"make-aliens-great-again","sol-estatex":"estatex","sol-cudis":"cudis","sol-lolonsol":"lolonsol","sol-moonpig":"moonpig","sol-zeta":"zeta","sol-kokok-the-roach":"kokok-the-roach","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-agi-alpha-agent":"agi-alpha-agent","shroom-finance":"niftyx-protocol","chronotech":"chrono-tech","perl-eco":"perlin","sol-startupcoin":"startupcoin","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-hyperpigmentation":"hyperpigmentation","sol-2131kobushide":"2131kobushide","sol-yeti":"yeti","sol-dinosol":"dinosol","p-klima-dao":"klimadao","p-ixt-token":"ix-token","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token","bnb-swipe":"sxp","swipe":"sxp","mantra-dao":"mantra"} as Record<string, undefined | string> // NOTE: Appending list during build
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
