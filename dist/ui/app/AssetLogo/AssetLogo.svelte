<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","sol-pump-fun":"pump-fun","file-coin":"filecoin","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","arb-curve":"curve-dao-token","curve":"curve-dao-token","injective-protocol":"injective","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","o-optimism":"optimism-ethereum","sol-monad":"monad","luna":"terra-luna","sol-zebec-network":"zebec-network","sol-raydium":"raydium","gala-v2":"gala","sol-solana-mobile-seeker":"solana-mobile-seeker","o-synthetix-network-token":"synthetix","sol-yzy":"yzy","zencash":"horizen","sol-loaded-lions":"loaded-lions","sol-light":"light","sol-meteora":"meteora","sol-soon":"soon","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","sushi":"sushiswap","sol-huma-finance":"huma-finance","sol-the-white-whale":"the-white-whale","sol-theuselesscoin":"theuselesscoin","rif-token":"rsk-infrastructure-framework","hive":"hive-blockchain","bounce":"bounce-token","uquid_coin":"uquid-coin","sol-humidifi":"humidifi","sol-ore-new":"ore-new","sol-war":"war","bnb-attestation-service":"bnb-attestation-service","dia-data":"dia","small-love-potion":"smooth-love-potion","smart-bitcoin":"rsk-smart-bitcoin","swipe":"sxp","bnb-swipe":"sxp","funfair":"funtoken","sol-collector-crypt":"collector-crypt","melon":"enzyme","zcoin":"firo","sol-avici":"avici","terra-virtua-kolekt":"vanar","ethos":"voyager-token","p-ixt-token":"ix-token","omisego":"omg","scroll-v2":"scroll","sol-graphite-protocol":"graphite-protocol","sol-zeta":"zeta","ton-crystal":"everscale","sol-nietzschean-penguin":"nietzschean-penguin","sol-mori-coin":"mori-coin","sol-dowge":"dowge","sol-nobody-sausage":"nobody-sausage","sol-agenda-47":"agenda-47","aavegotchi-ghst-token":"aavegotchi","sol-wojak-sol":"wojak-sol","neutrino-dollar":"neutrino-usd","sol-agi-alpha-agent":"agi-alpha-agent","sol-verse-world":"verse-world","sol-mobyscreener":"mobyscreener","machine-xchange-coin":"mxc","sol-cudis":"cudis","sol-unstable-coin-sol":"unstable-coin-sol","chronotech":"chrono-tech","sun-contract":"suncontract","monolith":"tokencard","sol-uranus-coin":"uranus-coin","sol-estatex":"estatex","sol-labubu-xyz":"labubu-xyz","sol-hosico":"hosico","sol-moonpig":"moonpig","sol-kokok-the-roach":"kokok-the-roach","p-klima-dao":"klimadao","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-2131kobushide":"2131kobushide","perl-eco":"perlin","sol-startupcoin":"startupcoin","sol-hyperpigmentation":"hyperpigmentation","paccoin":"pac-protocol","sol-dinosol":"dinosol","synternet-v2":"synternet","sol-yeti":"yeti","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","mantra-dao":"mantra","stasis-euro":"stasis-eurs","reddcoin":"redd","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
