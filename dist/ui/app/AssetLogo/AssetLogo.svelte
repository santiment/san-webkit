<script context="module" lang="ts">const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/;
const STATIC_ASSET_LOGO = {"binance-coin":"bnb","p-matic-network":"polygon","hedera-hashgraph":"hedera","file-coin":"filecoin","blockstack":"stacks","crypto-com-coin":"cronos","o-optimism":"optimism-ethereum","gala-v2":"gala","gatechain-token":"gatetoken","o-synthetix-network-token":"synthetix","mantra-dao":"mantra","luna":"terra-luna","curve":"curve-dao-token","arb-curve":"curve-dao-token","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","terra-virtua-kolekt":"vanar","sushi":"sushiswap","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","bnb-swipe":"sxp","swipe":"sxp","zb":"zb-token","small-love-potion":"smooth-love-potion","bounce":"bounce-token","noia-network":"syntropy","stasis-euro":"stasis-eurs","hive":"hive-blockchain","BTRST":"braintrust","rif-token":"rsk-infrastructure-framework","zencash":"horizen","ton-crystal":"everscale","aavegotchi-ghst-token":"aavegotchi","uquid_coin":"uquid-coin","omisego":"omg","funfair":"funtoken","amino":"amino-network","melon":"enzyme","dia-data":"dia","machine-xchange-coin":"mxc","smart-bitcoin":"rsk-smart-bitcoin","p-klima-dao":"klimadao","zcoin":"firo","chronotech":"chrono-tech","ethos":"voyager-token","forceprotocol":"the-force-protocol","gridplus":"grid","emirex":"emirex-token","sun-contract":"suncontract","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","super-zero":"super-zero-protocol","library-credit":"library-credits","neutrino-dollar":"neutrino-usd","paccoin":"pac-protocol","perl-eco":"perlin","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","p-ixt-token":"ix-token","stone":"stone-token","monolith":"tokencard","yobit":"yobit-token","probit":"probit-token","exmr":"exmr-fdn","reddcoin":"redd","yamv3":"yamv1"};
</script>

<script lang="ts">import Picture from "$ui/app/Picture/index.js";
import Svg from "$ui/core/Svg/index.js";
let {
  slug,
  placeholderSize = 12,
  ...rest
} = $props();
let logo = $derived(STATIC_ASSET_LOGO[slug] || slug.replace(CHAIN_REGEX, ""));
</script>

<Picture
  {...rest}
  src="https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_{logo}.png"
>
  <Svg id="asset-small" w={placeholderSize}></Svg>
</Picture>
