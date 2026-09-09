<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","sol-pump-fun":"pump-fun","xinfin-network":"xinfin","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","file-coin":"filecoin","injective-protocol":"injective","arb-curve":"curve-dao-token","curve":"curve-dao-token","blockstack":"stacks","sol-raydium":"raydium","sol-first-digital-usd":"first-digital-usd","sol-theuselesscoin":"theuselesscoin","sol-monad":"monad","luna":"terra-luna","floki-inu-v2":"floki-inu","o-optimism":"optimism-ethereum","sol-zebec-network":"zebec-network","sol-doublezero":"doublezero","zencash":"horizen","sol-meteora":"meteora","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-soon":"soon","gala-v2":"gala","sol-backpack-exchange":"backpack-exchange","sol-light":"light","sol-yzy":"yzy","sol-huma-finance":"huma-finance","rif-token":"rsk-infrastructure-framework","o-synthetix-network-token":"synthetix","funfair":"funtoken","sol-the-black-bull":"the-black-bull","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","bnb-attestation-service":"bnb-attestation-service","bnb-cross-protocol":"cross","sol-collector-crypt":"collector-crypt","sol-loaded-lions":"loaded-lions","sol-ore-new":"ore-new","uquid_coin":"uquid-coin","hive":"hive-blockchain","small-love-potion":"smooth-love-potion","bounce":"bounce-token","dia-data":"dia","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","sol-humidifi":"humidifi","ethos":"voyager-token","sol-graphite-protocol":"graphite-protocol","omisego":"omg","melon":"enzyme","sol-dowge":"dowge","sol-wojak-sol":"wojak-sol","scroll-v2":"scroll","sol-mori-coin":"mori-coin","ton-crystal":"everscale","sol-unstable-coin-sol":"unstable-coin-sol","sol-avici":"avici","aavegotchi-ghst-token":"aavegotchi","terra-virtua-kolekt":"vanar","sol-verse-world":"verse-world","sol-agenda-47":"agenda-47","neutrino-dollar":"neutrino-usd","sun-contract":"suncontract","monolith":"tokencard","sol-the-white-whale":"the-white-whale","sol-mobyscreener":"mobyscreener","sol-nobody-sausage":"nobody-sausage","sol-nietzschean-penguin":"nietzschean-penguin","sol-uranus-coin":"uranus-coin","sol-make-aliens-great-again":"make-aliens-great-again","sol-labubu-xyz":"labubu-xyz","sol-hosico":"hosico","sol-war":"war","sol-lolonsol":"lolonsol","sol-agi-alpha-agent":"agi-alpha-agent","sol-estatex":"estatex","sol-cudis":"cudis","sol-moonpig":"moonpig","sol-kokok-the-roach":"kokok-the-roach","sol-zeta":"zeta","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","chronotech":"chrono-tech","machine-xchange-coin":"mxc","perl-eco":"perlin","sol-startupcoin":"startupcoin","paccoin":"pac-protocol","synternet-v2":"synternet","sol-launch-coin-on-believe":"launch-coin-on-believe","forceprotocol":"the-force-protocol","p-ixt-token":"ix-token","sol-hyperpigmentation":"hyperpigmentation","sol-yeti":"yeti","sol-2131kobushide":"2131kobushide","super-zero":"super-zero-protocol","sol-dinosol":"dinosol","p-klima-dao":"klimadao","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","reddcoin":"redd","mantra-dao":"mantra","stasis-euro":"stasis-eurs","yobit":"yobit-token","bnb-swipe":"sxp","swipe":"sxp"} as Record<string, undefined | string> // NOTE: Appending list during build
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
