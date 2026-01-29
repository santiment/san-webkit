<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","sol-pump-fun":"pump-fun","file-coin":"filecoin","o-optimism":"optimism-ethereum","blockstack":"stacks","curve":"curve-dao-token","arb-curve":"curve-dao-token","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","sol-doublezero":"doublezero","floki-inu-v2":"floki-inu","sol-zebec-network":"zebec-network","gala-v2":"gala","sol-raydium":"raydium","sol-monad":"monad","luna":"terra-luna","zencash":"horizen","o-synthetix-network-token":"synthetix","sol-meteora":"meteora","sol-loaded-lions":"loaded-lions","sol-soon":"soon","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-yzy":"yzy","sol-the-white-whale":"the-white-whale","bnb-sushi":"bsc-sushi","sushi":"sushiswap","arb-sushi":"sushiswap","mantra-dao":"mantra","sol-huma-finance":"huma-finance","sol-theuselesscoin":"theuselesscoin","hive":"hive-blockchain","sol-ore-new":"ore-new","bounce":"bounce-token","rif-token":"rsk-infrastructure-framework","small-love-potion":"smooth-love-potion","uquid_coin":"uquid-coin","dia-data":"dia","swipe":"sxp","bnb-swipe":"sxp","sol-avici":"avici","zcoin":"firo","sol-humidifi":"humidifi","BTRST":"braintrust","sol-collector-crypt":"collector-crypt","smart-bitcoin":"rsk-smart-bitcoin","terra-virtua-kolekt":"vanar","p-ixt-token":"ix-token","sol-graphite-protocol":"graphite-protocol","ton-crystal":"everscale","funfair":"funtoken","scroll-v2":"scroll","melon":"enzyme","sol-wojak-sol":"wojak-sol","ethos":"voyager-token","omisego":"omg","sol-zeta":"zeta","bnb-attestation-service":"bnb-attestation-service","aavegotchi-ghst-token":"aavegotchi","sol-agenda-47":"agenda-47","sol-nobody-sausage":"nobody-sausage","sol-mori-coin":"mori-coin","sol-verse-world":"verse-world","emirex":"emirex-token","sol-uranus-coin":"uranus-coin","sol-cudis":"cudis","sol-mobyscreener":"mobyscreener","sol-masha":"masha","sol-dowge":"dowge","machine-xchange-coin":"mxc","sol-unstable-coin-sol":"unstable-coin-sol","chronotech":"chrono-tech","sol-estatex":"estatex","monolith":"tokencard","sol-agi-alpha-agent":"agi-alpha-agent","sol-light":"light","sun-contract":"suncontract","neutrino-dollar":"neutrino-usd","sol-hosico":"hosico","sol-labubu-xyz":"labubu-xyz","library-credit":"library-credits","super-zero":"super-zero-protocol","internet-node-token":"int-chain","sol-kokok-the-roach":"kokok-the-roach","sol-moonpig":"moonpig","p-klima-dao":"klimadao","synternet-v2":"synternet","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","perl-eco":"perlin","sol-startupcoin":"startupcoin","sol-hyperpigmentation":"hyperpigmentation","sol-tiger-shark":"tiger-shark","paccoin":"pac-protocol","sol-dinosol":"dinosol","sol-yeti":"yeti","sol-ani-grok-companion":"ani-grok-companion","sol-bullish-degen":"bullish-degen","sol-umbra":"umbra","stasis-euro":"stasis-eurs","yobit":"yobit-token","reddcoin":"redd","probit":"probit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
