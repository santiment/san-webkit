<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","sol-pump-fun":"pump-fun","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","file-coin":"filecoin","injective-protocol":"injective","sol-first-digital-usd":"first-digital-usd","arb-curve":"curve-dao-token","curve":"curve-dao-token","luna":"terra-luna","sol-monad":"monad","blockstack":"stacks","o-optimism":"optimism-ethereum","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","sol-zebec-network":"zebec-network","sol-raydium":"raydium","sol-soon":"soon","sol-meteora":"meteora","sol-yzy":"yzy","gala-v2":"gala","zencash":"horizen","o-synthetix-network-token":"synthetix","sol-backpack-exchange":"backpack-exchange","sol-light":"light","sol-the-black-bull":"the-black-bull","rif-token":"rsk-infrastructure-framework","bnb-attestation-service":"bnb-attestation-service","sol-collector-crypt":"collector-crypt","sol-huma-finance":"huma-finance","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","funfair":"funtoken","sol-theuselesscoin":"theuselesscoin","sol-loaded-lions":"loaded-lions","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-ore-new":"ore-new","uquid_coin":"uquid-coin","hive":"hive-blockchain","bounce":"bounce-token","small-love-potion":"smooth-love-potion","smart-bitcoin":"rsk-smart-bitcoin","dia-data":"dia","zcoin":"firo","sol-humidifi":"humidifi","ethos":"voyager-token","terra-virtua-kolekt":"vanar","sol-avici":"avici","omisego":"omg","ton-crystal":"everscale","sol-mori-coin":"mori-coin","sol-graphite-protocol":"graphite-protocol","melon":"enzyme","sol-unstable-coin-sol":"unstable-coin-sol","scroll-v2":"scroll","sol-wojak-sol":"wojak-sol","aavegotchi-ghst-token":"aavegotchi","sol-dowge":"dowge","sol-nobody-sausage":"nobody-sausage","sol-agenda-47":"agenda-47","sun-contract":"suncontract","sol-verse-world":"verse-world","sol-mobyscreener":"mobyscreener","monolith":"tokencard","sol-make-aliens-great-again":"make-aliens-great-again","sol-the-white-whale":"the-white-whale","sol-nietzschean-penguin":"nietzschean-penguin","neutrino-dollar":"neutrino-usd","sol-uranus-coin":"uranus-coin","sol-hosico":"hosico","sol-war":"war","sol-labubu-xyz":"labubu-xyz","chronotech":"chrono-tech","sol-lolonsol":"lolonsol","sol-cudis":"cudis","sol-zeta":"zeta","sol-estatex":"estatex","sol-moonpig":"moonpig","sol-kokok-the-roach":"kokok-the-roach","sol-agi-alpha-agent":"agi-alpha-agent","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","machine-xchange-coin":"mxc","sol-startupcoin":"startupcoin","perl-eco":"perlin","forceprotocol":"the-force-protocol","paccoin":"pac-protocol","synternet-v2":"synternet","p-ixt-token":"ix-token","sol-2131kobushide":"2131kobushide","sol-hyperpigmentation":"hyperpigmentation","sol-yeti":"yeti","p-klima-dao":"klimadao","sol-dinosol":"dinosol","super-zero":"super-zero-protocol","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","mantra-dao":"mantra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token","bnb-swipe":"sxp","swipe":"sxp"} as Record<string, undefined | string> // NOTE: Appending list during build
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
