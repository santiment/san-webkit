<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","injective-protocol":"injective","luna":"terra-luna","sol-first-digital-usd":"first-digital-usd","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-doublezero":"doublezero","sol-monad":"monad","sol-zebec-network":"zebec-network","floki-inu-v2":"floki-inu","o-optimism":"optimism-ethereum","sol-raydium":"raydium","gala-v2":"gala","sol-yzy":"yzy","o-synthetix-network-token":"synthetix","rif-token":"rsk-infrastructure-framework","sol-soon":"soon","zencash":"horizen","bnb-attestation-service":"bnb-attestation-service","sol-theuselesscoin":"theuselesscoin","sol-light":"light","sol-collector-crypt":"collector-crypt","sol-huma-finance":"huma-finance","sol-backpack-exchange":"backpack-exchange","sol-meteora":"meteora","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-loaded-lions":"loaded-lions","sol-ore-new":"ore-new","hive":"hive-blockchain","uquid_coin":"uquid-coin","bounce":"bounce-token","small-love-potion":"smooth-love-potion","smart-bitcoin":"rsk-smart-bitcoin","funfair":"funtoken","dia-data":"dia","zcoin":"firo","sol-humidifi":"humidifi","ethos":"voyager-token","ton-crystal":"everscale","sol-avici":"avici","terra-virtua-kolekt":"vanar","omisego":"omg","scroll-v2":"scroll","sol-mori-coin":"mori-coin","melon":"enzyme","sol-graphite-protocol":"graphite-protocol","sol-wojak-sol":"wojak-sol","sol-unstable-coin-sol":"unstable-coin-sol","sol-nobody-sausage":"nobody-sausage","sol-the-white-whale":"the-white-whale","sol-zeta":"zeta","aavegotchi-ghst-token":"aavegotchi","neutrino-dollar":"neutrino-usd","sol-agenda-47":"agenda-47","sol-make-aliens-great-again":"make-aliens-great-again","sol-nietzschean-penguin":"nietzschean-penguin","sol-dowge":"dowge","sol-verse-world":"verse-world","sol-mobyscreener":"mobyscreener","sun-contract":"suncontract","monolith":"tokencard","sol-cudis":"cudis","sol-uranus-coin":"uranus-coin","sol-lolonsol":"lolonsol","sol-war":"war","sol-labubu-xyz":"labubu-xyz","sol-agi-alpha-agent":"agi-alpha-agent","sol-estatex":"estatex","machine-xchange-coin":"mxc","sol-kokok-the-roach":"kokok-the-roach","sol-moonpig":"moonpig","chronotech":"chrono-tech","bnb-swipe":"sxp","swipe":"sxp","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-startupcoin":"startupcoin","forceprotocol":"the-force-protocol","perl-eco":"perlin","sol-hosico":"hosico","sol-hyperpigmentation":"hyperpigmentation","p-ixt-token":"ix-token","paccoin":"pac-protocol","sol-2131kobushide":"2131kobushide","synternet-v2":"synternet","sol-yeti":"yeti","p-klima-dao":"klimadao","sol-dinosol":"dinosol","super-zero":"super-zero-protocol","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","mantra-dao":"mantra","sol-umbra":"umbra","stasis-euro":"stasis-eurs","reddcoin":"redd","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
