<script context="module" lang="ts">const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/;
const STATIC_ASSET_LOGO = {"binance-coin":"bnb","p-matic-network":"polygon","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","file-coin":"filecoin","blockstack":"stacks","o-optimism":"optimism-ethereum","gala-v2":"gala","gatechain-token":"gatetoken","o-synthetix-network-token":"synthetix","mantra-dao":"mantra","luna":"terra-luna","curve":"curve-dao-token","arb-curve":"curve-dao-token","kickico":"kick-token","wrapped-nxm":"nxm","nexus-mutual":"nxm","sushi":"sushiswap","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","terra-virtua-kolekt":"vanar","swipe":"sxp","bnb-swipe":"sxp","zb":"zb-token","small-love-potion":"smooth-love-potion","stasis-euro":"stasis-eurs","noia-network":"syntropy","BTRST":"braintrust","bounce":"bounce-token","ton-crystal":"everscale","hive":"hive-blockchain","rif-token":"rsk-infrastructure-framework","zencash":"horizen","aavegotchi-ghst-token":"aavegotchi","uquid_coin":"uquid-coin","omisego":"omg","amino":"amino-network","dia-data":"dia","melon":"enzyme","funfair":"funtoken","smart-bitcoin":"rsk-smart-bitcoin","machine-xchange-coin":"mxc","p-klima-dao":"klimadao","chronotech":"chrono-tech","ethos":"voyager-token","zcoin":"firo","gridplus":"grid","forceprotocol":"the-force-protocol","emirex":"emirex-token","sun-contract":"suncontract","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","super-zero":"super-zero-protocol","shroom-finance":"niftyx-protocol","library-credit":"library-credits","neutrino-dollar":"neutrino-usd","paccoin":"pac-protocol","perl-eco":"perlin","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","p-ixt-token":"ix-token","stone":"stone-token","probit":"probit-token","monolith":"tokencard","yobit":"yobit-token","exmr":"exmr-fdn","reddcoin":"redd","yamv3":"yamv1"};
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
