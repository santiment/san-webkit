<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","curve":"curve-dao-token","arb-curve":"curve-dao-token","injective-protocol":"injective","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","o-optimism":"optimism-ethereum","sol-monad":"monad","luna":"terra-luna","sol-zebec-network":"zebec-network","sol-raydium":"raydium","gala-v2":"gala","sol-solana-mobile-seeker":"solana-mobile-seeker","o-synthetix-network-token":"synthetix","zencash":"horizen","sol-yzy":"yzy","sol-light":"light","sol-loaded-lions":"loaded-lions","sol-meteora":"meteora","sol-soon":"soon","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-huma-finance":"huma-finance","rif-token":"rsk-infrastructure-framework","sol-theuselesscoin":"theuselesscoin","hive":"hive-blockchain","bounce":"bounce-token","sol-the-white-whale":"the-white-whale","uquid_coin":"uquid-coin","sol-humidifi":"humidifi","sol-ore-new":"ore-new","small-love-potion":"smooth-love-potion","dia-data":"dia","bnb-attestation-service":"bnb-attestation-service","sol-war":"war","smart-bitcoin":"rsk-smart-bitcoin","sol-collector-crypt":"collector-crypt","funfair":"funtoken","terra-virtua-kolekt":"vanar","zcoin":"firo","melon":"enzyme","ethos":"voyager-token","sol-avici":"avici","scroll-v2":"scroll","omisego":"omg","sol-zeta":"zeta","sol-graphite-protocol":"graphite-protocol","bnb-swipe":"sxp","swipe":"sxp","p-ixt-token":"ix-token","sol-agenda-47":"agenda-47","ton-crystal":"everscale","sol-nietzschean-penguin":"nietzschean-penguin","sol-mori-coin":"mori-coin","sol-dowge":"dowge","sol-nobody-sausage":"nobody-sausage","sol-wojak-sol":"wojak-sol","aavegotchi-ghst-token":"aavegotchi","neutrino-dollar":"neutrino-usd","sol-agi-alpha-agent":"agi-alpha-agent","sol-verse-world":"verse-world","sol-mobyscreener":"mobyscreener","machine-xchange-coin":"mxc","chronotech":"chrono-tech","sol-cudis":"cudis","sol-unstable-coin-sol":"unstable-coin-sol","monolith":"tokencard","sun-contract":"suncontract","sol-uranus-coin":"uranus-coin","sol-labubu-xyz":"labubu-xyz","sol-estatex":"estatex","sol-hosico":"hosico","sol-kokok-the-roach":"kokok-the-roach","sol-moonpig":"moonpig","p-klima-dao":"klimadao","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","perl-eco":"perlin","sol-startupcoin":"startupcoin","sol-hyperpigmentation":"hyperpigmentation","sol-2131kobushide":"2131kobushide","forceprotocol":"the-force-protocol","paccoin":"pac-protocol","sol-dinosol":"dinosol","synternet-v2":"synternet","sol-yeti":"yeti","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","sol-ani-grok-companion":"ani-grok-companion","stasis-euro":"stasis-eurs","mantra-dao":"mantra","yobit":"yobit-token","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
