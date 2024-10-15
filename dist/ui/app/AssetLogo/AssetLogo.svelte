<script module lang="ts">const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/;
const STATIC_ASSET_LOGO = {"binance-coin":"bnb","blockstack":"stacks","file-coin":"filecoin","o-optimism":"optimism-ethereum","hedera-hashgraph":"hedera","crypto-com-coin":"cronos","floki-inu-v2":"floki-inu","mantra-dao":"mantra","p-matic-network":"polygon","gatechain-token":"gatetoken","gala-v2":"gala","luna":"terra-luna","o-synthetix-network-token":"synthetix","curve":"curve-dao-token","arb-curve":"curve-dao-token","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","arb-sushi":"sushiswap","sushi":"sushiswap","bnb-sushi":"bsc-sushi","swipe":"sxp","bnb-swipe":"sxp","terra-virtua-kolekt":"vanar","stasis-euro":"stasis-eurs","zencash":"horizen","zb":"zb-token","noia-network":"syntropy","small-love-potion":"smooth-love-potion","hive":"hive-blockchain","rif-token":"rsk-infrastructure-framework","BTRST":"braintrust","bounce":"bounce-token","dia-data":"dia","ton-crystal":"everscale","aavegotchi-ghst-token":"aavegotchi","melon":"enzyme","amino":"amino-network","funfair":"funtoken","omisego":"omg","uquid_coin":"uquid-coin","smart-bitcoin":"rsk-smart-bitcoin","machine-xchange-coin":"mxc","zcoin":"firo","ethos":"voyager-token","p-klima-dao":"klimadao","chronotech":"chrono-tech","gridplus":"grid","super-zero":"super-zero-protocol","emirex":"emirex-token","library-credit":"library-credits","sun-contract":"suncontract","forceprotocol":"the-force-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","neutrino-dollar":"neutrino-usd","shroom-finance":"niftyx-protocol","nss":"nss-coin","perl-eco":"perlin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","paccoin":"pac-protocol","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","stone":"stone-token","probit":"probit-token","p-ixt-token":"ix-token","monolith":"tokencard","yobit":"yobit-token","exmr":"exmr-fdn","reddcoin":"redd","yamv3":"yamv1"};
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
