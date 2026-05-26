<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","injective-protocol":"injective","luna":"terra-luna","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-doublezero":"doublezero","sol-monad":"monad","sol-zebec-network":"zebec-network","floki-inu-v2":"floki-inu","o-optimism":"optimism-ethereum","sol-raydium":"raydium","gala-v2":"gala","zencash":"horizen","o-synthetix-network-token":"synthetix","sol-yzy":"yzy","sol-soon":"soon","sol-light":"light","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-theuselesscoin":"theuselesscoin","sol-collector-crypt":"collector-crypt","sol-huma-finance":"huma-finance","sol-meteora":"meteora","rif-token":"rsk-infrastructure-framework","bnb-attestation-service":"bnb-attestation-service","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-ore-new":"ore-new","sol-loaded-lions":"loaded-lions","hive":"hive-blockchain","bounce":"bounce-token","sol-backpack-exchange":"backpack-exchange","uquid_coin":"uquid-coin","small-love-potion":"smooth-love-potion","dia-data":"dia","zcoin":"firo","smart-bitcoin":"rsk-smart-bitcoin","sol-humidifi":"humidifi","ethos":"voyager-token","terra-virtua-kolekt":"vanar","sol-avici":"avici","funfair":"funtoken","omisego":"omg","scroll-v2":"scroll","sol-mori-coin":"mori-coin","melon":"enzyme","sol-wojak-sol":"wojak-sol","sol-the-white-whale":"the-white-whale","ton-crystal":"everscale","sol-graphite-protocol":"graphite-protocol","sol-unstable-coin-sol":"unstable-coin-sol","sol-nobody-sausage":"nobody-sausage","sol-zeta":"zeta","neutrino-dollar":"neutrino-usd","sol-make-aliens-great-again":"make-aliens-great-again","aavegotchi-ghst-token":"aavegotchi","sol-nietzschean-penguin":"nietzschean-penguin","sol-agenda-47":"agenda-47","sol-mobyscreener":"mobyscreener","sol-dowge":"dowge","sol-verse-world":"verse-world","sol-lolonsol":"lolonsol","sol-cudis":"cudis","sun-contract":"suncontract","monolith":"tokencard","sol-uranus-coin":"uranus-coin","sol-war":"war","sol-agi-alpha-agent":"agi-alpha-agent","sol-labubu-xyz":"labubu-xyz","sol-estatex":"estatex","sol-kokok-the-roach":"kokok-the-roach","machine-xchange-coin":"mxc","p-klima-dao":"klimadao","bnb-swipe":"sxp","swipe":"sxp","sol-moonpig":"moonpig","chronotech":"chrono-tech","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","sol-startupcoin":"startupcoin","sol-launch-coin-on-believe":"launch-coin-on-believe","perl-eco":"perlin","p-ixt-token":"ix-token","forceprotocol":"the-force-protocol","sol-hosico":"hosico","sol-hyperpigmentation":"hyperpigmentation","paccoin":"pac-protocol","sol-2131kobushide":"2131kobushide","synternet-v2":"synternet","sol-yeti":"yeti","sol-dinosol":"dinosol","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","sol-ani-grok-companion":"ani-grok-companion","mantra-dao":"mantra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
