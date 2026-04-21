<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","sol-first-digital-usd":"first-digital-usd","blockstack":"stacks","sol-monad":"monad","arb-curve":"curve-dao-token","curve":"curve-dao-token","injective-protocol":"injective","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","sol-zebec-network":"zebec-network","o-optimism":"optimism-ethereum","luna":"terra-luna","sol-raydium":"raydium","gala-v2":"gala","zencash":"horizen","o-synthetix-network-token":"synthetix","sol-light":"light","sol-yzy":"yzy","sol-meteora":"meteora","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-soon":"soon","sol-loaded-lions":"loaded-lions","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-huma-finance":"huma-finance","rif-token":"rsk-infrastructure-framework","sol-theuselesscoin":"theuselesscoin","sol-backpack-exchange":"backpack-exchange","hive":"hive-blockchain","bounce":"bounce-token","bnb-attestation-service":"bnb-attestation-service","uquid_coin":"uquid-coin","small-love-potion":"smooth-love-potion","sol-ore-new":"ore-new","sol-humidifi":"humidifi","dia-data":"dia","sol-collector-crypt":"collector-crypt","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","terra-virtua-kolekt":"vanar","ethos":"voyager-token","melon":"enzyme","omisego":"omg","scroll-v2":"scroll","ton-crystal":"everscale","sol-the-white-whale":"the-white-whale","sol-graphite-protocol":"graphite-protocol","p-ixt-token":"ix-token","sol-zeta":"zeta","sol-wojak-sol":"wojak-sol","sol-avici":"avici","funfair":"funtoken","aavegotchi-ghst-token":"aavegotchi","neutrino-dollar":"neutrino-usd","sol-war":"war","sol-mori-coin":"mori-coin","sol-dowge":"dowge","sol-verse-world":"verse-world","sol-nobody-sausage":"nobody-sausage","sol-nietzschean-penguin":"nietzschean-penguin","sol-agenda-47":"agenda-47","sol-lolonsol":"lolonsol","sol-unstable-coin-sol":"unstable-coin-sol","chronotech":"chrono-tech","sol-mobyscreener":"mobyscreener","sol-cudis":"cudis","machine-xchange-coin":"mxc","sun-contract":"suncontract","monolith":"tokencard","sol-uranus-coin":"uranus-coin","forceprotocol":"the-force-protocol","bnb-swipe":"sxp","swipe":"sxp","sol-agi-alpha-agent":"agi-alpha-agent","sol-labubu-xyz":"labubu-xyz","sol-estatex":"estatex","sol-kokok-the-roach":"kokok-the-roach","p-klima-dao":"klimadao","sol-moonpig":"moonpig","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","sol-startupcoin":"startupcoin","perl-eco":"perlin","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-hosico":"hosico","sol-2131kobushide":"2131kobushide","sol-hyperpigmentation":"hyperpigmentation","paccoin":"pac-protocol","synternet-v2":"synternet","sol-yeti":"yeti","sol-dinosol":"dinosol","super-zero":"super-zero-protocol","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","sol-bullish-degen":"bullish-degen","mantra-dao":"mantra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
