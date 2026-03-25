<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","arb-curve":"curve-dao-token","curve":"curve-dao-token","injective-protocol":"injective","floki-inu-v2":"floki-inu","sol-monad":"monad","sol-doublezero":"doublezero","o-optimism":"optimism-ethereum","sol-zebec-network":"zebec-network","luna":"terra-luna","sol-raydium":"raydium","gala-v2":"gala","sol-solana-mobile-seeker":"solana-mobile-seeker","o-synthetix-network-token":"synthetix","zencash":"horizen","sol-yzy":"yzy","sol-light":"light","sol-loaded-lions":"loaded-lions","sol-meteora":"meteora","sol-huma-finance":"huma-finance","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","sol-soon":"soon","rif-token":"rsk-infrastructure-framework","sol-theuselesscoin":"theuselesscoin","hive":"hive-blockchain","bounce":"bounce-token","sol-the-white-whale":"the-white-whale","bnb-attestation-service":"bnb-attestation-service","uquid_coin":"uquid-coin","sol-humidifi":"humidifi","small-love-potion":"smooth-love-potion","dia-data":"dia","sol-ore-new":"ore-new","sol-collector-crypt":"collector-crypt","smart-bitcoin":"rsk-smart-bitcoin","funfair":"funtoken","terra-virtua-kolekt":"vanar","zcoin":"firo","melon":"enzyme","ethos":"voyager-token","sol-avici":"avici","sol-graphite-protocol":"graphite-protocol","scroll-v2":"scroll","sol-war":"war","omisego":"omg","p-ixt-token":"ix-token","sol-zeta":"zeta","ton-crystal":"everscale","swipe":"sxp","bnb-swipe":"sxp","sol-agenda-47":"agenda-47","sol-mori-coin":"mori-coin","sol-dowge":"dowge","neutrino-dollar":"neutrino-usd","sol-nobody-sausage":"nobody-sausage","aavegotchi-ghst-token":"aavegotchi","sol-nietzschean-penguin":"nietzschean-penguin","sol-verse-world":"verse-world","sol-wojak-sol":"wojak-sol","sol-mobyscreener":"mobyscreener","machine-xchange-coin":"mxc","chronotech":"chrono-tech","sol-cudis":"cudis","sol-unstable-coin-sol":"unstable-coin-sol","monolith":"tokencard","sun-contract":"suncontract","sol-labubu-xyz":"labubu-xyz","sol-uranus-coin":"uranus-coin","sol-agi-alpha-agent":"agi-alpha-agent","sol-estatex":"estatex","sol-kokok-the-roach":"kokok-the-roach","p-klima-dao":"klimadao","sol-moonpig":"moonpig","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-hosico":"hosico","perl-eco":"perlin","sol-startupcoin":"startupcoin","sol-hyperpigmentation":"hyperpigmentation","paccoin":"pac-protocol","forceprotocol":"the-force-protocol","sol-2131kobushide":"2131kobushide","synternet-v2":"synternet","sol-dinosol":"dinosol","sol-yeti":"yeti","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","stasis-euro":"stasis-eurs","sol-ani-grok-companion":"ani-grok-companion","mantra-dao":"mantra","reddcoin":"redd","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
