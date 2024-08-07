<script context="module" lang="ts">const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/;
const STATIC_ASSET_LOGO = {"binance-coin":"bnb","p-matic-network":"polygon","crypto-com-coin":"cronos","blockstack":"stacks","file-coin":"filecoin","hedera-hashgraph":"hedera","o-optimism":"optimism-ethereum","floki-inu-v2":"floki-inu","mantra-dao":"mantra","gatechain-token":"gatetoken","gala-v2":"gala","o-synthetix-network-token":"synthetix","luna":"terra-luna","arb-curve":"curve-dao-token","curve":"curve-dao-token","kickico":"kick-token","wrapped-nxm":"nxm","nexus-mutual":"nxm","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","sushi":"sushiswap","stasis-euro":"stasis-eurs","terra-virtua-kolekt":"vanar","bnb-swipe":"sxp","swipe":"sxp","zencash":"horizen","BTRST":"braintrust","ton-crystal":"everscale","small-love-potion":"smooth-love-potion","zb":"zb-token","hive":"hive-blockchain","bounce":"bounce-token","noia-network":"syntropy","rif-token":"rsk-infrastructure-framework","uquid_coin":"uquid-coin","aavegotchi-ghst-token":"aavegotchi","melon":"enzyme","omisego":"omg","dia-data":"dia","amino":"amino-network","funfair":"funtoken","smart-bitcoin":"rsk-smart-bitcoin","machine-xchange-coin":"mxc","p-klima-dao":"klimadao","zcoin":"firo","ethos":"voyager-token","chronotech":"chrono-tech","forceprotocol":"the-force-protocol","gridplus":"grid","emirex":"emirex-token","sun-contract":"suncontract","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","super-zero":"super-zero-protocol","neutrino-dollar":"neutrino-usd","shroom-finance":"niftyx-protocol","library-credit":"library-credits","paccoin":"pac-protocol","perl-eco":"perlin","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","stone":"stone-token","p-ixt-token":"ix-token","monolith":"tokencard","probit":"probit-token","yobit":"yobit-token","exmr":"exmr-fdn","reddcoin":"redd","yamv3":"yamv1"};
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
