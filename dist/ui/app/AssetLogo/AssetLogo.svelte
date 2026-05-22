<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","file-coin":"filecoin","gatechain-token":"gatetoken","sol-pump-fun":"pump-fun","injective-protocol":"injective","blockstack":"stacks","luna":"terra-luna","sol-doublezero":"doublezero","sol-first-digital-usd":"first-digital-usd","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-monad":"monad","sol-zebec-network":"zebec-network","floki-inu-v2":"floki-inu","o-optimism":"optimism-ethereum","sol-raydium":"raydium","gala-v2":"gala","zencash":"horizen","o-synthetix-network-token":"synthetix","sol-yzy":"yzy","sol-soon":"soon","sol-light":"light","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-meteora":"meteora","sol-theuselesscoin":"theuselesscoin","sol-huma-finance":"huma-finance","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-loaded-lions":"loaded-lions","bnb-attestation-service":"bnb-attestation-service","rif-token":"rsk-infrastructure-framework","sol-ore-new":"ore-new","sol-collector-crypt":"collector-crypt","hive":"hive-blockchain","sol-backpack-exchange":"backpack-exchange","bounce":"bounce-token","uquid_coin":"uquid-coin","small-love-potion":"smooth-love-potion","dia-data":"dia","smart-bitcoin":"rsk-smart-bitcoin","sol-humidifi":"humidifi","zcoin":"firo","terra-virtua-kolekt":"vanar","ethos":"voyager-token","sol-wojak-sol":"wojak-sol","scroll-v2":"scroll","funfair":"funtoken","omisego":"omg","sol-avici":"avici","sol-make-aliens-great-again":"make-aliens-great-again","melon":"enzyme","sol-mori-coin":"mori-coin","sol-the-white-whale":"the-white-whale","ton-crystal":"everscale","sol-graphite-protocol":"graphite-protocol","sol-nobody-sausage":"nobody-sausage","sol-unstable-coin-sol":"unstable-coin-sol","sol-zeta":"zeta","neutrino-dollar":"neutrino-usd","aavegotchi-ghst-token":"aavegotchi","sol-nietzschean-penguin":"nietzschean-penguin","sol-mobyscreener":"mobyscreener","sol-lolonsol":"lolonsol","sol-agenda-47":"agenda-47","sol-dowge":"dowge","sol-verse-world":"verse-world","sol-cudis":"cudis","sol-uranus-coin":"uranus-coin","monolith":"tokencard","sun-contract":"suncontract","sol-war":"war","sol-agi-alpha-agent":"agi-alpha-agent","sol-labubu-xyz":"labubu-xyz","sol-estatex":"estatex","sol-kokok-the-roach":"kokok-the-roach","machine-xchange-coin":"mxc","bnb-swipe":"sxp","swipe":"sxp","p-klima-dao":"klimadao","chronotech":"chrono-tech","sol-moonpig":"moonpig","sol-startupcoin":"startupcoin","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","perl-eco":"perlin","forceprotocol":"the-force-protocol","p-ixt-token":"ix-token","sol-hosico":"hosico","sol-hyperpigmentation":"hyperpigmentation","paccoin":"pac-protocol","sol-2131kobushide":"2131kobushide","synternet-v2":"synternet","sol-yeti":"yeti","sol-dinosol":"dinosol","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","mantra-dao":"mantra","sol-umbra":"umbra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
