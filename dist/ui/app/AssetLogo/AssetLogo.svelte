<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","sol-pump-fun":"pump-fun","gatechain-token":"gatetoken","file-coin":"filecoin","injective-protocol":"injective","sol-first-digital-usd":"first-digital-usd","arb-curve":"curve-dao-token","curve":"curve-dao-token","luna":"terra-luna","blockstack":"stacks","sol-monad":"monad","sol-doublezero":"doublezero","o-optimism":"optimism-ethereum","floki-inu-v2":"floki-inu","sol-zebec-network":"zebec-network","sol-raydium":"raydium","gala-v2":"gala","sol-soon":"soon","sol-yzy":"yzy","sol-meteora":"meteora","o-synthetix-network-token":"synthetix","zencash":"horizen","sol-backpack-exchange":"backpack-exchange","sol-light":"light","sol-the-black-bull":"the-black-bull","bnb-attestation-service":"bnb-attestation-service","sol-huma-finance":"huma-finance","sol-theuselesscoin":"theuselesscoin","sol-collector-crypt":"collector-crypt","rif-token":"rsk-infrastructure-framework","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","funfair":"funtoken","sol-loaded-lions":"loaded-lions","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-ore-new":"ore-new","hive":"hive-blockchain","uquid_coin":"uquid-coin","bounce":"bounce-token","small-love-potion":"smooth-love-potion","smart-bitcoin":"rsk-smart-bitcoin","sol-humidifi":"humidifi","zcoin":"firo","dia-data":"dia","terra-virtua-kolekt":"vanar","ethos":"voyager-token","ton-crystal":"everscale","sol-avici":"avici","omisego":"omg","sol-graphite-protocol":"graphite-protocol","sol-mori-coin":"mori-coin","scroll-v2":"scroll","melon":"enzyme","sol-unstable-coin-sol":"unstable-coin-sol","sol-wojak-sol":"wojak-sol","sol-nobody-sausage":"nobody-sausage","aavegotchi-ghst-token":"aavegotchi","sol-dowge":"dowge","neutrino-dollar":"neutrino-usd","sol-verse-world":"verse-world","sol-mobyscreener":"mobyscreener","sun-contract":"suncontract","sol-agenda-47":"agenda-47","monolith":"tokencard","sol-the-white-whale":"the-white-whale","sol-nietzschean-penguin":"nietzschean-penguin","sol-make-aliens-great-again":"make-aliens-great-again","sol-uranus-coin":"uranus-coin","sol-cudis":"cudis","sol-hosico":"hosico","sol-agi-alpha-agent":"agi-alpha-agent","sol-war":"war","sol-zeta":"zeta","sol-lolonsol":"lolonsol","sol-labubu-xyz":"labubu-xyz","sol-estatex":"estatex","chronotech":"chrono-tech","sol-moonpig":"moonpig","sol-kokok-the-roach":"kokok-the-roach","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-startupcoin":"startupcoin","perl-eco":"perlin","machine-xchange-coin":"mxc","forceprotocol":"the-force-protocol","p-ixt-token":"ix-token","paccoin":"pac-protocol","synternet-v2":"synternet","sol-2131kobushide":"2131kobushide","sol-hyperpigmentation":"hyperpigmentation","sol-yeti":"yeti","sol-dinosol":"dinosol","p-klima-dao":"klimadao","super-zero":"super-zero-protocol","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","mantra-dao":"mantra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token","bnb-swipe":"sxp","swipe":"sxp"} as Record<string, undefined | string> // NOTE: Appending list during build
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
