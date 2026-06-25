<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","injective-protocol":"injective","sol-first-digital-usd":"first-digital-usd","luna":"terra-luna","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-zebec-network":"zebec-network","sol-monad":"monad","sol-doublezero":"doublezero","o-optimism":"optimism-ethereum","floki-inu-v2":"floki-inu","sol-raydium":"raydium","gala-v2":"gala","sol-yzy":"yzy","sol-soon":"soon","rif-token":"rsk-infrastructure-framework","sol-meteora":"meteora","sol-backpack-exchange":"backpack-exchange","sol-collector-crypt":"collector-crypt","bnb-attestation-service":"bnb-attestation-service","sol-light":"light","sol-huma-finance":"huma-finance","zencash":"horizen","sol-theuselesscoin":"theuselesscoin","o-synthetix-network-token":"synthetix","sol-loaded-lions":"loaded-lions","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-ore-new":"ore-new","funfair":"funtoken","uquid_coin":"uquid-coin","hive":"hive-blockchain","bounce":"bounce-token","smart-bitcoin":"rsk-smart-bitcoin","small-love-potion":"smooth-love-potion","sol-humidifi":"humidifi","zcoin":"firo","dia-data":"dia","ethos":"voyager-token","sol-avici":"avici","ton-crystal":"everscale","terra-virtua-kolekt":"vanar","sol-mori-coin":"mori-coin","omisego":"omg","scroll-v2":"scroll","sol-graphite-protocol":"graphite-protocol","melon":"enzyme","sol-unstable-coin-sol":"unstable-coin-sol","sol-wojak-sol":"wojak-sol","sol-nobody-sausage":"nobody-sausage","aavegotchi-ghst-token":"aavegotchi","sol-the-white-whale":"the-white-whale","neutrino-dollar":"neutrino-usd","sol-dowge":"dowge","sol-zeta":"zeta","sol-agenda-47":"agenda-47","sol-nietzschean-penguin":"nietzschean-penguin","sol-verse-world":"verse-world","sol-mobyscreener":"mobyscreener","sun-contract":"suncontract","monolith":"tokencard","sol-cudis":"cudis","sol-uranus-coin":"uranus-coin","sol-make-aliens-great-again":"make-aliens-great-again","sol-hosico":"hosico","sol-lolonsol":"lolonsol","sol-war":"war","sol-labubu-xyz":"labubu-xyz","sol-agi-alpha-agent":"agi-alpha-agent","bnb-swipe":"sxp","swipe":"sxp","sol-estatex":"estatex","chronotech":"chrono-tech","sol-moonpig":"moonpig","sol-kokok-the-roach":"kokok-the-roach","machine-xchange-coin":"mxc","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-startupcoin":"startupcoin","shroom-finance":"niftyx-protocol","sol-launch-coin-on-believe":"launch-coin-on-believe","forceprotocol":"the-force-protocol","perl-eco":"perlin","sol-hyperpigmentation":"hyperpigmentation","paccoin":"pac-protocol","p-ixt-token":"ix-token","sol-2131kobushide":"2131kobushide","synternet-v2":"synternet","sol-yeti":"yeti","sol-dinosol":"dinosol","p-klima-dao":"klimadao","super-zero":"super-zero-protocol","sol-ani-grok-companion":"ani-grok-companion","mantra-dao":"mantra","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
