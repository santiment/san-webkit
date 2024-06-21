<script context="module" lang="ts">const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/;
const STATIC_ASSET_LOGO = {"binance-coin":"bnb","p-matic-network":"polygon","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","file-coin":"filecoin","blockstack":"stacks","o-optimism":"optimism-ethereum","floki-inu-v2":"floki-inu","gala-v2":"gala","gatechain-token":"gatetoken","o-synthetix-network-token":"synthetix","mantra-dao":"mantra","luna":"terra-luna","curve":"curve-dao-token","arb-curve":"curve-dao-token","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","arb-sushi":"sushiswap","sushi":"sushiswap","bnb-sushi":"bsc-sushi","terra-virtua-kolekt":"vanar","bnb-swipe":"sxp","swipe":"sxp","stasis-euro":"stasis-eurs","small-love-potion":"smooth-love-potion","BTRST":"braintrust","zb":"zb-token","ton-crystal":"everscale","bounce":"bounce-token","hive":"hive-blockchain","noia-network":"syntropy","zencash":"horizen","rif-token":"rsk-infrastructure-framework","aavegotchi-ghst-token":"aavegotchi","uquid_coin":"uquid-coin","omisego":"omg","dia-data":"dia","melon":"enzyme","funfair":"funtoken","amino":"amino-network","machine-xchange-coin":"mxc","smart-bitcoin":"rsk-smart-bitcoin","p-klima-dao":"klimadao","zcoin":"firo","chronotech":"chrono-tech","ethos":"voyager-token","forceprotocol":"the-force-protocol","gridplus":"grid","emirex":"emirex-token","sun-contract":"suncontract","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","shroom-finance":"niftyx-protocol","super-zero":"super-zero-protocol","library-credit":"library-credits","neutrino-dollar":"neutrino-usd","paccoin":"pac-protocol","perl-eco":"perlin","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","stone":"stone-token","p-ixt-token":"ix-token","monolith":"tokencard","yobit":"yobit-token","probit":"probit-token","exmr":"exmr-fdn","reddcoin":"redd","yamv3":"yamv1"};
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

{#key logo}
  <Picture
    {...rest}
    src="https://production-sanbase-images.s3.amazonaws.com/uploads/logo64_{logo}.png"
  >
    <Svg id="asset-small" w={placeholderSize}></Svg>
  </Picture>
{/key}
