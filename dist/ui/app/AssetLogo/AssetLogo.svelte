<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","arb-curve":"curve-dao-token","curve":"curve-dao-token","injective-protocol":"injective","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","o-optimism":"optimism-ethereum","sol-monad":"monad","luna":"terra-luna","sol-zebec-network":"zebec-network","sol-raydium":"raydium","gala-v2":"gala","sol-solana-mobile-seeker":"solana-mobile-seeker","o-synthetix-network-token":"synthetix","zencash":"horizen","sol-yzy":"yzy","sol-loaded-lions":"loaded-lions","sol-light":"light","sol-meteora":"meteora","sol-soon":"soon","arb-sushi":"sushiswap","sushi":"sushiswap","bnb-sushi":"bsc-sushi","sol-huma-finance":"huma-finance","sol-the-white-whale":"the-white-whale","sol-theuselesscoin":"theuselesscoin","rif-token":"rsk-infrastructure-framework","hive":"hive-blockchain","bounce":"bounce-token","uquid_coin":"uquid-coin","sol-war":"war","sol-ore-new":"ore-new","sol-humidifi":"humidifi","dia-data":"dia","bnb-attestation-service":"bnb-attestation-service","small-love-potion":"smooth-love-potion","swipe":"sxp","bnb-swipe":"sxp","smart-bitcoin":"rsk-smart-bitcoin","funfair":"funtoken","melon":"enzyme","sol-avici":"avici","sol-collector-crypt":"collector-crypt","zcoin":"firo","terra-virtua-kolekt":"vanar","ethos":"voyager-token","p-ixt-token":"ix-token","omisego":"omg","sol-graphite-protocol":"graphite-protocol","scroll-v2":"scroll","sol-zeta":"zeta","sol-agenda-47":"agenda-47","sol-nietzschean-penguin":"nietzschean-penguin","ton-crystal":"everscale","sol-mori-coin":"mori-coin","sol-nobody-sausage":"nobody-sausage","sol-dowge":"dowge","aavegotchi-ghst-token":"aavegotchi","sol-wojak-sol":"wojak-sol","neutrino-dollar":"neutrino-usd","sol-agi-alpha-agent":"agi-alpha-agent","sol-verse-world":"verse-world","sol-mobyscreener":"mobyscreener","sol-unstable-coin-sol":"unstable-coin-sol","machine-xchange-coin":"mxc","chronotech":"chrono-tech","sol-cudis":"cudis","sun-contract":"suncontract","monolith":"tokencard","sol-uranus-coin":"uranus-coin","sol-estatex":"estatex","sol-labubu-xyz":"labubu-xyz","sol-moonpig":"moonpig","sol-kokok-the-roach":"kokok-the-roach","p-klima-dao":"klimadao","sol-hosico":"hosico","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-2131kobushide":"2131kobushide","perl-eco":"perlin","sol-startupcoin":"startupcoin","sol-hyperpigmentation":"hyperpigmentation","paccoin":"pac-protocol","sol-dinosol":"dinosol","synternet-v2":"synternet","sol-yeti":"yeti","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","mantra-dao":"mantra","stasis-euro":"stasis-eurs","reddcoin":"redd","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
