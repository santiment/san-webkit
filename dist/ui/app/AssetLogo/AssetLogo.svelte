<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"sol-tether":"tether","chain-key-usdt":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","sol-pump-fun":"pump-fun","file-coin":"filecoin","o-optimism":"optimism-ethereum","blockstack":"stacks","curve":"curve-dao-token","arb-curve":"curve-dao-token","sol-first-digital-usd":"first-digital-usd","injective-protocol":"injective","sol-doublezero":"doublezero","floki-inu-v2":"floki-inu","gala-v2":"gala","sol-zebec-network":"zebec-network","sol-raydium":"raydium","sol-monad":"monad","luna":"terra-luna","zencash":"horizen","o-synthetix-network-token":"synthetix","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-meteora":"meteora","sol-soon":"soon","sol-loaded-lions":"loaded-lions","sol-yzy":"yzy","arb-sushi":"sushiswap","sushi":"sushiswap","bnb-sushi":"bsc-sushi","mantra-dao":"mantra","sol-the-white-whale":"the-white-whale","sol-theuselesscoin":"theuselesscoin","sol-huma-finance":"huma-finance","hive":"hive-blockchain","sol-ore-new":"ore-new","bounce":"bounce-token","rif-token":"rsk-infrastructure-framework","swipe":"sxp","bnb-swipe":"sxp","small-love-potion":"smooth-love-potion","dia-data":"dia","uquid_coin":"uquid-coin","sol-avici":"avici","sol-humidifi":"humidifi","zcoin":"firo","BTRST":"braintrust","sol-collector-crypt":"collector-crypt","smart-bitcoin":"rsk-smart-bitcoin","p-ixt-token":"ix-token","terra-virtua-kolekt":"vanar","funfair":"funtoken","sol-graphite-protocol":"graphite-protocol","scroll-v2":"scroll","ton-crystal":"everscale","melon":"enzyme","ethos":"voyager-token","sol-wojak-sol":"wojak-sol","omisego":"omg","sol-zeta":"zeta","bnb-attestation-service":"bnb-attestation-service","aavegotchi-ghst-token":"aavegotchi","sol-agenda-47":"agenda-47","sol-nobody-sausage":"nobody-sausage","sol-mori-coin":"mori-coin","sol-cudis":"cudis","sol-verse-world":"verse-world","emirex":"emirex-token","sol-uranus-coin":"uranus-coin","sol-mobyscreener":"mobyscreener","sol-dowge":"dowge","sol-masha":"masha","machine-xchange-coin":"mxc","sol-unstable-coin-sol":"unstable-coin-sol","sol-estatex":"estatex","chronotech":"chrono-tech","monolith":"tokencard","sol-agi-alpha-agent":"agi-alpha-agent","sun-contract":"suncontract","sol-light":"light","neutrino-dollar":"neutrino-usd","sol-labubu-xyz":"labubu-xyz","library-credit":"library-credits","super-zero":"super-zero-protocol","internet-node-token":"int-chain","sol-hosico":"hosico","sol-kokok-the-roach":"kokok-the-roach","sol-moonpig":"moonpig","p-klima-dao":"klimadao","synternet-v2":"synternet","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-startupcoin":"startupcoin","perl-eco":"perlin","sol-hyperpigmentation":"hyperpigmentation","sol-tiger-shark":"tiger-shark","paccoin":"pac-protocol","sol-dinosol":"dinosol","sol-yeti":"yeti","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","stasis-euro":"stasis-eurs","yobit":"yobit-token","reddcoin":"redd","probit":"probit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
