<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","sol-pump-fun":"pump-fun","xinfin-network":"xinfin","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","file-coin":"filecoin","injective-protocol":"injective","arb-curve":"curve-dao-token","curve":"curve-dao-token","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","sol-monad":"monad","luna":"terra-luna","floki-inu-v2":"floki-inu","o-optimism":"optimism-ethereum","sol-raydium":"raydium","sol-doublezero":"doublezero","sol-zebec-network":"zebec-network","sol-meteora":"meteora","sol-soon":"soon","zencash":"horizen","gala-v2":"gala","sol-backpack-exchange":"backpack-exchange","sol-the-black-bull":"the-black-bull","sol-light":"light","sol-collector-crypt":"collector-crypt","sol-yzy":"yzy","rif-token":"rsk-infrastructure-framework","o-synthetix-network-token":"synthetix","sol-huma-finance":"huma-finance","sol-theuselesscoin":"theuselesscoin","bnb-attestation-service":"bnb-attestation-service","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","funfair":"funtoken","sol-loaded-lions":"loaded-lions","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-ore-new":"ore-new","uquid_coin":"uquid-coin","hive":"hive-blockchain","small-love-potion":"smooth-love-potion","bounce":"bounce-token","dia-data":"dia","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","sol-humidifi":"humidifi","ethos":"voyager-token","omisego":"omg","sol-avici":"avici","ton-crystal":"everscale","sol-graphite-protocol":"graphite-protocol","sol-mori-coin":"mori-coin","melon":"enzyme","sol-unstable-coin-sol":"unstable-coin-sol","scroll-v2":"scroll","sol-wojak-sol":"wojak-sol","sol-dowge":"dowge","terra-virtua-kolekt":"vanar","aavegotchi-ghst-token":"aavegotchi","sol-verse-world":"verse-world","sol-nobody-sausage":"nobody-sausage","sol-mobyscreener":"mobyscreener","sol-agenda-47":"agenda-47","sun-contract":"suncontract","monolith":"tokencard","sol-the-white-whale":"the-white-whale","sol-nietzschean-penguin":"nietzschean-penguin","sol-make-aliens-great-again":"make-aliens-great-again","neutrino-dollar":"neutrino-usd","sol-uranus-coin":"uranus-coin","sol-hosico":"hosico","sol-labubu-xyz":"labubu-xyz","sol-war":"war","sol-lolonsol":"lolonsol","sol-estatex":"estatex","chronotech":"chrono-tech","sol-cudis":"cudis","sol-moonpig":"moonpig","sol-agi-alpha-agent":"agi-alpha-agent","sol-kokok-the-roach":"kokok-the-roach","sol-zeta":"zeta","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","perl-eco":"perlin","machine-xchange-coin":"mxc","sol-startupcoin":"startupcoin","sol-launch-coin-on-believe":"launch-coin-on-believe","paccoin":"pac-protocol","forceprotocol":"the-force-protocol","synternet-v2":"synternet","p-ixt-token":"ix-token","sol-hyperpigmentation":"hyperpigmentation","sol-2131kobushide":"2131kobushide","sol-yeti":"yeti","sol-dinosol":"dinosol","p-klima-dao":"klimadao","super-zero":"super-zero-protocol","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","sol-bullish-degen":"bullish-degen","mantra-dao":"mantra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token","bnb-swipe":"sxp","swipe":"sxp"} as Record<string, undefined | string> // NOTE: Appending list during build
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
