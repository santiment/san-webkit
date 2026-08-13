<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","sol-pump-fun":"pump-fun","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","file-coin":"filecoin","injective-protocol":"injective","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-first-digital-usd":"first-digital-usd","luna":"terra-luna","sol-monad":"monad","blockstack":"stacks","o-optimism":"optimism-ethereum","floki-inu-v2":"floki-inu","sol-raydium":"raydium","sol-doublezero":"doublezero","sol-zebec-network":"zebec-network","sol-soon":"soon","sol-yzy":"yzy","sol-meteora":"meteora","gala-v2":"gala","zencash":"horizen","sol-light":"light","sol-backpack-exchange":"backpack-exchange","sol-the-black-bull":"the-black-bull","o-synthetix-network-token":"synthetix","rif-token":"rsk-infrastructure-framework","sol-launch-coin-on-believe":"launch-coin-on-believe","bnb-attestation-service":"bnb-attestation-service","sol-huma-finance":"huma-finance","sol-collector-crypt":"collector-crypt","funfair":"funtoken","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-loaded-lions":"loaded-lions","sol-theuselesscoin":"theuselesscoin","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-ore-new":"ore-new","uquid_coin":"uquid-coin","hive":"hive-blockchain","bounce":"bounce-token","small-love-potion":"smooth-love-potion","dia-data":"dia","smart-bitcoin":"rsk-smart-bitcoin","sol-humidifi":"humidifi","zcoin":"firo","ethos":"voyager-token","omisego":"omg","ton-crystal":"everscale","sol-avici":"avici","terra-virtua-kolekt":"vanar","sol-mori-coin":"mori-coin","melon":"enzyme","sol-graphite-protocol":"graphite-protocol","scroll-v2":"scroll","sol-wojak-sol":"wojak-sol","sol-unstable-coin-sol":"unstable-coin-sol","aavegotchi-ghst-token":"aavegotchi","sol-dowge":"dowge","sol-mobyscreener":"mobyscreener","sol-agenda-47":"agenda-47","sun-contract":"suncontract","sol-verse-world":"verse-world","sol-nobody-sausage":"nobody-sausage","monolith":"tokencard","sol-the-white-whale":"the-white-whale","sol-make-aliens-great-again":"make-aliens-great-again","neutrino-dollar":"neutrino-usd","sol-nietzschean-penguin":"nietzschean-penguin","sol-hosico":"hosico","sol-war":"war","sol-uranus-coin":"uranus-coin","chronotech":"chrono-tech","sol-labubu-xyz":"labubu-xyz","sol-estatex":"estatex","sol-lolonsol":"lolonsol","sol-cudis":"cudis","sol-zeta":"zeta","sol-moonpig":"moonpig","sol-kokok-the-roach":"kokok-the-roach","sol-agi-alpha-agent":"agi-alpha-agent","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","machine-xchange-coin":"mxc","perl-eco":"perlin","sol-startupcoin":"startupcoin","forceprotocol":"the-force-protocol","paccoin":"pac-protocol","synternet-v2":"synternet","p-ixt-token":"ix-token","sol-2131kobushide":"2131kobushide","sol-hyperpigmentation":"hyperpigmentation","sol-yeti":"yeti","p-klima-dao":"klimadao","sol-dinosol":"dinosol","super-zero":"super-zero-protocol","sol-umbra":"umbra","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","mantra-dao":"mantra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token","bnb-swipe":"sxp","swipe":"sxp"} as Record<string, undefined | string> // NOTE: Appending list during build
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
