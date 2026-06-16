<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","injective-protocol":"injective","sol-pump-fun":"pump-fun","luna":"terra-luna","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-first-digital-usd":"first-digital-usd","blockstack":"stacks","sol-monad":"monad","sol-zebec-network":"zebec-network","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","o-optimism":"optimism-ethereum","sol-raydium":"raydium","gala-v2":"gala","rif-token":"rsk-infrastructure-framework","sol-yzy":"yzy","o-synthetix-network-token":"synthetix","zencash":"horizen","sol-soon":"soon","sol-backpack-exchange":"backpack-exchange","sol-collector-crypt":"collector-crypt","sol-theuselesscoin":"theuselesscoin","sol-huma-finance":"huma-finance","bnb-attestation-service":"bnb-attestation-service","sol-light":"light","sol-meteora":"meteora","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-loaded-lions":"loaded-lions","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-ore-new":"ore-new","hive":"hive-blockchain","uquid_coin":"uquid-coin","bounce":"bounce-token","funfair":"funtoken","small-love-potion":"smooth-love-potion","smart-bitcoin":"rsk-smart-bitcoin","dia-data":"dia","zcoin":"firo","sol-humidifi":"humidifi","ethos":"voyager-token","ton-crystal":"everscale","sol-avici":"avici","terra-virtua-kolekt":"vanar","omisego":"omg","scroll-v2":"scroll","sol-mori-coin":"mori-coin","sol-graphite-protocol":"graphite-protocol","sol-nobody-sausage":"nobody-sausage","melon":"enzyme","sol-unstable-coin-sol":"unstable-coin-sol","sol-wojak-sol":"wojak-sol","sol-the-white-whale":"the-white-whale","sol-zeta":"zeta","aavegotchi-ghst-token":"aavegotchi","neutrino-dollar":"neutrino-usd","sol-dowge":"dowge","sol-nietzschean-penguin":"nietzschean-penguin","sol-mobyscreener":"mobyscreener","sol-verse-world":"verse-world","sol-agenda-47":"agenda-47","sun-contract":"suncontract","monolith":"tokencard","sol-make-aliens-great-again":"make-aliens-great-again","sol-uranus-coin":"uranus-coin","sol-cudis":"cudis","sol-lolonsol":"lolonsol","sol-war":"war","sol-labubu-xyz":"labubu-xyz","sol-agi-alpha-agent":"agi-alpha-agent","sol-estatex":"estatex","machine-xchange-coin":"mxc","sol-kokok-the-roach":"kokok-the-roach","sol-moonpig":"moonpig","chronotech":"chrono-tech","bnb-swipe":"sxp","swipe":"sxp","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","sol-startupcoin":"startupcoin","sol-launch-coin-on-believe":"launch-coin-on-believe","forceprotocol":"the-force-protocol","perl-eco":"perlin","sol-hyperpigmentation":"hyperpigmentation","sol-hosico":"hosico","p-ixt-token":"ix-token","paccoin":"pac-protocol","sol-2131kobushide":"2131kobushide","synternet-v2":"synternet","sol-yeti":"yeti","sol-dinosol":"dinosol","p-klima-dao":"klimadao","super-zero":"super-zero-protocol","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","stasis-euro":"stasis-eurs","mantra-dao":"mantra","reddcoin":"redd","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
