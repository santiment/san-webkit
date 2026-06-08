<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","injective-protocol":"injective","luna":"terra-luna","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-monad":"monad","sol-zebec-network":"zebec-network","sol-doublezero":"doublezero","floki-inu-v2":"floki-inu","o-optimism":"optimism-ethereum","sol-raydium":"raydium","gala-v2":"gala","sol-yzy":"yzy","o-synthetix-network-token":"synthetix","sol-soon":"soon","bnb-attestation-service":"bnb-attestation-service","zencash":"horizen","sol-theuselesscoin":"theuselesscoin","sol-collector-crypt":"collector-crypt","sol-backpack-exchange":"backpack-exchange","sol-huma-finance":"huma-finance","sol-light":"light","rif-token":"rsk-infrastructure-framework","sol-meteora":"meteora","sol-loaded-lions":"loaded-lions","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-ore-new":"ore-new","uquid_coin":"uquid-coin","hive":"hive-blockchain","bounce":"bounce-token","small-love-potion":"smooth-love-potion","smart-bitcoin":"rsk-smart-bitcoin","funfair":"funtoken","dia-data":"dia","zcoin":"firo","sol-humidifi":"humidifi","ethos":"voyager-token","ton-crystal":"everscale","sol-avici":"avici","terra-virtua-kolekt":"vanar","omisego":"omg","scroll-v2":"scroll","sol-mori-coin":"mori-coin","sol-nobody-sausage":"nobody-sausage","melon":"enzyme","sol-graphite-protocol":"graphite-protocol","sol-unstable-coin-sol":"unstable-coin-sol","sol-wojak-sol":"wojak-sol","sol-the-white-whale":"the-white-whale","aavegotchi-ghst-token":"aavegotchi","sol-zeta":"zeta","sol-dowge":"dowge","sol-nietzschean-penguin":"nietzschean-penguin","neutrino-dollar":"neutrino-usd","sol-agenda-47":"agenda-47","sol-make-aliens-great-again":"make-aliens-great-again","sol-mobyscreener":"mobyscreener","sol-verse-world":"verse-world","sun-contract":"suncontract","monolith":"tokencard","sol-cudis":"cudis","sol-uranus-coin":"uranus-coin","sol-lolonsol":"lolonsol","sol-war":"war","sol-labubu-xyz":"labubu-xyz","sol-agi-alpha-agent":"agi-alpha-agent","sol-estatex":"estatex","machine-xchange-coin":"mxc","sol-kokok-the-roach":"kokok-the-roach","sol-moonpig":"moonpig","bnb-swipe":"sxp","swipe":"sxp","chronotech":"chrono-tech","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","sol-startupcoin":"startupcoin","sol-launch-coin-on-believe":"launch-coin-on-believe","forceprotocol":"the-force-protocol","perl-eco":"perlin","sol-hosico":"hosico","p-ixt-token":"ix-token","sol-hyperpigmentation":"hyperpigmentation","paccoin":"pac-protocol","sol-2131kobushide":"2131kobushide","synternet-v2":"synternet","sol-yeti":"yeti","p-klima-dao":"klimadao","sol-dinosol":"dinosol","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","stasis-euro":"stasis-eurs","mantra-dao":"mantra","reddcoin":"redd","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
