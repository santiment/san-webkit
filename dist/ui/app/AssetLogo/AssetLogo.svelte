<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","file-coin":"filecoin","gatechain-token":"gatetoken","sol-pump-fun":"pump-fun","injective-protocol":"injective","blockstack":"stacks","luna":"terra-luna","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-first-digital-usd":"first-digital-usd","sol-doublezero":"doublezero","sol-monad":"monad","sol-zebec-network":"zebec-network","floki-inu-v2":"floki-inu","o-optimism":"optimism-ethereum","sol-raydium":"raydium","gala-v2":"gala","zencash":"horizen","o-synthetix-network-token":"synthetix","sol-light":"light","sol-meteora":"meteora","sol-yzy":"yzy","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-soon":"soon","rif-token":"rsk-infrastructure-framework","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-theuselesscoin":"theuselesscoin","sol-huma-finance":"huma-finance","sol-loaded-lions":"loaded-lions","bnb-attestation-service":"bnb-attestation-service","sol-collector-crypt":"collector-crypt","sol-ore-new":"ore-new","sol-backpack-exchange":"backpack-exchange","hive":"hive-blockchain","bounce":"bounce-token","uquid_coin":"uquid-coin","small-love-potion":"smooth-love-potion","dia-data":"dia","zcoin":"firo","sol-humidifi":"humidifi","smart-bitcoin":"rsk-smart-bitcoin","terra-virtua-kolekt":"vanar","ethos":"voyager-token","scroll-v2":"scroll","omisego":"omg","sol-avici":"avici","sol-wojak-sol":"wojak-sol","melon":"enzyme","sol-nobody-sausage":"nobody-sausage","sol-the-white-whale":"the-white-whale","sol-graphite-protocol":"graphite-protocol","sol-unstable-coin-sol":"unstable-coin-sol","ton-crystal":"everscale","sol-zeta":"zeta","p-ixt-token":"ix-token","sol-nietzschean-penguin":"nietzschean-penguin","funfair":"funtoken","neutrino-dollar":"neutrino-usd","aavegotchi-ghst-token":"aavegotchi","sol-mori-coin":"mori-coin","sol-dowge":"dowge","sol-mobyscreener":"mobyscreener","sol-verse-world":"verse-world","sol-agenda-47":"agenda-47","sol-uranus-coin":"uranus-coin","sol-cudis":"cudis","sol-lolonsol":"lolonsol","monolith":"tokencard","sun-contract":"suncontract","sol-war":"war","sol-agi-alpha-agent":"agi-alpha-agent","sol-labubu-xyz":"labubu-xyz","bnb-swipe":"sxp","swipe":"sxp","sol-estatex":"estatex","sol-kokok-the-roach":"kokok-the-roach","machine-xchange-coin":"mxc","sol-moonpig":"moonpig","p-klima-dao":"klimadao","chronotech":"chrono-tech","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-startupcoin":"startupcoin","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-hosico":"hosico","perl-eco":"perlin","forceprotocol":"the-force-protocol","sol-hyperpigmentation":"hyperpigmentation","paccoin":"pac-protocol","sol-2131kobushide":"2131kobushide","synternet-v2":"synternet","sol-dinosol":"dinosol","sol-yeti":"yeti","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","mantra-dao":"mantra","sol-umbra":"umbra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
