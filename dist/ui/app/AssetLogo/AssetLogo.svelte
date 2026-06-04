<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","injective-protocol":"injective","sol-pump-fun":"pump-fun","luna":"terra-luna","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-zebec-network":"zebec-network","sol-doublezero":"doublezero","floki-inu-v2":"floki-inu","o-optimism":"optimism-ethereum","sol-monad":"monad","sol-raydium":"raydium","gala-v2":"gala","zencash":"horizen","sol-yzy":"yzy","o-synthetix-network-token":"synthetix","rif-token":"rsk-infrastructure-framework","sol-theuselesscoin":"theuselesscoin","sol-collector-crypt":"collector-crypt","sol-light":"light","sol-soon":"soon","sol-huma-finance":"huma-finance","sol-backpack-exchange":"backpack-exchange","bnb-attestation-service":"bnb-attestation-service","sol-meteora":"meteora","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-loaded-lions":"loaded-lions","sol-ore-new":"ore-new","hive":"hive-blockchain","uquid_coin":"uquid-coin","bounce":"bounce-token","small-love-potion":"smooth-love-potion","smart-bitcoin":"rsk-smart-bitcoin","dia-data":"dia","zcoin":"firo","funfair":"funtoken","sol-humidifi":"humidifi","ethos":"voyager-token","ton-crystal":"everscale","sol-avici":"avici","terra-virtua-kolekt":"vanar","omisego":"omg","scroll-v2":"scroll","sol-mori-coin":"mori-coin","melon":"enzyme","sol-graphite-protocol":"graphite-protocol","sol-wojak-sol":"wojak-sol","sol-the-white-whale":"the-white-whale","sol-unstable-coin-sol":"unstable-coin-sol","sol-nobody-sausage":"nobody-sausage","sol-zeta":"zeta","aavegotchi-ghst-token":"aavegotchi","neutrino-dollar":"neutrino-usd","sol-agenda-47":"agenda-47","sol-dowge":"dowge","sol-nietzschean-penguin":"nietzschean-penguin","sol-verse-world":"verse-world","sol-mobyscreener":"mobyscreener","sun-contract":"suncontract","sol-make-aliens-great-again":"make-aliens-great-again","monolith":"tokencard","sol-uranus-coin":"uranus-coin","sol-cudis":"cudis","sol-lolonsol":"lolonsol","sol-war":"war","sol-labubu-xyz":"labubu-xyz","sol-agi-alpha-agent":"agi-alpha-agent","sol-estatex":"estatex","machine-xchange-coin":"mxc","chronotech":"chrono-tech","sol-kokok-the-roach":"kokok-the-roach","sol-moonpig":"moonpig","bnb-swipe":"sxp","swipe":"sxp","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-startupcoin":"startupcoin","forceprotocol":"the-force-protocol","perl-eco":"perlin","sol-hosico":"hosico","sol-hyperpigmentation":"hyperpigmentation","p-ixt-token":"ix-token","paccoin":"pac-protocol","sol-2131kobushide":"2131kobushide","synternet-v2":"synternet","sol-yeti":"yeti","sol-dinosol":"dinosol","p-klima-dao":"klimadao","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","mantra-dao":"mantra","stasis-euro":"stasis-eurs","sol-umbra":"umbra","reddcoin":"redd","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
