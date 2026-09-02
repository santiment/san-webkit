<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","sol-pump-fun":"pump-fun","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","file-coin":"filecoin","arb-curve":"curve-dao-token","curve":"curve-dao-token","injective-protocol":"injective","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","sol-monad":"monad","luna":"terra-luna","floki-inu-v2":"floki-inu","o-optimism":"optimism-ethereum","sol-raydium":"raydium","sol-doublezero":"doublezero","sol-zebec-network":"zebec-network","sol-theuselesscoin":"theuselesscoin","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-soon":"soon","sol-meteora":"meteora","zencash":"horizen","gala-v2":"gala","sol-light":"light","sol-backpack-exchange":"backpack-exchange","sol-the-black-bull":"the-black-bull","sol-yzy":"yzy","sol-huma-finance":"huma-finance","rif-token":"rsk-infrastructure-framework","o-synthetix-network-token":"synthetix","sol-collector-crypt":"collector-crypt","bnb-attestation-service":"bnb-attestation-service","funfair":"funtoken","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-loaded-lions":"loaded-lions","sol-ore-new":"ore-new","uquid_coin":"uquid-coin","hive":"hive-blockchain","bounce":"bounce-token","small-love-potion":"smooth-love-potion","dia-data":"dia","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","sol-humidifi":"humidifi","ethos":"voyager-token","omisego":"omg","ton-crystal":"everscale","sol-avici":"avici","melon":"enzyme","sol-graphite-protocol":"graphite-protocol","scroll-v2":"scroll","sol-mori-coin":"mori-coin","sol-wojak-sol":"wojak-sol","sol-dowge":"dowge","sol-unstable-coin-sol":"unstable-coin-sol","aavegotchi-ghst-token":"aavegotchi","terra-virtua-kolekt":"vanar","sol-verse-world":"verse-world","sol-agenda-47":"agenda-47","sun-contract":"suncontract","monolith":"tokencard","sol-mobyscreener":"mobyscreener","sol-nobody-sausage":"nobody-sausage","sol-the-white-whale":"the-white-whale","sol-nietzschean-penguin":"nietzschean-penguin","neutrino-dollar":"neutrino-usd","sol-make-aliens-great-again":"make-aliens-great-again","sol-uranus-coin":"uranus-coin","sol-hosico":"hosico","sol-war":"war","sol-labubu-xyz":"labubu-xyz","chronotech":"chrono-tech","sol-lolonsol":"lolonsol","sol-agi-alpha-agent":"agi-alpha-agent","sol-estatex":"estatex","sol-cudis":"cudis","sol-moonpig":"moonpig","sol-zeta":"zeta","sol-kokok-the-roach":"kokok-the-roach","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","machine-xchange-coin":"mxc","perl-eco":"perlin","sol-startupcoin":"startupcoin","sol-launch-coin-on-believe":"launch-coin-on-believe","paccoin":"pac-protocol","forceprotocol":"the-force-protocol","synternet-v2":"synternet","sol-hyperpigmentation":"hyperpigmentation","p-ixt-token":"ix-token","sol-2131kobushide":"2131kobushide","sol-yeti":"yeti","sol-dinosol":"dinosol","super-zero":"super-zero-protocol","p-klima-dao":"klimadao","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","sol-bullish-degen":"bullish-degen","mantra-dao":"mantra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token","bnb-swipe":"sxp","swipe":"sxp"} as Record<string, undefined | string> // NOTE: Appending list during build
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
