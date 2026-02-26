<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","curve":"curve-dao-token","arb-curve":"curve-dao-token","injective-protocol":"injective","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","o-optimism":"optimism-ethereum","sol-monad":"monad","sol-zebec-network":"zebec-network","luna":"terra-luna","gala-v2":"gala","sol-raydium":"raydium","o-synthetix-network-token":"synthetix","sol-solana-mobile-seeker":"solana-mobile-seeker","zencash":"horizen","sol-yzy":"yzy","sol-meteora":"meteora","sol-loaded-lions":"loaded-lions","sol-light":"light","mantra-dao":"mantra","sol-soon":"soon","sushi":"sushiswap","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","sol-the-white-whale":"the-white-whale","sol-theuselesscoin":"theuselesscoin","hive":"hive-blockchain","rif-token":"rsk-infrastructure-framework","bounce":"bounce-token","sol-huma-finance":"huma-finance","sol-ore-new":"ore-new","uquid_coin":"uquid-coin","sol-humidifi":"humidifi","dia-data":"dia","small-love-potion":"smooth-love-potion","sol-war":"war","swipe":"sxp","bnb-swipe":"sxp","smart-bitcoin":"rsk-smart-bitcoin","bnb-attestation-service":"bnb-attestation-service","zcoin":"firo","sol-collector-crypt":"collector-crypt","funfair":"funtoken","sol-avici":"avici","terra-virtua-kolekt":"vanar","p-ixt-token":"ix-token","ethos":"voyager-token","melon":"enzyme","scroll-v2":"scroll","omisego":"omg","sol-agenda-47":"agenda-47","sol-wojak-sol":"wojak-sol","sol-graphite-protocol":"graphite-protocol","sol-zeta":"zeta","sol-nietzschean-penguin":"nietzschean-penguin","ton-crystal":"everscale","sol-mori-coin":"mori-coin","sol-nobody-sausage":"nobody-sausage","aavegotchi-ghst-token":"aavegotchi","sol-dowge":"dowge","sol-verse-world":"verse-world","neutrino-dollar":"neutrino-usd","machine-xchange-coin":"mxc","sol-mobyscreener":"mobyscreener","sol-cudis":"cudis","sol-agi-alpha-agent":"agi-alpha-agent","sol-unstable-coin-sol":"unstable-coin-sol","chronotech":"chrono-tech","sun-contract":"suncontract","sol-uranus-coin":"uranus-coin","monolith":"tokencard","sol-labubu-xyz":"labubu-xyz","sol-estatex":"estatex","sol-2131kobushide":"2131kobushide","sol-moonpig":"moonpig","sol-kokok-the-roach":"kokok-the-roach","p-klima-dao":"klimadao","sol-hosico":"hosico","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","perl-eco":"perlin","sol-hyperpigmentation":"hyperpigmentation","paccoin":"pac-protocol","synternet-v2":"synternet","sol-startupcoin":"startupcoin","sol-dinosol":"dinosol","sol-yeti":"yeti","super-zero":"super-zero-protocol","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","stasis-euro":"stasis-eurs","yobit":"yobit-token","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
