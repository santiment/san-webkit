<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","sol-usd-coin":"usd-coin","chain-key-usdc":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","sol-pump-fun":"pump-fun","file-coin":"filecoin","blockstack":"stacks","o-optimism":"optimism-ethereum","sol-first-digital-usd":"first-digital-usd","arb-curve":"curve-dao-token","curve":"curve-dao-token","sol-doublezero":"doublezero","injective-protocol":"injective","floki-inu-v2":"floki-inu","gala-v2":"gala","sol-zebec-network":"zebec-network","luna":"terra-luna","sol-monad":"monad","sol-raydium":"raydium","zencash":"horizen","o-synthetix-network-token":"synthetix","sol-meteora":"meteora","sol-loaded-lions":"loaded-lions","sol-yzy":"yzy","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-the-white-whale":"the-white-whale","sol-soon":"soon","arb-sushi":"sushiswap","sushi":"sushiswap","bnb-sushi":"bsc-sushi","sol-huma-finance":"huma-finance","mantra-dao":"mantra","sol-theuselesscoin":"theuselesscoin","hive":"hive-blockchain","rif-token":"rsk-infrastructure-framework","sol-nietzschean-penguin":"nietzschean-penguin","bounce":"bounce-token","sol-ore-new":"ore-new","uquid_coin":"uquid-coin","dia-data":"dia","small-love-potion":"smooth-love-potion","swipe":"sxp","bnb-swipe":"sxp","zcoin":"firo","sol-avici":"avici","sol-collector-crypt":"collector-crypt","sol-humidifi":"humidifi","BTRST":"braintrust","smart-bitcoin":"rsk-smart-bitcoin","terra-virtua-kolekt":"vanar","p-ixt-token":"ix-token","ton-crystal":"everscale","funfair":"funtoken","sol-graphite-protocol":"graphite-protocol","scroll-v2":"scroll","melon":"enzyme","ethos":"voyager-token","sol-wojak-sol":"wojak-sol","omisego":"omg","bnb-attestation-service":"bnb-attestation-service","sol-agenda-47":"agenda-47","sol-zeta":"zeta","sol-mori-coin":"mori-coin","sol-nobody-sausage":"nobody-sausage","aavegotchi-ghst-token":"aavegotchi","emirex":"emirex-token","sol-verse-world":"verse-world","sol-cudis":"cudis","sol-mobyscreener":"mobyscreener","sol-dowge":"dowge","sol-masha":"masha","machine-xchange-coin":"mxc","sol-2131kobushide":"2131kobushide","sol-uranus-coin":"uranus-coin","sol-unstable-coin-sol":"unstable-coin-sol","chronotech":"chrono-tech","sol-estatex":"estatex","monolith":"tokencard","sun-contract":"suncontract","sol-agi-alpha-agent":"agi-alpha-agent","sol-light":"light","neutrino-dollar":"neutrino-usd","sol-hosico":"hosico","library-credit":"library-credits","sol-labubu-xyz":"labubu-xyz","internet-node-token":"int-chain","sol-kokok-the-roach":"kokok-the-roach","sol-moonpig":"moonpig","p-klima-dao":"klimadao","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","synternet-v2":"synternet","sol-launch-coin-on-believe":"launch-coin-on-believe","perl-eco":"perlin","paccoin":"pac-protocol","sol-tiger-shark":"tiger-shark","sol-startupcoin":"startupcoin","sol-hyperpigmentation":"hyperpigmentation","sol-dinosol":"dinosol","sol-yeti":"yeti","super-zero":"super-zero-protocol","sol-umbra":"umbra","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","stasis-euro":"stasis-eurs","yobit":"yobit-token","reddcoin":"redd","probit":"probit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
