<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","p-matic-network":"polygon-ecosystem-token","staked-ethena":"ethena","gatechain-token":"gatetoken","sol-pump-fun":"pump-fun","file-coin":"filecoin","blockstack":"stacks","o-optimism":"optimism-ethereum","sol-first-digital-usd":"first-digital-usd","curve":"curve-dao-token","arb-curve":"curve-dao-token","sol-doublezero":"doublezero","injective-protocol":"injective","floki-inu-v2":"floki-inu","gala-v2":"gala","sol-zebec-network":"zebec-network","luna":"terra-luna","sol-monad":"monad","sol-raydium":"raydium","zencash":"horizen","o-synthetix-network-token":"synthetix","sol-meteora":"meteora","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-loaded-lions":"loaded-lions","sol-yzy":"yzy","sol-the-white-whale":"the-white-whale","sol-soon":"soon","sushi":"sushiswap","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sol-huma-finance":"huma-finance","mantra-dao":"mantra","sol-theuselesscoin":"theuselesscoin","hive":"hive-blockchain","sol-nietzschean-penguin":"nietzschean-penguin","rif-token":"rsk-infrastructure-framework","bounce":"bounce-token","sol-ore-new":"ore-new","uquid_coin":"uquid-coin","dia-data":"dia","small-love-potion":"smooth-love-potion","bnb-swipe":"sxp","swipe":"sxp","zcoin":"firo","sol-avici":"avici","sol-humidifi":"humidifi","sol-collector-crypt":"collector-crypt","BTRST":"braintrust","smart-bitcoin":"rsk-smart-bitcoin","terra-virtua-kolekt":"vanar","ton-crystal":"everscale","funfair":"funtoken","p-ixt-token":"ix-token","scroll-v2":"scroll","sol-graphite-protocol":"graphite-protocol","melon":"enzyme","sol-wojak-sol":"wojak-sol","ethos":"voyager-token","omisego":"omg","bnb-attestation-service":"bnb-attestation-service","sol-zeta":"zeta","sol-agenda-47":"agenda-47","sol-mori-coin":"mori-coin","aavegotchi-ghst-token":"aavegotchi","sol-nobody-sausage":"nobody-sausage","sol-verse-world":"verse-world","emirex":"emirex-token","sol-mobyscreener":"mobyscreener","sol-cudis":"cudis","sol-2131kobushide":"2131kobushide","sol-masha":"masha","sol-uranus-coin":"uranus-coin","sol-dowge":"dowge","sol-unstable-coin-sol":"unstable-coin-sol","machine-xchange-coin":"mxc","chronotech":"chrono-tech","sol-estatex":"estatex","monolith":"tokencard","sun-contract":"suncontract","sol-agi-alpha-agent":"agi-alpha-agent","sol-light":"light","neutrino-dollar":"neutrino-usd","library-credit":"library-credits","sol-hosico":"hosico","sol-labubu-xyz":"labubu-xyz","internet-node-token":"int-chain","sol-kokok-the-roach":"kokok-the-roach","sol-moonpig":"moonpig","p-klima-dao":"klimadao","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","synternet-v2":"synternet","sol-launch-coin-on-believe":"launch-coin-on-believe","sol-hyperpigmentation":"hyperpigmentation","perl-eco":"perlin","sol-tiger-shark":"tiger-shark","sol-startupcoin":"startupcoin","paccoin":"pac-protocol","sol-dinosol":"dinosol","sol-yeti":"yeti","super-zero":"super-zero-protocol","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","sol-umbra":"umbra","stasis-euro":"stasis-eurs","yobit":"yobit-token","reddcoin":"redd","probit":"probit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
