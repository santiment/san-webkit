<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","sol-pump-fun":"pump-fun","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","file-coin":"filecoin","injective-protocol":"injective","arb-curve":"curve-dao-token","curve":"curve-dao-token","blockstack":"stacks","sol-raydium":"raydium","sol-first-digital-usd":"first-digital-usd","luna":"terra-luna","sol-monad":"monad","floki-inu-v2":"floki-inu","o-optimism":"optimism-ethereum","sol-theuselesscoin":"theuselesscoin","sol-zebec-network":"zebec-network","sol-doublezero":"doublezero","zencash":"horizen","sol-meteora":"meteora","sol-soon":"soon","sol-solana-mobile-seeker":"solana-mobile-seeker","gala-v2":"gala","sol-backpack-exchange":"backpack-exchange","sol-light":"light","sol-yzy":"yzy","sol-huma-finance":"huma-finance","rif-token":"rsk-infrastructure-framework","funfair":"funtoken","o-synthetix-network-token":"synthetix","bnb-cross-protocol":"cross","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","bnb-attestation-service":"bnb-attestation-service","sol-collector-crypt":"collector-crypt","sol-the-black-bull":"the-black-bull","sol-loaded-lions":"loaded-lions","sol-ore-new":"ore-new","hive":"hive-blockchain","uquid_coin":"uquid-coin","bounce":"bounce-token","small-love-potion":"smooth-love-potion","zcoin":"firo","smart-bitcoin":"rsk-smart-bitcoin","dia-data":"dia","sol-graphite-protocol":"graphite-protocol","sol-humidifi":"humidifi","ethos":"voyager-token","omisego":"omg","melon":"enzyme","sol-wojak-sol":"wojak-sol","sol-dowge":"dowge","scroll-v2":"scroll","sol-avici":"avici","ton-crystal":"everscale","aavegotchi-ghst-token":"aavegotchi","sol-unstable-coin-sol":"unstable-coin-sol","sol-mori-coin":"mori-coin","terra-virtua-kolekt":"vanar","sol-verse-world":"verse-world","sol-agenda-47":"agenda-47","sun-contract":"suncontract","monolith":"tokencard","neutrino-dollar":"neutrino-usd","sol-the-white-whale":"the-white-whale","sol-mobyscreener":"mobyscreener","sol-nietzschean-penguin":"nietzschean-penguin","sol-nobody-sausage":"nobody-sausage","sol-make-aliens-great-again":"make-aliens-great-again","sol-uranus-coin":"uranus-coin","sol-labubu-xyz":"labubu-xyz","sol-war":"war","sol-lolonsol":"lolonsol","sol-agi-alpha-agent":"agi-alpha-agent","sol-cudis":"cudis","sol-estatex":"estatex","sol-moonpig":"moonpig","sol-zeta":"zeta","sol-kokok-the-roach":"kokok-the-roach","shroom-finance":"niftyx-protocol","sol-hosico":"hosico","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","chronotech":"chrono-tech","perl-eco":"perlin","machine-xchange-coin":"mxc","sol-startupcoin":"startupcoin","paccoin":"pac-protocol","sol-launch-coin-on-believe":"launch-coin-on-believe","synternet-v2":"synternet","forceprotocol":"the-force-protocol","sol-hyperpigmentation":"hyperpigmentation","sol-yeti":"yeti","sol-2131kobushide":"2131kobushide","super-zero":"super-zero-protocol","p-klima-dao":"klimadao","sol-dinosol":"dinosol","p-ixt-token":"ix-token","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","reddcoin":"redd","stasis-euro":"stasis-eurs","yobit":"yobit-token","bnb-swipe":"sxp","swipe":"sxp","mantra-dao":"mantra"} as Record<string, undefined | string> // NOTE: Appending list during build
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
