<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","curve":"curve-dao-token","arb-curve":"curve-dao-token","injective-protocol":"injective","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","o-optimism":"optimism-ethereum","luna":"terra-luna","sol-monad":"monad","sol-zebec-network":"zebec-network","gala-v2":"gala","sol-raydium":"raydium","sol-solana-mobile-seeker":"solana-mobile-seeker","o-synthetix-network-token":"synthetix","zencash":"horizen","sol-yzy":"yzy","sol-meteora":"meteora","sol-loaded-lions":"loaded-lions","sol-light":"light","sol-soon":"soon","bnb-sushi":"bsc-sushi","sushi":"sushiswap","arb-sushi":"sushiswap","sol-huma-finance":"huma-finance","sol-the-white-whale":"the-white-whale","sol-theuselesscoin":"theuselesscoin","sol-war":"war","rif-token":"rsk-infrastructure-framework","hive":"hive-blockchain","bounce":"bounce-token","uquid_coin":"uquid-coin","sol-ore-new":"ore-new","sol-humidifi":"humidifi","dia-data":"dia","small-love-potion":"smooth-love-potion","bnb-attestation-service":"bnb-attestation-service","smart-bitcoin":"rsk-smart-bitcoin","bnb-swipe":"sxp","swipe":"sxp","sol-collector-crypt":"collector-crypt","zcoin":"firo","funfair":"funtoken","terra-virtua-kolekt":"vanar","melon":"enzyme","ethos":"voyager-token","p-ixt-token":"ix-token","sol-avici":"avici","scroll-v2":"scroll","sol-graphite-protocol":"graphite-protocol","omisego":"omg","sol-wojak-sol":"wojak-sol","sol-zeta":"zeta","sol-agenda-47":"agenda-47","ton-crystal":"everscale","sol-dowge":"dowge","sol-nietzschean-penguin":"nietzschean-penguin","sol-mori-coin":"mori-coin","sol-nobody-sausage":"nobody-sausage","aavegotchi-ghst-token":"aavegotchi","neutrino-dollar":"neutrino-usd","sol-verse-world":"verse-world","sol-agi-alpha-agent":"agi-alpha-agent","sol-mobyscreener":"mobyscreener","machine-xchange-coin":"mxc","sol-cudis":"cudis","sol-unstable-coin-sol":"unstable-coin-sol","chronotech":"chrono-tech","monolith":"tokencard","sun-contract":"suncontract","sol-uranus-coin":"uranus-coin","sol-labubu-xyz":"labubu-xyz","sol-estatex":"estatex","sol-2131kobushide":"2131kobushide","sol-moonpig":"moonpig","sol-kokok-the-roach":"kokok-the-roach","forceprotocol":"the-force-protocol","p-klima-dao":"klimadao","sol-hosico":"hosico","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","paccoin":"pac-protocol","perl-eco":"perlin","sol-hyperpigmentation":"hyperpigmentation","sol-startupcoin":"startupcoin","sol-dinosol":"dinosol","synternet-v2":"synternet","sol-yeti":"yeti","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","mantra-dao":"mantra","stasis-euro":"stasis-eurs","reddcoin":"redd","yobit":"yobit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
