<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","sol-first-digital-usd":"first-digital-usd","blockstack":"stacks","sol-monad":"monad","arb-curve":"curve-dao-token","curve":"curve-dao-token","injective-protocol":"injective","sol-doublezero":"doublezero","floki-inu-v2":"floki-inu","sol-zebec-network":"zebec-network","o-optimism":"optimism-ethereum","luna":"terra-luna","sol-raydium":"raydium","gala-v2":"gala","zencash":"horizen","o-synthetix-network-token":"synthetix","sol-yzy":"yzy","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-light":"light","sol-loaded-lions":"loaded-lions","sol-meteora":"meteora","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-soon":"soon","sol-huma-finance":"huma-finance","sol-theuselesscoin":"theuselesscoin","sol-backpack-exchange":"backpack-exchange","rif-token":"rsk-infrastructure-framework","bounce":"bounce-token","hive":"hive-blockchain","uquid_coin":"uquid-coin","sol-humidifi":"humidifi","small-love-potion":"smooth-love-potion","dia-data":"dia","bnb-attestation-service":"bnb-attestation-service","smart-bitcoin":"rsk-smart-bitcoin","sol-ore-new":"ore-new","sol-collector-crypt":"collector-crypt","zcoin":"firo","terra-virtua-kolekt":"vanar","ethos":"voyager-token","melon":"enzyme","funfair":"funtoken","ton-crystal":"everscale","scroll-v2":"scroll","sol-lolonsol":"lolonsol","omisego":"omg","sol-avici":"avici","sol-the-white-whale":"the-white-whale","sol-graphite-protocol":"graphite-protocol","p-ixt-token":"ix-token","sol-zeta":"zeta","sol-war":"war","sol-wojak-sol":"wojak-sol","sol-mori-coin":"mori-coin","sol-agenda-47":"agenda-47","aavegotchi-ghst-token":"aavegotchi","sol-dowge":"dowge","neutrino-dollar":"neutrino-usd","sol-nietzschean-penguin":"nietzschean-penguin","sol-nobody-sausage":"nobody-sausage","sol-verse-world":"verse-world","sol-mobyscreener":"mobyscreener","machine-xchange-coin":"mxc","sol-cudis":"cudis","sun-contract":"suncontract","chronotech":"chrono-tech","monolith":"tokencard","sol-unstable-coin-sol":"unstable-coin-sol","sol-uranus-coin":"uranus-coin","forceprotocol":"the-force-protocol","bnb-swipe":"sxp","swipe":"sxp","sol-agi-alpha-agent":"agi-alpha-agent","sol-labubu-xyz":"labubu-xyz","sol-estatex":"estatex","sol-kokok-the-roach":"kokok-the-roach","p-klima-dao":"klimadao","sol-moonpig":"moonpig","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-startupcoin":"startupcoin","perl-eco":"perlin","sol-hosico":"hosico","sol-hyperpigmentation":"hyperpigmentation","sol-2131kobushide":"2131kobushide","paccoin":"pac-protocol","synternet-v2":"synternet","sol-yeti":"yeti","sol-dinosol":"dinosol","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","sol-ani-grok-companion":"ani-grok-companion","mantra-dao":"mantra","stasis-euro":"stasis-eurs","reddcoin":"redd","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
