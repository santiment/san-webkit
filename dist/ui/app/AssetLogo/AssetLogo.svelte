<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","sol-pump-fun":"pump-fun","file-coin":"filecoin","injective-protocol":"injective","sol-first-digital-usd":"first-digital-usd","luna":"terra-luna","arb-curve":"curve-dao-token","curve":"curve-dao-token","blockstack":"stacks","sol-monad":"monad","sol-doublezero":"doublezero","o-optimism":"optimism-ethereum","sol-zebec-network":"zebec-network","floki-inu-v2":"floki-inu","sol-raydium":"raydium","rif-token":"rsk-infrastructure-framework","gala-v2":"gala","sol-yzy":"yzy","sol-soon":"soon","sol-meteora":"meteora","o-synthetix-network-token":"synthetix","zencash":"horizen","bnb-swipe":"sxp","swipe":"sxp","sol-backpack-exchange":"backpack-exchange","sol-light":"light","sol-the-black-bull":"the-black-bull","sol-huma-finance":"huma-finance","sol-theuselesscoin":"theuselesscoin","bnb-attestation-service":"bnb-attestation-service","sol-collector-crypt":"collector-crypt","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-loaded-lions":"loaded-lions","sol-solana-mobile-seeker":"solana-mobile-seeker","funfair":"funtoken","sol-ore-new":"ore-new","hive":"hive-blockchain","uquid_coin":"uquid-coin","bounce":"bounce-token","small-love-potion":"smooth-love-potion","smart-bitcoin":"rsk-smart-bitcoin","sol-humidifi":"humidifi","terra-virtua-kolekt":"vanar","dia-data":"dia","zcoin":"firo","ethos":"voyager-token","ton-crystal":"everscale","sol-avici":"avici","omisego":"omg","sol-graphite-protocol":"graphite-protocol","scroll-v2":"scroll","sol-mori-coin":"mori-coin","melon":"enzyme","sol-unstable-coin-sol":"unstable-coin-sol","sol-wojak-sol":"wojak-sol","sol-nobody-sausage":"nobody-sausage","aavegotchi-ghst-token":"aavegotchi","sol-agenda-47":"agenda-47","sol-the-white-whale":"the-white-whale","sol-dowge":"dowge","neutrino-dollar":"neutrino-usd","sol-verse-world":"verse-world","sol-mobyscreener":"mobyscreener","sun-contract":"suncontract","monolith":"tokencard","sol-nietzschean-penguin":"nietzschean-penguin","sol-make-aliens-great-again":"make-aliens-great-again","sol-cudis":"cudis","sol-uranus-coin":"uranus-coin","sol-zeta":"zeta","sol-hosico":"hosico","sol-war":"war","sol-agi-alpha-agent":"agi-alpha-agent","sol-labubu-xyz":"labubu-xyz","sol-lolonsol":"lolonsol","chronotech":"chrono-tech","sol-estatex":"estatex","sol-moonpig":"moonpig","sol-kokok-the-roach":"kokok-the-roach","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-startupcoin":"startupcoin","machine-xchange-coin":"mxc","forceprotocol":"the-force-protocol","perl-eco":"perlin","paccoin":"pac-protocol","p-ixt-token":"ix-token","sol-2131kobushide":"2131kobushide","synternet-v2":"synternet","sol-hyperpigmentation":"hyperpigmentation","sol-yeti":"yeti","sol-dinosol":"dinosol","p-klima-dao":"klimadao","super-zero":"super-zero-protocol","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","mantra-dao":"mantra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
