<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","blockstack":"stacks","curve":"curve-dao-token","arb-curve":"curve-dao-token","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","floki-inu-v2":"floki-inu","o-optimism":"optimism-ethereum","sol-doublezero":"doublezero","sol-monad":"monad","luna":"terra-luna","sol-zebec-network":"zebec-network","gala-v2":"gala","sol-raydium":"raydium","sol-solana-mobile-seeker":"solana-mobile-seeker","o-synthetix-network-token":"synthetix","zencash":"horizen","sol-yzy":"yzy","sol-loaded-lions":"loaded-lions","sol-light":"light","sol-meteora":"meteora","sol-soon":"soon","sushi":"sushiswap","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sol-huma-finance":"huma-finance","sol-theuselesscoin":"theuselesscoin","sol-the-white-whale":"the-white-whale","rif-token":"rsk-infrastructure-framework","hive":"hive-blockchain","bounce":"bounce-token","sol-war":"war","uquid_coin":"uquid-coin","sol-ore-new":"ore-new","sol-humidifi":"humidifi","dia-data":"dia","small-love-potion":"smooth-love-potion","bnb-attestation-service":"bnb-attestation-service","smart-bitcoin":"rsk-smart-bitcoin","funfair":"funtoken","zcoin":"firo","swipe":"sxp","bnb-swipe":"sxp","sol-collector-crypt":"collector-crypt","terra-virtua-kolekt":"vanar","melon":"enzyme","p-ixt-token":"ix-token","ethos":"voyager-token","scroll-v2":"scroll","sol-avici":"avici","omisego":"omg","sol-graphite-protocol":"graphite-protocol","sol-zeta":"zeta","sol-wojak-sol":"wojak-sol","sol-agenda-47":"agenda-47","ton-crystal":"everscale","sol-dowge":"dowge","sol-mori-coin":"mori-coin","sol-nietzschean-penguin":"nietzschean-penguin","sol-nobody-sausage":"nobody-sausage","aavegotchi-ghst-token":"aavegotchi","sol-verse-world":"verse-world","neutrino-dollar":"neutrino-usd","sol-agi-alpha-agent":"agi-alpha-agent","sol-mobyscreener":"mobyscreener","machine-xchange-coin":"mxc","sol-cudis":"cudis","sol-unstable-coin-sol":"unstable-coin-sol","chronotech":"chrono-tech","monolith":"tokencard","sun-contract":"suncontract","sol-uranus-coin":"uranus-coin","sol-labubu-xyz":"labubu-xyz","sol-estatex":"estatex","sol-2131kobushide":"2131kobushide","sol-moonpig":"moonpig","sol-kokok-the-roach":"kokok-the-roach","p-klima-dao":"klimadao","sol-hosico":"hosico","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","paccoin":"pac-protocol","sol-launch-coin-on-believe":"launch-coin-on-believe","perl-eco":"perlin","sol-hyperpigmentation":"hyperpigmentation","sol-startupcoin":"startupcoin","sol-dinosol":"dinosol","synternet-v2":"synternet","sol-yeti":"yeti","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","mantra-dao":"mantra","stasis-euro":"stasis-eurs","reddcoin":"redd","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
