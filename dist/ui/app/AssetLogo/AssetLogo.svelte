<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","file-coin":"filecoin","gatechain-token":"gatetoken","sol-pump-fun":"pump-fun","luna":"terra-luna","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","sol-monad":"monad","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-zebec-network":"zebec-network","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","o-optimism":"optimism-ethereum","sol-raydium":"raydium","gala-v2":"gala","zencash":"horizen","o-synthetix-network-token":"synthetix","sol-light":"light","sol-yzy":"yzy","sol-meteora":"meteora","sol-soon":"soon","sol-solana-mobile-seeker":"solana-mobile-seeker","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-huma-finance":"huma-finance","rif-token":"rsk-infrastructure-framework","sol-loaded-lions":"loaded-lions","sol-collector-crypt":"collector-crypt","sol-theuselesscoin":"theuselesscoin","bnb-attestation-service":"bnb-attestation-service","sol-backpack-exchange":"backpack-exchange","hive":"hive-blockchain","bounce":"bounce-token","sol-ore-new":"ore-new","small-love-potion":"smooth-love-potion","uquid_coin":"uquid-coin","dia-data":"dia","zcoin":"firo","sol-humidifi":"humidifi","smart-bitcoin":"rsk-smart-bitcoin","terra-virtua-kolekt":"vanar","ethos":"voyager-token","sol-unstable-coin-sol":"unstable-coin-sol","sol-avici":"avici","melon":"enzyme","scroll-v2":"scroll","omisego":"omg","sol-the-white-whale":"the-white-whale","sol-nobody-sausage":"nobody-sausage","sol-graphite-protocol":"graphite-protocol","ton-crystal":"everscale","sol-zeta":"zeta","p-ixt-token":"ix-token","funfair":"funtoken","sol-nietzschean-penguin":"nietzschean-penguin","sol-wojak-sol":"wojak-sol","neutrino-dollar":"neutrino-usd","aavegotchi-ghst-token":"aavegotchi","sol-dowge":"dowge","sol-mori-coin":"mori-coin","sol-verse-world":"verse-world","sol-agenda-47":"agenda-47","sol-mobyscreener":"mobyscreener","sol-war":"war","sol-lolonsol":"lolonsol","sol-cudis":"cudis","sol-uranus-coin":"uranus-coin","monolith":"tokencard","chronotech":"chrono-tech","sun-contract":"suncontract","bnb-swipe":"sxp","swipe":"sxp","sol-agi-alpha-agent":"agi-alpha-agent","sol-labubu-xyz":"labubu-xyz","sol-estatex":"estatex","machine-xchange-coin":"mxc","sol-kokok-the-roach":"kokok-the-roach","p-klima-dao":"klimadao","sol-moonpig":"moonpig","shroom-finance":"niftyx-protocol","sol-startupcoin":"startupcoin","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","perl-eco":"perlin","forceprotocol":"the-force-protocol","sol-hosico":"hosico","sol-hyperpigmentation":"hyperpigmentation","paccoin":"pac-protocol","sol-2131kobushide":"2131kobushide","synternet-v2":"synternet","sol-yeti":"yeti","sol-dinosol":"dinosol","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","mantra-dao":"mantra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
