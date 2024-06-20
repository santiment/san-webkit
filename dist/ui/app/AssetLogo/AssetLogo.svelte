<script context="module" lang="ts">const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/;
const STATIC_ASSET_LOGO = {"binance-coin":"bnb","p-matic-network":"polygon","hedera-hashgraph":"hedera","file-coin":"filecoin","crypto-com-coin":"cronos","blockstack":"stacks","o-optimism":"optimism-ethereum","gala-v2":"gala","gatechain-token":"gatetoken","o-synthetix-network-token":"synthetix","mantra-dao":"mantra","luna":"terra-luna","arb-curve":"curve-dao-token","curve":"curve-dao-token","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","arb-sushi":"sushiswap","sushi":"sushiswap","bnb-sushi":"bsc-sushi","terra-virtua-kolekt":"vanar","bnb-swipe":"sxp","swipe":"sxp","zb":"zb-token","small-love-potion":"smooth-love-potion","stasis-euro":"stasis-eurs","BTRST":"braintrust","noia-network":"syntropy","bounce":"bounce-token","hive":"hive-blockchain","ton-crystal":"everscale","zencash":"horizen","rif-token":"rsk-infrastructure-framework","aavegotchi-ghst-token":"aavegotchi","uquid_coin":"uquid-coin","omisego":"omg","dia-data":"dia","amino":"amino-network","melon":"enzyme","funfair":"funtoken","machine-xchange-coin":"mxc","smart-bitcoin":"rsk-smart-bitcoin","p-klima-dao":"klimadao","chronotech":"chrono-tech","zcoin":"firo","ethos":"voyager-token","gridplus":"grid","forceprotocol":"the-force-protocol","emirex":"emirex-token","sun-contract":"suncontract","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","super-zero":"super-zero-protocol","library-credit":"library-credits","neutrino-dollar":"neutrino-usd","perl-eco":"perlin","nss":"nss-coin","paccoin":"pac-protocol","xcrypt":"xcrypt-token","internet-node-token":"int-chain","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","stone":"stone-token","probit":"probit-token","p-ixt-token":"ix-token","monolith":"tokencard","yobit":"yobit-token","exmr":"exmr-fdn","reddcoin":"redd","yamv3":"yamv1"};
</script>

<script lang="ts">import Picture from "../Picture/index.js";
import Svg from "../../core/Svg/index.js";
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
