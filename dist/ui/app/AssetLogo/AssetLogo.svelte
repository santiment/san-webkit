<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","sol-first-digital-usd":"first-digital-usd","sol-monad":"monad","blockstack":"stacks","arb-curve":"curve-dao-token","curve":"curve-dao-token","injective-protocol":"injective","sol-doublezero":"doublezero","floki-inu-v2":"floki-inu","sol-zebec-network":"zebec-network","o-optimism":"optimism-ethereum","luna":"terra-luna","sol-raydium":"raydium","gala-v2":"gala","zencash":"horizen","o-synthetix-network-token":"synthetix","sol-yzy":"yzy","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-light":"light","sol-loaded-lions":"loaded-lions","sol-meteora":"meteora","sol-soon":"soon","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-huma-finance":"huma-finance","sol-theuselesscoin":"theuselesscoin","sol-humidifi":"humidifi","sol-backpack-exchange":"backpack-exchange","rif-token":"rsk-infrastructure-framework","bounce":"bounce-token","hive":"hive-blockchain","uquid_coin":"uquid-coin","small-love-potion":"smooth-love-potion","dia-data":"dia","sol-collector-crypt":"collector-crypt","bnb-attestation-service":"bnb-attestation-service","sol-ore-new":"ore-new","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","terra-virtua-kolekt":"vanar","melon":"enzyme","ethos":"voyager-token","sol-lolonsol":"lolonsol","scroll-v2":"scroll","ton-crystal":"everscale","omisego":"omg","funfair":"funtoken","sol-wojak-sol":"wojak-sol","sol-avici":"avici","sol-the-white-whale":"the-white-whale","sol-graphite-protocol":"graphite-protocol","sol-zeta":"zeta","p-ixt-token":"ix-token","aavegotchi-ghst-token":"aavegotchi","sol-war":"war","sol-mori-coin":"mori-coin","neutrino-dollar":"neutrino-usd","sol-dowge":"dowge","sol-agenda-47":"agenda-47","sol-nietzschean-penguin":"nietzschean-penguin","sol-nobody-sausage":"nobody-sausage","sol-verse-world":"verse-world","sol-mobyscreener":"mobyscreener","sol-cudis":"cudis","machine-xchange-coin":"mxc","sun-contract":"suncontract","sol-unstable-coin-sol":"unstable-coin-sol","chronotech":"chrono-tech","monolith":"tokencard","sol-uranus-coin":"uranus-coin","forceprotocol":"the-force-protocol","bnb-swipe":"sxp","swipe":"sxp","sol-agi-alpha-agent":"agi-alpha-agent","sol-estatex":"estatex","sol-labubu-xyz":"labubu-xyz","sol-kokok-the-roach":"kokok-the-roach","p-klima-dao":"klimadao","sol-moonpig":"moonpig","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-startupcoin":"startupcoin","perl-eco":"perlin","sol-hosico":"hosico","sol-2131kobushide":"2131kobushide","sol-hyperpigmentation":"hyperpigmentation","paccoin":"pac-protocol","synternet-v2":"synternet","sol-yeti":"yeti","sol-dinosol":"dinosol","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","mantra-dao":"mantra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
