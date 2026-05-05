<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","luna":"terra-luna","sol-pump-fun":"pump-fun","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","sol-monad":"monad","injective-protocol":"injective","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-zebec-network":"zebec-network","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","o-optimism":"optimism-ethereum","sol-raydium":"raydium","gala-v2":"gala","zencash":"horizen","o-synthetix-network-token":"synthetix","sol-light":"light","sol-yzy":"yzy","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-meteora":"meteora","sol-soon":"soon","sol-huma-finance":"huma-finance","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-collector-crypt":"collector-crypt","sol-loaded-lions":"loaded-lions","rif-token":"rsk-infrastructure-framework","bnb-attestation-service":"bnb-attestation-service","sol-theuselesscoin":"theuselesscoin","hive":"hive-blockchain","sol-backpack-exchange":"backpack-exchange","bounce":"bounce-token","uquid_coin":"uquid-coin","sol-ore-new":"ore-new","small-love-potion":"smooth-love-potion","dia-data":"dia","sol-humidifi":"humidifi","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","sol-avici":"avici","ethos":"voyager-token","terra-virtua-kolekt":"vanar","melon":"enzyme","scroll-v2":"scroll","omisego":"omg","sol-the-white-whale":"the-white-whale","sol-graphite-protocol":"graphite-protocol","ton-crystal":"everscale","sol-nobody-sausage":"nobody-sausage","sol-zeta":"zeta","p-ixt-token":"ix-token","sol-wojak-sol":"wojak-sol","funfair":"funtoken","neutrino-dollar":"neutrino-usd","aavegotchi-ghst-token":"aavegotchi","sol-dowge":"dowge","sol-lolonsol":"lolonsol","sol-mori-coin":"mori-coin","sol-verse-world":"verse-world","sol-agenda-47":"agenda-47","sol-war":"war","sol-mobyscreener":"mobyscreener","sol-nietzschean-penguin":"nietzschean-penguin","sol-unstable-coin-sol":"unstable-coin-sol","sol-cudis":"cudis","chronotech":"chrono-tech","sol-uranus-coin":"uranus-coin","monolith":"tokencard","sun-contract":"suncontract","sol-agi-alpha-agent":"agi-alpha-agent","bnb-swipe":"sxp","swipe":"sxp","machine-xchange-coin":"mxc","sol-labubu-xyz":"labubu-xyz","sol-estatex":"estatex","sol-kokok-the-roach":"kokok-the-roach","p-klima-dao":"klimadao","sol-moonpig":"moonpig","shroom-finance":"niftyx-protocol","sol-launch-coin-on-believe":"launch-coin-on-believe","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-startupcoin":"startupcoin","perl-eco":"perlin","forceprotocol":"the-force-protocol","sol-hosico":"hosico","sol-2131kobushide":"2131kobushide","sol-hyperpigmentation":"hyperpigmentation","paccoin":"pac-protocol","synternet-v2":"synternet","sol-dinosol":"dinosol","sol-yeti":"yeti","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","mantra-dao":"mantra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
