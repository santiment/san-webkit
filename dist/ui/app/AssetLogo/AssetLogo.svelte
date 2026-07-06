<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","sol-pump-fun":"pump-fun","file-coin":"filecoin","injective-protocol":"injective","sol-first-digital-usd":"first-digital-usd","luna":"terra-luna","arb-curve":"curve-dao-token","curve":"curve-dao-token","blockstack":"stacks","sol-monad":"monad","sol-doublezero":"doublezero","o-optimism":"optimism-ethereum","floki-inu-v2":"floki-inu","sol-zebec-network":"zebec-network","sol-raydium":"raydium","gala-v2":"gala","rif-token":"rsk-infrastructure-framework","sol-soon":"soon","sol-theuselesscoin":"theuselesscoin","sol-yzy":"yzy","sol-meteora":"meteora","bnb-swipe":"sxp","swipe":"sxp","sol-the-black-bull":"the-black-bull","sol-backpack-exchange":"backpack-exchange","sol-collector-crypt":"collector-crypt","zencash":"horizen","o-synthetix-network-token":"synthetix","sol-light":"light","sol-huma-finance":"huma-finance","bnb-attestation-service":"bnb-attestation-service","sol-loaded-lions":"loaded-lions","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-ore-new":"ore-new","funfair":"funtoken","hive":"hive-blockchain","uquid_coin":"uquid-coin","bounce":"bounce-token","small-love-potion":"smooth-love-potion","smart-bitcoin":"rsk-smart-bitcoin","sol-humidifi":"humidifi","terra-virtua-kolekt":"vanar","dia-data":"dia","zcoin":"firo","ethos":"voyager-token","ton-crystal":"everscale","sol-avici":"avici","sol-graphite-protocol":"graphite-protocol","omisego":"omg","sol-mori-coin":"mori-coin","scroll-v2":"scroll","melon":"enzyme","sol-unstable-coin-sol":"unstable-coin-sol","sol-wojak-sol":"wojak-sol","sol-nobody-sausage":"nobody-sausage","aavegotchi-ghst-token":"aavegotchi","sol-the-white-whale":"the-white-whale","neutrino-dollar":"neutrino-usd","sol-dowge":"dowge","sol-zeta":"zeta","sol-mobyscreener":"mobyscreener","sol-verse-world":"verse-world","sun-contract":"suncontract","sol-nietzschean-penguin":"nietzschean-penguin","sol-make-aliens-great-again":"make-aliens-great-again","monolith":"tokencard","sol-uranus-coin":"uranus-coin","sol-cudis":"cudis","sol-agenda-47":"agenda-47","sol-hosico":"hosico","sol-agi-alpha-agent":"agi-alpha-agent","sol-labubu-xyz":"labubu-xyz","sol-war":"war","sol-lolonsol":"lolonsol","sol-estatex":"estatex","chronotech":"chrono-tech","sol-kokok-the-roach":"kokok-the-roach","sol-moonpig":"moonpig","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","sol-startupcoin":"startupcoin","sol-launch-coin-on-believe":"launch-coin-on-believe","machine-xchange-coin":"mxc","forceprotocol":"the-force-protocol","perl-eco":"perlin","paccoin":"pac-protocol","sol-2131kobushide":"2131kobushide","sol-hyperpigmentation":"hyperpigmentation","p-ixt-token":"ix-token","synternet-v2":"synternet","sol-yeti":"yeti","sol-dinosol":"dinosol","p-klima-dao":"klimadao","super-zero":"super-zero-protocol","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","sol-bullish-degen":"bullish-degen","mantra-dao":"mantra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
