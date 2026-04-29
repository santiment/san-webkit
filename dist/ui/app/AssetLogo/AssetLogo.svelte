<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","luna":"terra-luna","injective-protocol":"injective","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-monad":"monad","sol-zebec-network":"zebec-network","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","o-optimism":"optimism-ethereum","sol-raydium":"raydium","gala-v2":"gala","o-synthetix-network-token":"synthetix","zencash":"horizen","sol-light":"light","sol-yzy":"yzy","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-meteora":"meteora","sol-soon":"soon","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-huma-finance":"huma-finance","sol-loaded-lions":"loaded-lions","rif-token":"rsk-infrastructure-framework","sol-theuselesscoin":"theuselesscoin","sol-backpack-exchange":"backpack-exchange","sol-collector-crypt":"collector-crypt","bnb-attestation-service":"bnb-attestation-service","bounce":"bounce-token","hive":"hive-blockchain","uquid_coin":"uquid-coin","small-love-potion":"smooth-love-potion","sol-ore-new":"ore-new","dia-data":"dia","sol-humidifi":"humidifi","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","terra-virtua-kolekt":"vanar","ethos":"voyager-token","melon":"enzyme","scroll-v2":"scroll","sol-avici":"avici","omisego":"omg","sol-graphite-protocol":"graphite-protocol","sol-the-white-whale":"the-white-whale","ton-crystal":"everscale","sol-zeta":"zeta","p-ixt-token":"ix-token","neutrino-dollar":"neutrino-usd","aavegotchi-ghst-token":"aavegotchi","sol-nobody-sausage":"nobody-sausage","funfair":"funtoken","sol-war":"war","sol-wojak-sol":"wojak-sol","sol-mori-coin":"mori-coin","sol-verse-world":"verse-world","sol-agenda-47":"agenda-47","sol-nietzschean-penguin":"nietzschean-penguin","sol-dowge":"dowge","sol-cudis":"cudis","sol-unstable-coin-sol":"unstable-coin-sol","sol-lolonsol":"lolonsol","sun-contract":"suncontract","monolith":"tokencard","sol-mobyscreener":"mobyscreener","machine-xchange-coin":"mxc","sol-uranus-coin":"uranus-coin","bnb-swipe":"sxp","swipe":"sxp","chronotech":"chrono-tech","sol-agi-alpha-agent":"agi-alpha-agent","sol-labubu-xyz":"labubu-xyz","sol-estatex":"estatex","sol-kokok-the-roach":"kokok-the-roach","p-klima-dao":"klimadao","sol-moonpig":"moonpig","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-startupcoin":"startupcoin","perl-eco":"perlin","sol-hosico":"hosico","sol-2131kobushide":"2131kobushide","sol-hyperpigmentation":"hyperpigmentation","paccoin":"pac-protocol","forceprotocol":"the-force-protocol","synternet-v2":"synternet","sol-yeti":"yeti","sol-dinosol":"dinosol","super-zero":"super-zero-protocol","sol-umbra":"umbra","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","mantra-dao":"mantra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
