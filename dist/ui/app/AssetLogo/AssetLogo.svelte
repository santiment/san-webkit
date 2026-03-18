<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","curve":"curve-dao-token","arb-curve":"curve-dao-token","injective-protocol":"injective","floki-inu-v2":"floki-inu","o-optimism":"optimism-ethereum","sol-doublezero":"doublezero","sol-monad":"monad","luna":"terra-luna","sol-zebec-network":"zebec-network","sol-raydium":"raydium","gala-v2":"gala","sol-solana-mobile-seeker":"solana-mobile-seeker","zencash":"horizen","o-synthetix-network-token":"synthetix","sol-yzy":"yzy","sol-light":"light","sol-loaded-lions":"loaded-lions","sol-meteora":"meteora","sol-soon":"soon","bnb-sushi":"bsc-sushi","sushi":"sushiswap","arb-sushi":"sushiswap","sol-huma-finance":"huma-finance","sol-theuselesscoin":"theuselesscoin","rif-token":"rsk-infrastructure-framework","hive":"hive-blockchain","bounce":"bounce-token","sol-the-white-whale":"the-white-whale","uquid_coin":"uquid-coin","sol-ore-new":"ore-new","sol-humidifi":"humidifi","dia-data":"dia","small-love-potion":"smooth-love-potion","bnb-attestation-service":"bnb-attestation-service","sol-war":"war","smart-bitcoin":"rsk-smart-bitcoin","terra-virtua-kolekt":"vanar","sol-collector-crypt":"collector-crypt","funfair":"funtoken","zcoin":"firo","melon":"enzyme","ethos":"voyager-token","sol-avici":"avici","scroll-v2":"scroll","omisego":"omg","p-ixt-token":"ix-token","sol-graphite-protocol":"graphite-protocol","sol-zeta":"zeta","ton-crystal":"everscale","swipe":"sxp","bnb-swipe":"sxp","sol-agenda-47":"agenda-47","sol-nietzschean-penguin":"nietzschean-penguin","sol-mori-coin":"mori-coin","sol-wojak-sol":"wojak-sol","sol-nobody-sausage":"nobody-sausage","sol-dowge":"dowge","aavegotchi-ghst-token":"aavegotchi","neutrino-dollar":"neutrino-usd","sol-agi-alpha-agent":"agi-alpha-agent","sol-verse-world":"verse-world","sol-mobyscreener":"mobyscreener","machine-xchange-coin":"mxc","chronotech":"chrono-tech","sol-cudis":"cudis","sol-unstable-coin-sol":"unstable-coin-sol","monolith":"tokencard","sun-contract":"suncontract","sol-uranus-coin":"uranus-coin","sol-labubu-xyz":"labubu-xyz","sol-estatex":"estatex","sol-hosico":"hosico","sol-kokok-the-roach":"kokok-the-roach","sol-moonpig":"moonpig","p-klima-dao":"klimadao","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","perl-eco":"perlin","sol-startupcoin":"startupcoin","sol-hyperpigmentation":"hyperpigmentation","sol-2131kobushide":"2131kobushide","paccoin":"pac-protocol","sol-dinosol":"dinosol","sol-yeti":"yeti","synternet-v2":"synternet","forceprotocol":"the-force-protocol","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","stasis-euro":"stasis-eurs","mantra-dao":"mantra","reddcoin":"redd","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
