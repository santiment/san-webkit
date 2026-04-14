<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","sol-monad":"monad","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","arb-curve":"curve-dao-token","curve":"curve-dao-token","injective-protocol":"injective","sol-doublezero":"doublezero","floki-inu-v2":"floki-inu","sol-zebec-network":"zebec-network","o-optimism":"optimism-ethereum","luna":"terra-luna","sol-raydium":"raydium","gala-v2":"gala","zencash":"horizen","o-synthetix-network-token":"synthetix","sol-yzy":"yzy","sol-light":"light","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-loaded-lions":"loaded-lions","sol-meteora":"meteora","sol-soon":"soon","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-huma-finance":"huma-finance","sol-theuselesscoin":"theuselesscoin","rif-token":"rsk-infrastructure-framework","sol-backpack-exchange":"backpack-exchange","sol-humidifi":"humidifi","bounce":"bounce-token","sol-collector-crypt":"collector-crypt","hive":"hive-blockchain","uquid_coin":"uquid-coin","sol-ore-new":"ore-new","small-love-potion":"smooth-love-potion","dia-data":"dia","bnb-attestation-service":"bnb-attestation-service","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","terra-virtua-kolekt":"vanar","ethos":"voyager-token","melon":"enzyme","scroll-v2":"scroll","ton-crystal":"everscale","omisego":"omg","sol-wojak-sol":"wojak-sol","sol-lolonsol":"lolonsol","sol-avici":"avici","sol-the-white-whale":"the-white-whale","funfair":"funtoken","sol-graphite-protocol":"graphite-protocol","sol-zeta":"zeta","p-ixt-token":"ix-token","aavegotchi-ghst-token":"aavegotchi","sol-dowge":"dowge","sol-mori-coin":"mori-coin","neutrino-dollar":"neutrino-usd","sol-nietzschean-penguin":"nietzschean-penguin","sol-war":"war","sol-agenda-47":"agenda-47","sol-nobody-sausage":"nobody-sausage","sol-verse-world":"verse-world","sol-mobyscreener":"mobyscreener","sol-cudis":"cudis","machine-xchange-coin":"mxc","sun-contract":"suncontract","sol-unstable-coin-sol":"unstable-coin-sol","monolith":"tokencard","sol-uranus-coin":"uranus-coin","chronotech":"chrono-tech","forceprotocol":"the-force-protocol","bnb-swipe":"sxp","swipe":"sxp","sol-agi-alpha-agent":"agi-alpha-agent","sol-estatex":"estatex","sol-labubu-xyz":"labubu-xyz","sol-kokok-the-roach":"kokok-the-roach","p-klima-dao":"klimadao","sol-moonpig":"moonpig","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-startupcoin":"startupcoin","perl-eco":"perlin","sol-hosico":"hosico","sol-hyperpigmentation":"hyperpigmentation","sol-2131kobushide":"2131kobushide","paccoin":"pac-protocol","synternet-v2":"synternet","sol-dinosol":"dinosol","sol-yeti":"yeti","super-zero":"super-zero-protocol","sol-umbra":"umbra","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","mantra-dao":"mantra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
