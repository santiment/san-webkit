<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","file-coin":"filecoin","injective-protocol":"injective","sol-pump-fun":"pump-fun","luna":"terra-luna","sol-first-digital-usd":"first-digital-usd","arb-curve":"curve-dao-token","curve":"curve-dao-token","blockstack":"stacks","sol-zebec-network":"zebec-network","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","sol-monad":"monad","o-optimism":"optimism-ethereum","sol-raydium":"raydium","gala-v2":"gala","sol-yzy":"yzy","sol-soon":"soon","o-synthetix-network-token":"synthetix","rif-token":"rsk-infrastructure-framework","sol-backpack-exchange":"backpack-exchange","sol-collector-crypt":"collector-crypt","zencash":"horizen","sol-huma-finance":"huma-finance","sol-theuselesscoin":"theuselesscoin","bnb-attestation-service":"bnb-attestation-service","sol-light":"light","sol-meteora":"meteora","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-loaded-lions":"loaded-lions","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-ore-new":"ore-new","hive":"hive-blockchain","uquid_coin":"uquid-coin","funfair":"funtoken","bounce":"bounce-token","smart-bitcoin":"rsk-smart-bitcoin","small-love-potion":"smooth-love-potion","dia-data":"dia","sol-humidifi":"humidifi","zcoin":"firo","sol-avici":"avici","ton-crystal":"everscale","ethos":"voyager-token","terra-virtua-kolekt":"vanar","omisego":"omg","scroll-v2":"scroll","sol-mori-coin":"mori-coin","sol-graphite-protocol":"graphite-protocol","sol-unstable-coin-sol":"unstable-coin-sol","melon":"enzyme","sol-wojak-sol":"wojak-sol","sol-nobody-sausage":"nobody-sausage","sol-the-white-whale":"the-white-whale","aavegotchi-ghst-token":"aavegotchi","neutrino-dollar":"neutrino-usd","sol-dowge":"dowge","sol-zeta":"zeta","sol-nietzschean-penguin":"nietzschean-penguin","sol-mobyscreener":"mobyscreener","sol-agenda-47":"agenda-47","sol-verse-world":"verse-world","sun-contract":"suncontract","monolith":"tokencard","sol-cudis":"cudis","sol-uranus-coin":"uranus-coin","sol-make-aliens-great-again":"make-aliens-great-again","sol-hosico":"hosico","sol-lolonsol":"lolonsol","sol-labubu-xyz":"labubu-xyz","sol-war":"war","sol-agi-alpha-agent":"agi-alpha-agent","sol-estatex":"estatex","bnb-swipe":"sxp","swipe":"sxp","sol-kokok-the-roach":"kokok-the-roach","sol-moonpig":"moonpig","machine-xchange-coin":"mxc","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","sol-startupcoin":"startupcoin","chronotech":"chrono-tech","sol-launch-coin-on-believe":"launch-coin-on-believe","forceprotocol":"the-force-protocol","perl-eco":"perlin","sol-hyperpigmentation":"hyperpigmentation","p-ixt-token":"ix-token","paccoin":"pac-protocol","sol-2131kobushide":"2131kobushide","synternet-v2":"synternet","sol-yeti":"yeti","sol-dinosol":"dinosol","p-klima-dao":"klimadao","super-zero":"super-zero-protocol","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","mantra-dao":"mantra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
