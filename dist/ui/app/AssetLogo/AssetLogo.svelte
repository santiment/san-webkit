<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","sol-pump-fun":"pump-fun","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","injective-protocol":"injective","sol-first-digital-usd":"first-digital-usd","arb-curve":"curve-dao-token","curve":"curve-dao-token","luna":"terra-luna","sol-monad":"monad","blockstack":"stacks","o-optimism":"optimism-ethereum","sol-doublezero":"doublezero","floki-inu-v2":"floki-inu","sol-zebec-network":"zebec-network","sol-raydium":"raydium","sol-soon":"soon","sol-meteora":"meteora","sol-yzy":"yzy","rif-token":"rsk-infrastructure-framework","gala-v2":"gala","o-synthetix-network-token":"synthetix","sol-backpack-exchange":"backpack-exchange","sol-light":"light","sol-the-black-bull":"the-black-bull","zencash":"horizen","sol-huma-finance":"huma-finance","bnb-attestation-service":"bnb-attestation-service","sol-collector-crypt":"collector-crypt","funfair":"funtoken","sol-theuselesscoin":"theuselesscoin","sol-loaded-lions":"loaded-lions","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-ore-new":"ore-new","uquid_coin":"uquid-coin","hive":"hive-blockchain","bounce":"bounce-token","small-love-potion":"smooth-love-potion","smart-bitcoin":"rsk-smart-bitcoin","sol-humidifi":"humidifi","dia-data":"dia","zcoin":"firo","ethos":"voyager-token","terra-virtua-kolekt":"vanar","sol-avici":"avici","ton-crystal":"everscale","omisego":"omg","sol-graphite-protocol":"graphite-protocol","sol-mori-coin":"mori-coin","melon":"enzyme","sol-wojak-sol":"wojak-sol","scroll-v2":"scroll","sol-unstable-coin-sol":"unstable-coin-sol","aavegotchi-ghst-token":"aavegotchi","sol-dowge":"dowge","sol-agenda-47":"agenda-47","sol-nobody-sausage":"nobody-sausage","sol-mobyscreener":"mobyscreener","sol-verse-world":"verse-world","sun-contract":"suncontract","neutrino-dollar":"neutrino-usd","monolith":"tokencard","sol-the-white-whale":"the-white-whale","sol-make-aliens-great-again":"make-aliens-great-again","sol-nietzschean-penguin":"nietzschean-penguin","sol-uranus-coin":"uranus-coin","sol-hosico":"hosico","sol-war":"war","chronotech":"chrono-tech","sol-agi-alpha-agent":"agi-alpha-agent","sol-labubu-xyz":"labubu-xyz","sol-cudis":"cudis","sol-zeta":"zeta","sol-lolonsol":"lolonsol","sol-estatex":"estatex","sol-moonpig":"moonpig","sol-kokok-the-roach":"kokok-the-roach","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","sol-launch-coin-on-believe":"launch-coin-on-believe","perl-eco":"perlin","sol-startupcoin":"startupcoin","machine-xchange-coin":"mxc","forceprotocol":"the-force-protocol","paccoin":"pac-protocol","p-ixt-token":"ix-token","synternet-v2":"synternet","sol-2131kobushide":"2131kobushide","sol-hyperpigmentation":"hyperpigmentation","sol-yeti":"yeti","sol-dinosol":"dinosol","p-klima-dao":"klimadao","super-zero":"super-zero-protocol","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","mantra-dao":"mantra","sol-umbra":"umbra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token","bnb-swipe":"sxp","swipe":"sxp"} as Record<string, undefined | string> // NOTE: Appending list during build
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
