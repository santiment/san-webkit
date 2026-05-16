<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","injective-protocol":"injective","blockstack":"stacks","luna":"terra-luna","sol-first-digital-usd":"first-digital-usd","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-monad":"monad","sol-zebec-network":"zebec-network","sol-doublezero":"doublezero","floki-inu-v2":"floki-inu","o-optimism":"optimism-ethereum","sol-raydium":"raydium","gala-v2":"gala","o-synthetix-network-token":"synthetix","zencash":"horizen","sol-yzy":"yzy","sol-light":"light","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-soon":"soon","sol-meteora":"meteora","rif-token":"rsk-infrastructure-framework","sol-huma-finance":"huma-finance","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","bnb-attestation-service":"bnb-attestation-service","sol-loaded-lions":"loaded-lions","sol-theuselesscoin":"theuselesscoin","sol-collector-crypt":"collector-crypt","sol-ore-new":"ore-new","sol-backpack-exchange":"backpack-exchange","bounce":"bounce-token","hive":"hive-blockchain","uquid_coin":"uquid-coin","small-love-potion":"smooth-love-potion","dia-data":"dia","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","sol-humidifi":"humidifi","ethos":"voyager-token","terra-virtua-kolekt":"vanar","sol-make-aliens-great-again":"make-aliens-great-again","scroll-v2":"scroll","melon":"enzyme","sol-avici":"avici","omisego":"omg","funfair":"funtoken","sol-the-white-whale":"the-white-whale","sol-unstable-coin-sol":"unstable-coin-sol","sol-wojak-sol":"wojak-sol","ton-crystal":"everscale","sol-nobody-sausage":"nobody-sausage","sol-graphite-protocol":"graphite-protocol","sol-nietzschean-penguin":"nietzschean-penguin","sol-zeta":"zeta","neutrino-dollar":"neutrino-usd","sol-mori-coin":"mori-coin","aavegotchi-ghst-token":"aavegotchi","p-ixt-token":"ix-token","sol-dowge":"dowge","sol-verse-world":"verse-world","sol-agenda-47":"agenda-47","sol-mobyscreener":"mobyscreener","sol-cudis":"cudis","sol-uranus-coin":"uranus-coin","sol-lolonsol":"lolonsol","monolith":"tokencard","sun-contract":"suncontract","sol-war":"war","sol-agi-alpha-agent":"agi-alpha-agent","bnb-swipe":"sxp","swipe":"sxp","sol-labubu-xyz":"labubu-xyz","sol-estatex":"estatex","machine-xchange-coin":"mxc","sol-kokok-the-roach":"kokok-the-roach","p-klima-dao":"klimadao","chronotech":"chrono-tech","sol-moonpig":"moonpig","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-startupcoin":"startupcoin","perl-eco":"perlin","forceprotocol":"the-force-protocol","sol-hosico":"hosico","sol-hyperpigmentation":"hyperpigmentation","paccoin":"pac-protocol","sol-2131kobushide":"2131kobushide","synternet-v2":"synternet","sol-dinosol":"dinosol","sol-yeti":"yeti","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","mantra-dao":"mantra","sol-umbra":"umbra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
