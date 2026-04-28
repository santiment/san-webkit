<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","sol-first-digital-usd":"first-digital-usd","blockstack":"stacks","sol-zebec-network":"zebec-network","injective-protocol":"injective","luna":"terra-luna","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-monad":"monad","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","o-optimism":"optimism-ethereum","sol-raydium":"raydium","gala-v2":"gala","o-synthetix-network-token":"synthetix","zencash":"horizen","sol-light":"light","sol-yzy":"yzy","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-soon":"soon","sol-meteora":"meteora","sol-huma-finance":"huma-finance","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-loaded-lions":"loaded-lions","rif-token":"rsk-infrastructure-framework","sol-theuselesscoin":"theuselesscoin","sol-backpack-exchange":"backpack-exchange","bnb-attestation-service":"bnb-attestation-service","bounce":"bounce-token","hive":"hive-blockchain","sol-collector-crypt":"collector-crypt","uquid_coin":"uquid-coin","small-love-potion":"smooth-love-potion","sol-ore-new":"ore-new","dia-data":"dia","sol-humidifi":"humidifi","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","terra-virtua-kolekt":"vanar","ethos":"voyager-token","melon":"enzyme","scroll-v2":"scroll","omisego":"omg","sol-avici":"avici","sol-the-white-whale":"the-white-whale","sol-graphite-protocol":"graphite-protocol","ton-crystal":"everscale","sol-zeta":"zeta","p-ixt-token":"ix-token","neutrino-dollar":"neutrino-usd","sol-nobody-sausage":"nobody-sausage","aavegotchi-ghst-token":"aavegotchi","funfair":"funtoken","sol-mori-coin":"mori-coin","sol-war":"war","sol-wojak-sol":"wojak-sol","sol-verse-world":"verse-world","sol-agenda-47":"agenda-47","sol-dowge":"dowge","sol-nietzschean-penguin":"nietzschean-penguin","sol-lolonsol":"lolonsol","sol-unstable-coin-sol":"unstable-coin-sol","sol-cudis":"cudis","sun-contract":"suncontract","sol-mobyscreener":"mobyscreener","machine-xchange-coin":"mxc","monolith":"tokencard","sol-uranus-coin":"uranus-coin","bnb-swipe":"sxp","swipe":"sxp","sol-agi-alpha-agent":"agi-alpha-agent","chronotech":"chrono-tech","sol-labubu-xyz":"labubu-xyz","sol-estatex":"estatex","sol-kokok-the-roach":"kokok-the-roach","p-klima-dao":"klimadao","sol-moonpig":"moonpig","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-startupcoin":"startupcoin","perl-eco":"perlin","sol-hosico":"hosico","sol-2131kobushide":"2131kobushide","paccoin":"pac-protocol","sol-hyperpigmentation":"hyperpigmentation","forceprotocol":"the-force-protocol","synternet-v2":"synternet","sol-yeti":"yeti","sol-dinosol":"dinosol","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","sol-ani-grok-companion":"ani-grok-companion","mantra-dao":"mantra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
