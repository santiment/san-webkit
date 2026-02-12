<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","file-coin":"filecoin","sol-pump-fun":"pump-fun","blockstack":"stacks","sol-first-digital-usd":"first-digital-usd","o-optimism":"optimism-ethereum","arb-curve":"curve-dao-token","curve":"curve-dao-token","injective-protocol":"injective","floki-inu-v2":"floki-inu","sol-doublezero":"doublezero","sol-monad":"monad","sol-zebec-network":"zebec-network","gala-v2":"gala","luna":"terra-luna","sol-raydium":"raydium","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-meteora":"meteora","zencash":"horizen","sol-yzy":"yzy","o-synthetix-network-token":"synthetix","sol-loaded-lions":"loaded-lions","sol-the-white-whale":"the-white-whale","sol-soon":"soon","bnb-sushi":"bsc-sushi","sushi":"sushiswap","arb-sushi":"sushiswap","mantra-dao":"mantra","rif-token":"rsk-infrastructure-framework","hive":"hive-blockchain","sol-huma-finance":"huma-finance","bounce":"bounce-token","sol-theuselesscoin":"theuselesscoin","uquid_coin":"uquid-coin","sol-war":"war","sol-ore-new":"ore-new","dia-data":"dia","small-love-potion":"smooth-love-potion","sol-nietzschean-penguin":"nietzschean-penguin","sol-humidifi":"humidifi","BTRST":"braintrust","zcoin":"firo","sol-avici":"avici","smart-bitcoin":"rsk-smart-bitcoin","bnb-swipe":"sxp","swipe":"sxp","sol-collector-crypt":"collector-crypt","terra-virtua-kolekt":"vanar","funfair":"funtoken","bnb-attestation-service":"bnb-attestation-service","sol-graphite-protocol":"graphite-protocol","melon":"enzyme","ethos":"voyager-token","sol-wojak-sol":"wojak-sol","scroll-v2":"scroll","ton-crystal":"everscale","p-ixt-token":"ix-token","omisego":"omg","sol-zeta":"zeta","aavegotchi-ghst-token":"aavegotchi","sol-nobody-sausage":"nobody-sausage","sol-mori-coin":"mori-coin","sol-verse-world":"verse-world","sol-agenda-47":"agenda-47","sol-dowge":"dowge","sol-mobyscreener":"mobyscreener","machine-xchange-coin":"mxc","sol-cudis":"cudis","chronotech":"chrono-tech","sol-unstable-coin-sol":"unstable-coin-sol","sun-contract":"suncontract","sol-uranus-coin":"uranus-coin","monolith":"tokencard","sol-estatex":"estatex","sol-agi-alpha-agent":"agi-alpha-agent","sol-2131kobushide":"2131kobushide","sol-light":"light","neutrino-dollar":"neutrino-usd","sol-labubu-xyz":"labubu-xyz","sol-moonpig":"moonpig","p-klima-dao":"klimadao","sol-kokok-the-roach":"kokok-the-roach","synternet-v2":"synternet","forceprotocol":"the-force-protocol","sol-hosico":"hosico","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","perl-eco":"perlin","paccoin":"pac-protocol","sol-startupcoin":"startupcoin","sol-hyperpigmentation":"hyperpigmentation","sol-dinosol":"dinosol","sol-yeti":"yeti","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","stasis-euro":"stasis-eurs","yobit":"yobit-token","reddcoin":"redd"} as Record<string, undefined | string> // NOTE: Appending list during build
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
