<script context="module" lang="ts">const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/;
const STATIC_ASSET_LOGO = {"binance-coin":"bnb","p-matic-network":"polygon","hedera-hashgraph":"hedera","blockstack":"stacks","file-coin":"filecoin","crypto-com-coin":"cronos","o-optimism":"optimism-ethereum","floki-inu-v2":"floki-inu","gala-v2":"gala","gatechain-token":"gatetoken","o-synthetix-network-token":"synthetix","mantra-dao":"mantra","luna":"terra-luna","arb-curve":"curve-dao-token","curve":"curve-dao-token","kickico":"kick-token","wrapped-nxm":"nxm","nexus-mutual":"nxm","bnb-sushi":"bsc-sushi","sushi":"sushiswap","arb-sushi":"sushiswap","terra-virtua-kolekt":"vanar","bnb-swipe":"sxp","swipe":"sxp","stasis-euro":"stasis-eurs","BTRST":"braintrust","small-love-potion":"smooth-love-potion","zb":"zb-token","ton-crystal":"everscale","hive":"hive-blockchain","bounce":"bounce-token","noia-network":"syntropy","zencash":"horizen","rif-token":"rsk-infrastructure-framework","uquid_coin":"uquid-coin","aavegotchi-ghst-token":"aavegotchi","omisego":"omg","dia-data":"dia","melon":"enzyme","funfair":"funtoken","amino":"amino-network","machine-xchange-coin":"mxc","p-klima-dao":"klimadao","smart-bitcoin":"rsk-smart-bitcoin","zcoin":"firo","chronotech":"chrono-tech","ethos":"voyager-token","forceprotocol":"the-force-protocol","gridplus":"grid","emirex":"emirex-token","sun-contract":"suncontract","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","super-zero":"super-zero-protocol","shroom-finance":"niftyx-protocol","library-credit":"library-credits","neutrino-dollar":"neutrino-usd","paccoin":"pac-protocol","perl-eco":"perlin","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","stone":"stone-token","p-ixt-token":"ix-token","monolith":"tokencard","yobit":"yobit-token","probit":"probit-token","exmr":"exmr-fdn","reddcoin":"redd","yamv3":"yamv1"};
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
