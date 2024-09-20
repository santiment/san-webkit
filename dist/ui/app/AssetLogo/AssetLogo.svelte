<script module lang="ts">const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/;
const STATIC_ASSET_LOGO = {"binance-coin":"bnb","blockstack":"stacks","crypto-com-coin":"cronos","file-coin":"filecoin","o-optimism":"optimism-ethereum","hedera-hashgraph":"hedera","floki-inu-v2":"floki-inu","p-matic-network":"polygon","mantra-dao":"mantra","gatechain-token":"gatetoken","gala-v2":"gala","o-synthetix-network-token":"synthetix","luna":"terra-luna","arb-curve":"curve-dao-token","curve":"curve-dao-token","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","bnb-swipe":"sxp","swipe":"sxp","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","terra-virtua-kolekt":"vanar","stasis-euro":"stasis-eurs","zencash":"horizen","zb":"zb-token","ton-crystal":"everscale","small-love-potion":"smooth-love-potion","bounce":"bounce-token","rif-token":"rsk-infrastructure-framework","noia-network":"syntropy","hive":"hive-blockchain","BTRST":"braintrust","uquid_coin":"uquid-coin","aavegotchi-ghst-token":"aavegotchi","omisego":"omg","melon":"enzyme","dia-data":"dia","funfair":"funtoken","amino":"amino-network","smart-bitcoin":"rsk-smart-bitcoin","machine-xchange-coin":"mxc","zcoin":"firo","ethos":"voyager-token","chronotech":"chrono-tech","p-klima-dao":"klimadao","super-zero":"super-zero-protocol","gridplus":"grid","emirex":"emirex-token","sun-contract":"suncontract","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","forceprotocol":"the-force-protocol","library-credit":"library-credits","neutrino-dollar":"neutrino-usd","shroom-finance":"niftyx-protocol","paccoin":"pac-protocol","nss":"nss-coin","perl-eco":"perlin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","p-ixt-token":"ix-token","stone":"stone-token","probit":"probit-token","monolith":"tokencard","yobit":"yobit-token","exmr":"exmr-fdn","reddcoin":"redd","yamv3":"yamv1"};
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
