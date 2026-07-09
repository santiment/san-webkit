<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","injective-protocol":"injective","sol-first-digital-usd":"first-digital-usd","luna":"terra-luna","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-monad":"monad","sol-doublezero":"doublezero","o-optimism":"optimism-ethereum","sol-zebec-network":"zebec-network","floki-inu-v2":"floki-inu","sol-raydium":"raydium","rif-token":"rsk-infrastructure-framework","gala-v2":"gala","sol-soon":"soon","sol-yzy":"yzy","sol-meteora":"meteora","sol-theuselesscoin":"theuselesscoin","bnb-swipe":"sxp","swipe":"sxp","sol-backpack-exchange":"backpack-exchange","sol-the-black-bull":"the-black-bull","o-synthetix-network-token":"synthetix","zencash":"horizen","sol-light":"light","sol-huma-finance":"huma-finance","bnb-attestation-service":"bnb-attestation-service","sol-collector-crypt":"collector-crypt","sol-solana-mobile-seeker":"solana-mobile-seeker","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-loaded-lions":"loaded-lions","sol-ore-new":"ore-new","funfair":"funtoken","hive":"hive-blockchain","uquid_coin":"uquid-coin","bounce":"bounce-token","small-love-potion":"smooth-love-potion","terra-virtua-kolekt":"vanar","smart-bitcoin":"rsk-smart-bitcoin","sol-humidifi":"humidifi","dia-data":"dia","zcoin":"firo","ethos":"voyager-token","ton-crystal":"everscale","sol-avici":"avici","omisego":"omg","sol-graphite-protocol":"graphite-protocol","scroll-v2":"scroll","sol-mori-coin":"mori-coin","melon":"enzyme","sol-unstable-coin-sol":"unstable-coin-sol","sol-wojak-sol":"wojak-sol","aavegotchi-ghst-token":"aavegotchi","sol-nobody-sausage":"nobody-sausage","sol-zeta":"zeta","sol-the-white-whale":"the-white-whale","neutrino-dollar":"neutrino-usd","sol-dowge":"dowge","sol-verse-world":"verse-world","sol-mobyscreener":"mobyscreener","sun-contract":"suncontract","monolith":"tokencard","sol-make-aliens-great-again":"make-aliens-great-again","sol-agenda-47":"agenda-47","sol-nietzschean-penguin":"nietzschean-penguin","sol-uranus-coin":"uranus-coin","sol-cudis":"cudis","sol-hosico":"hosico","sol-agi-alpha-agent":"agi-alpha-agent","sol-war":"war","sol-labubu-xyz":"labubu-xyz","sol-estatex":"estatex","sol-lolonsol":"lolonsol","chronotech":"chrono-tech","sol-kokok-the-roach":"kokok-the-roach","sol-moonpig":"moonpig","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","sol-startupcoin":"startupcoin","sol-launch-coin-on-believe":"launch-coin-on-believe","machine-xchange-coin":"mxc","perl-eco":"perlin","forceprotocol":"the-force-protocol","paccoin":"pac-protocol","sol-2131kobushide":"2131kobushide","p-ixt-token":"ix-token","synternet-v2":"synternet","sol-hyperpigmentation":"hyperpigmentation","sol-yeti":"yeti","sol-dinosol":"dinosol","p-klima-dao":"klimadao","super-zero":"super-zero-protocol","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","mantra-dao":"mantra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
