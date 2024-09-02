<script module lang="ts">const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/;
const STATIC_ASSET_LOGO = {"binance-coin":"bnb","p-matic-network":"polygon","blockstack":"stacks","crypto-com-coin":"cronos","file-coin":"filecoin","hedera-hashgraph":"hedera","o-optimism":"optimism-ethereum","floki-inu-v2":"floki-inu","mantra-dao":"mantra","gatechain-token":"gatetoken","gala-v2":"gala","luna":"terra-luna","o-synthetix-network-token":"synthetix","curve":"curve-dao-token","arb-curve":"curve-dao-token","kickico":"kick-token","wrapped-nxm":"nxm","nexus-mutual":"nxm","bnb-sushi":"bsc-sushi","sushi":"sushiswap","arb-sushi":"sushiswap","stasis-euro":"stasis-eurs","terra-virtua-kolekt":"vanar","swipe":"sxp","bnb-swipe":"sxp","ton-crystal":"everscale","zencash":"horizen","small-love-potion":"smooth-love-potion","zb":"zb-token","bounce":"bounce-token","BTRST":"braintrust","hive":"hive-blockchain","noia-network":"syntropy","rif-token":"rsk-infrastructure-framework","uquid_coin":"uquid-coin","aavegotchi-ghst-token":"aavegotchi","melon":"enzyme","dia-data":"dia","amino":"amino-network","funfair":"funtoken","omisego":"omg","smart-bitcoin":"rsk-smart-bitcoin","machine-xchange-coin":"mxc","zcoin":"firo","ethos":"voyager-token","chronotech":"chrono-tech","p-klima-dao":"klimadao","gridplus":"grid","emirex":"emirex-token","super-zero":"super-zero-protocol","sun-contract":"suncontract","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","forceprotocol":"the-force-protocol","neutrino-dollar":"neutrino-usd","shroom-finance":"niftyx-protocol","library-credit":"library-credits","paccoin":"pac-protocol","perl-eco":"perlin","nss":"nss-coin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","stone":"stone-token","p-ixt-token":"ix-token","monolith":"tokencard","yobit":"yobit-token","exmr":"exmr-fdn","reddcoin":"redd","probit":"probit-token","yamv3":"yamv1"};
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
