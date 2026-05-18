<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","injective-protocol":"injective","blockstack":"stacks","luna":"terra-luna","sol-first-digital-usd":"first-digital-usd","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-monad":"monad","sol-doublezero":"doublezero","sol-zebec-network":"zebec-network","floki-inu-v2":"floki-inu","o-optimism":"optimism-ethereum","sol-raydium":"raydium","gala-v2":"gala","zencash":"horizen","o-synthetix-network-token":"synthetix","sol-yzy":"yzy","sol-light":"light","sol-soon":"soon","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-meteora":"meteora","rif-token":"rsk-infrastructure-framework","sol-huma-finance":"huma-finance","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-theuselesscoin":"theuselesscoin","sol-loaded-lions":"loaded-lions","bnb-attestation-service":"bnb-attestation-service","sol-collector-crypt":"collector-crypt","sol-ore-new":"ore-new","sol-backpack-exchange":"backpack-exchange","bounce":"bounce-token","hive":"hive-blockchain","uquid_coin":"uquid-coin","small-love-potion":"smooth-love-potion","dia-data":"dia","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","sol-humidifi":"humidifi","ethos":"voyager-token","terra-virtua-kolekt":"vanar","sol-make-aliens-great-again":"make-aliens-great-again","omisego":"omg","scroll-v2":"scroll","funfair":"funtoken","melon":"enzyme","sol-avici":"avici","sol-the-white-whale":"the-white-whale","ton-crystal":"everscale","sol-wojak-sol":"wojak-sol","sol-unstable-coin-sol":"unstable-coin-sol","sol-nobody-sausage":"nobody-sausage","sol-graphite-protocol":"graphite-protocol","sol-zeta":"zeta","sol-nietzschean-penguin":"nietzschean-penguin","neutrino-dollar":"neutrino-usd","aavegotchi-ghst-token":"aavegotchi","sol-mori-coin":"mori-coin","p-ixt-token":"ix-token","sol-agenda-47":"agenda-47","sol-dowge":"dowge","sol-mobyscreener":"mobyscreener","sol-verse-world":"verse-world","sol-cudis":"cudis","sol-lolonsol":"lolonsol","sol-uranus-coin":"uranus-coin","sol-war":"war","monolith":"tokencard","sun-contract":"suncontract","sol-agi-alpha-agent":"agi-alpha-agent","bnb-swipe":"sxp","swipe":"sxp","sol-labubu-xyz":"labubu-xyz","sol-estatex":"estatex","machine-xchange-coin":"mxc","sol-kokok-the-roach":"kokok-the-roach","p-klima-dao":"klimadao","sol-moonpig":"moonpig","chronotech":"chrono-tech","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-startupcoin":"startupcoin","perl-eco":"perlin","forceprotocol":"the-force-protocol","sol-hosico":"hosico","sol-hyperpigmentation":"hyperpigmentation","paccoin":"pac-protocol","sol-2131kobushide":"2131kobushide","synternet-v2":"synternet","sol-dinosol":"dinosol","sol-yeti":"yeti","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","mantra-dao":"mantra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
