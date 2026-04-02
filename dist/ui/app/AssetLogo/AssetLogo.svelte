<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","staked-ethena":"ethena","file-coin":"filecoin","sol-pump-fun":"pump-fun","sol-first-digital-usd":"first-digital-usd","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","injective-protocol":"injective","sol-doublezero":"doublezero","floki-inu-v2":"floki-inu","sol-monad":"monad","sol-zebec-network":"zebec-network","o-optimism":"optimism-ethereum","luna":"terra-luna","sol-raydium":"raydium","gala-v2":"gala","sol-yzy":"yzy","o-synthetix-network-token":"synthetix","zencash":"horizen","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-light":"light","sol-loaded-lions":"loaded-lions","sol-meteora":"meteora","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-soon":"soon","sol-huma-finance":"huma-finance","sol-backpack-exchange":"backpack-exchange","rif-token":"rsk-infrastructure-framework","bounce":"bounce-token","sol-theuselesscoin":"theuselesscoin","hive":"hive-blockchain","uquid_coin":"uquid-coin","sol-humidifi":"humidifi","small-love-potion":"smooth-love-potion","dia-data":"dia","sol-ore-new":"ore-new","smart-bitcoin":"rsk-smart-bitcoin","bnb-attestation-service":"bnb-attestation-service","funfair":"funtoken","sol-collector-crypt":"collector-crypt","zcoin":"firo","terra-virtua-kolekt":"vanar","melon":"enzyme","ethos":"voyager-token","sol-lolonsol":"lolonsol","scroll-v2":"scroll","sol-the-white-whale":"the-white-whale","omisego":"omg","sol-war":"war","sol-wojak-sol":"wojak-sol","sol-avici":"avici","sol-graphite-protocol":"graphite-protocol","sol-zeta":"zeta","p-ixt-token":"ix-token","ton-crystal":"everscale","sol-agenda-47":"agenda-47","aavegotchi-ghst-token":"aavegotchi","sol-mori-coin":"mori-coin","neutrino-dollar":"neutrino-usd","sol-dowge":"dowge","sol-nobody-sausage":"nobody-sausage","sol-verse-world":"verse-world","sol-nietzschean-penguin":"nietzschean-penguin","machine-xchange-coin":"mxc","sol-mobyscreener":"mobyscreener","sol-cudis":"cudis","sun-contract":"suncontract","chronotech":"chrono-tech","monolith":"tokencard","bnb-swipe":"sxp","swipe":"sxp","sol-unstable-coin-sol":"unstable-coin-sol","sol-uranus-coin":"uranus-coin","sol-agi-alpha-agent":"agi-alpha-agent","sol-labubu-xyz":"labubu-xyz","sol-estatex":"estatex","sol-kokok-the-roach":"kokok-the-roach","p-klima-dao":"klimadao","sol-moonpig":"moonpig","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","perl-eco":"perlin","sol-hosico":"hosico","sol-startupcoin":"startupcoin","sol-2131kobushide":"2131kobushide","sol-hyperpigmentation":"hyperpigmentation","paccoin":"pac-protocol","forceprotocol":"the-force-protocol","synternet-v2":"synternet","sol-dinosol":"dinosol","sol-yeti":"yeti","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","sol-ani-grok-companion":"ani-grok-companion","mantra-dao":"mantra","stasis-euro":"stasis-eurs","yobit":"yobit-token","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
