<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","sol-first-digital-usd":"first-digital-usd","blockstack":"stacks","luna":"terra-luna","arb-curve":"curve-dao-token","curve":"curve-dao-token","injective-protocol":"injective","sol-zebec-network":"zebec-network","sol-monad":"monad","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","o-optimism":"optimism-ethereum","sol-raydium":"raydium","gala-v2":"gala","o-synthetix-network-token":"synthetix","zencash":"horizen","sol-light":"light","sol-yzy":"yzy","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-soon":"soon","sol-meteora":"meteora","sol-huma-finance":"huma-finance","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","rif-token":"rsk-infrastructure-framework","sol-loaded-lions":"loaded-lions","bnb-attestation-service":"bnb-attestation-service","sol-theuselesscoin":"theuselesscoin","sol-backpack-exchange":"backpack-exchange","sol-collector-crypt":"collector-crypt","bounce":"bounce-token","hive":"hive-blockchain","uquid_coin":"uquid-coin","small-love-potion":"smooth-love-potion","sol-ore-new":"ore-new","dia-data":"dia","sol-humidifi":"humidifi","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","terra-virtua-kolekt":"vanar","ethos":"voyager-token","sol-avici":"avici","melon":"enzyme","omisego":"omg","scroll-v2":"scroll","sol-the-white-whale":"the-white-whale","sol-graphite-protocol":"graphite-protocol","ton-crystal":"everscale","p-ixt-token":"ix-token","sol-zeta":"zeta","neutrino-dollar":"neutrino-usd","funfair":"funtoken","aavegotchi-ghst-token":"aavegotchi","sol-nobody-sausage":"nobody-sausage","sol-war":"war","sol-wojak-sol":"wojak-sol","sol-mori-coin":"mori-coin","sol-verse-world":"verse-world","sol-agenda-47":"agenda-47","sol-dowge":"dowge","sol-nietzschean-penguin":"nietzschean-penguin","chronotech":"chrono-tech","sol-cudis":"cudis","sol-lolonsol":"lolonsol","sun-contract":"suncontract","sol-unstable-coin-sol":"unstable-coin-sol","sol-mobyscreener":"mobyscreener","monolith":"tokencard","machine-xchange-coin":"mxc","sol-uranus-coin":"uranus-coin","bnb-swipe":"sxp","swipe":"sxp","sol-agi-alpha-agent":"agi-alpha-agent","sol-labubu-xyz":"labubu-xyz","sol-estatex":"estatex","sol-kokok-the-roach":"kokok-the-roach","p-klima-dao":"klimadao","sol-moonpig":"moonpig","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-startupcoin":"startupcoin","perl-eco":"perlin","forceprotocol":"the-force-protocol","sol-hosico":"hosico","sol-2131kobushide":"2131kobushide","sol-hyperpigmentation":"hyperpigmentation","paccoin":"pac-protocol","synternet-v2":"synternet","sol-yeti":"yeti","sol-dinosol":"dinosol","super-zero":"super-zero-protocol","sol-umbra":"umbra","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","mantra-dao":"mantra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
