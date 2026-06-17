<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","file-coin":"filecoin","injective-protocol":"injective","sol-pump-fun":"pump-fun","luna":"terra-luna","arb-curve":"curve-dao-token","curve":"curve-dao-token","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","sol-doublezero":"doublezero","sol-zebec-network":"zebec-network","sol-monad":"monad","floki-inu-v2":"floki-inu","o-optimism":"optimism-ethereum","sol-raydium":"raydium","gala-v2":"gala","sol-soon":"soon","sol-yzy":"yzy","o-synthetix-network-token":"synthetix","zencash":"horizen","sol-backpack-exchange":"backpack-exchange","sol-collector-crypt":"collector-crypt","sol-huma-finance":"huma-finance","sol-theuselesscoin":"theuselesscoin","rif-token":"rsk-infrastructure-framework","bnb-attestation-service":"bnb-attestation-service","sol-light":"light","sol-meteora":"meteora","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-loaded-lions":"loaded-lions","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-ore-new":"ore-new","hive":"hive-blockchain","uquid_coin":"uquid-coin","bounce":"bounce-token","funfair":"funtoken","small-love-potion":"smooth-love-potion","smart-bitcoin":"rsk-smart-bitcoin","sol-avici":"avici","dia-data":"dia","sol-humidifi":"humidifi","zcoin":"firo","ethos":"voyager-token","ton-crystal":"everscale","terra-virtua-kolekt":"vanar","omisego":"omg","scroll-v2":"scroll","sol-mori-coin":"mori-coin","sol-graphite-protocol":"graphite-protocol","melon":"enzyme","sol-unstable-coin-sol":"unstable-coin-sol","sol-nobody-sausage":"nobody-sausage","sol-wojak-sol":"wojak-sol","sol-zeta":"zeta","sol-the-white-whale":"the-white-whale","aavegotchi-ghst-token":"aavegotchi","neutrino-dollar":"neutrino-usd","sol-dowge":"dowge","sol-nietzschean-penguin":"nietzschean-penguin","sol-mobyscreener":"mobyscreener","sol-agenda-47":"agenda-47","sol-verse-world":"verse-world","sun-contract":"suncontract","monolith":"tokencard","sol-cudis":"cudis","sol-make-aliens-great-again":"make-aliens-great-again","sol-uranus-coin":"uranus-coin","sol-lolonsol":"lolonsol","sol-hosico":"hosico","sol-labubu-xyz":"labubu-xyz","sol-war":"war","sol-agi-alpha-agent":"agi-alpha-agent","sol-estatex":"estatex","bnb-swipe":"sxp","swipe":"sxp","machine-xchange-coin":"mxc","sol-moonpig":"moonpig","sol-kokok-the-roach":"kokok-the-roach","chronotech":"chrono-tech","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","sol-startupcoin":"startupcoin","sol-launch-coin-on-believe":"launch-coin-on-believe","forceprotocol":"the-force-protocol","perl-eco":"perlin","sol-hyperpigmentation":"hyperpigmentation","p-ixt-token":"ix-token","paccoin":"pac-protocol","sol-2131kobushide":"2131kobushide","synternet-v2":"synternet","sol-yeti":"yeti","sol-dinosol":"dinosol","p-klima-dao":"klimadao","super-zero":"super-zero-protocol","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","stasis-euro":"stasis-eurs","mantra-dao":"mantra","reddcoin":"redd","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
