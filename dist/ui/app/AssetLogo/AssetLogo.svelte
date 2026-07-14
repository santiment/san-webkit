<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","injective-protocol":"injective","sol-first-digital-usd":"first-digital-usd","arb-curve":"curve-dao-token","curve":"curve-dao-token","luna":"terra-luna","blockstack":"stacks","sol-monad":"monad","sol-doublezero":"doublezero","sol-zebec-network":"zebec-network","o-optimism":"optimism-ethereum","floki-inu-v2":"floki-inu","sol-raydium":"raydium","rif-token":"rsk-infrastructure-framework","gala-v2":"gala","sol-soon":"soon","sol-yzy":"yzy","sol-theuselesscoin":"theuselesscoin","o-synthetix-network-token":"synthetix","sol-meteora":"meteora","bnb-swipe":"sxp","swipe":"sxp","sol-backpack-exchange":"backpack-exchange","sol-the-black-bull":"the-black-bull","sol-light":"light","zencash":"horizen","sol-collector-crypt":"collector-crypt","sol-huma-finance":"huma-finance","bnb-attestation-service":"bnb-attestation-service","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-loaded-lions":"loaded-lions","sol-ore-new":"ore-new","funfair":"funtoken","hive":"hive-blockchain","uquid_coin":"uquid-coin","bounce":"bounce-token","small-love-potion":"smooth-love-potion","smart-bitcoin":"rsk-smart-bitcoin","sol-humidifi":"humidifi","terra-virtua-kolekt":"vanar","dia-data":"dia","zcoin":"firo","ethos":"voyager-token","ton-crystal":"everscale","sol-avici":"avici","omisego":"omg","sol-graphite-protocol":"graphite-protocol","scroll-v2":"scroll","sol-mori-coin":"mori-coin","sol-unstable-coin-sol":"unstable-coin-sol","melon":"enzyme","sol-wojak-sol":"wojak-sol","sol-nobody-sausage":"nobody-sausage","sol-agenda-47":"agenda-47","aavegotchi-ghst-token":"aavegotchi","sol-the-white-whale":"the-white-whale","sol-dowge":"dowge","neutrino-dollar":"neutrino-usd","sol-verse-world":"verse-world","sol-mobyscreener":"mobyscreener","sun-contract":"suncontract","monolith":"tokencard","sol-nietzschean-penguin":"nietzschean-penguin","sol-zeta":"zeta","sol-cudis":"cudis","sol-make-aliens-great-again":"make-aliens-great-again","sol-uranus-coin":"uranus-coin","sol-hosico":"hosico","sol-agi-alpha-agent":"agi-alpha-agent","sol-war":"war","sol-labubu-xyz":"labubu-xyz","sol-lolonsol":"lolonsol","sol-estatex":"estatex","chronotech":"chrono-tech","sol-kokok-the-roach":"kokok-the-roach","sol-moonpig":"moonpig","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-startupcoin":"startupcoin","machine-xchange-coin":"mxc","perl-eco":"perlin","forceprotocol":"the-force-protocol","paccoin":"pac-protocol","p-ixt-token":"ix-token","sol-2131kobushide":"2131kobushide","synternet-v2":"synternet","sol-hyperpigmentation":"hyperpigmentation","sol-yeti":"yeti","sol-dinosol":"dinosol","p-klima-dao":"klimadao","super-zero":"super-zero-protocol","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","sol-bullish-degen":"bullish-degen","mantra-dao":"mantra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
