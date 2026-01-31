<script module lang="ts">
  const CHAIN_REGEX = /^((a|o|p|arb|bnb|sol)-)/
  const STATIC_ASSET_LOGO = {"chain-key-usdt":"tether","sol-tether":"tether","binance-coin":"bnb","chain-key-usdc":"usd-coin","sol-usd-coin":"usd-coin","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","xinfin-network":"xinfin","staked-ethena":"ethena","p-matic-network":"polygon-ecosystem-token","gatechain-token":"gatetoken","sol-pump-fun":"pump-fun","file-coin":"filecoin","blockstack":"stacks","o-optimism":"optimism-ethereum","sol-first-digital-usd":"first-digital-usd","curve":"curve-dao-token","arb-curve":"curve-dao-token","sol-doublezero":"doublezero","injective-protocol":"injective","floki-inu-v2":"floki-inu","sol-zebec-network":"zebec-network","gala-v2":"gala","sol-raydium":"raydium","sol-monad":"monad","luna":"terra-luna","zencash":"horizen","o-synthetix-network-token":"synthetix","sol-meteora":"meteora","sol-loaded-lions":"loaded-lions","sol-solana-mobile-seeker":"solana-mobile-seeker","sol-yzy":"yzy","sol-soon":"soon","sol-the-white-whale":"the-white-whale","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","sushi":"sushiswap","sol-huma-finance":"huma-finance","mantra-dao":"mantra","sol-nietzschean-penguin":"nietzschean-penguin","sol-theuselesscoin":"theuselesscoin","hive":"hive-blockchain","rif-token":"rsk-infrastructure-framework","sol-ore-new":"ore-new","bounce":"bounce-token","uquid_coin":"uquid-coin","dia-data":"dia","small-love-potion":"smooth-love-potion","swipe":"sxp","bnb-swipe":"sxp","zcoin":"firo","sol-humidifi":"humidifi","BTRST":"braintrust","smart-bitcoin":"rsk-smart-bitcoin","sol-avici":"avici","sol-collector-crypt":"collector-crypt","terra-virtua-kolekt":"vanar","p-ixt-token":"ix-token","ton-crystal":"everscale","funfair":"funtoken","sol-graphite-protocol":"graphite-protocol","scroll-v2":"scroll","melon":"enzyme","ethos":"voyager-token","omisego":"omg","bnb-attestation-service":"bnb-attestation-service","sol-agenda-47":"agenda-47","aavegotchi-ghst-token":"aavegotchi","sol-wojak-sol":"wojak-sol","sol-zeta":"zeta","sol-nobody-sausage":"nobody-sausage","sol-mori-coin":"mori-coin","sol-verse-world":"verse-world","emirex":"emirex-token","sol-mobyscreener":"mobyscreener","sol-uranus-coin":"uranus-coin","sol-2131kobushide":"2131kobushide","sol-cudis":"cudis","sol-dowge":"dowge","sol-masha":"masha","sol-unstable-coin-sol":"unstable-coin-sol","machine-xchange-coin":"mxc","chronotech":"chrono-tech","sol-estatex":"estatex","monolith":"tokencard","sol-agi-alpha-agent":"agi-alpha-agent","sun-contract":"suncontract","sol-light":"light","neutrino-dollar":"neutrino-usd","sol-labubu-xyz":"labubu-xyz","library-credit":"library-credits","internet-node-token":"int-chain","sol-hosico":"hosico","sol-kokok-the-roach":"kokok-the-roach","sol-moonpig":"moonpig","p-klima-dao":"klimadao","forceprotocol":"the-force-protocol","shroom-finance":"niftyx-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","synternet-v2":"synternet","sol-launch-coin-on-believe":"launch-coin-on-believe","super-zero":"super-zero-protocol","perl-eco":"perlin","sol-tiger-shark":"tiger-shark","sol-startupcoin":"startupcoin","paccoin":"pac-protocol","sol-hyperpigmentation":"hyperpigmentation","sol-dinosol":"dinosol","sol-yeti":"yeti","sol-umbra":"umbra","sol-bullish-degen":"bullish-degen","sol-ani-grok-companion":"ani-grok-companion","stasis-euro":"stasis-eurs","yobit":"yobit-token","reddcoin":"redd","probit":"probit-token"} as Record<string, undefined | string> // NOTE: Appending list during build
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
