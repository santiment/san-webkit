<script module lang="ts">const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/;
const STATIC_ASSET_LOGO = {"binance-coin":"bnb","blockstack":"stacks","file-coin":"filecoin","crypto-com-coin":"cronos","hedera-hashgraph":"hedera","o-optimism":"optimism-ethereum","floki-inu-v2":"floki-inu","mantra-dao":"mantra","p-matic-network":"polygon","gatechain-token":"gatetoken","gala-v2":"gala","luna":"terra-luna","o-synthetix-network-token":"synthetix","arb-curve":"curve-dao-token","curve":"curve-dao-token","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","sushi":"sushiswap","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","bnb-swipe":"sxp","swipe":"sxp","stasis-euro":"stasis-eurs","terra-virtua-kolekt":"vanar","zencash":"horizen","zb":"zb-token","small-love-potion":"smooth-love-potion","noia-network":"syntropy","hive":"hive-blockchain","bounce":"bounce-token","BTRST":"braintrust","rif-token":"rsk-infrastructure-framework","ton-crystal":"everscale","dia-data":"dia","aavegotchi-ghst-token":"aavegotchi","melon":"enzyme","amino":"amino-network","omisego":"omg","funfair":"funtoken","uquid_coin":"uquid-coin","smart-bitcoin":"rsk-smart-bitcoin","machine-xchange-coin":"mxc","zcoin":"firo","ethos":"voyager-token","chronotech":"chrono-tech","p-klima-dao":"klimadao","gridplus":"grid","super-zero":"super-zero-protocol","emirex":"emirex-token","sun-contract":"suncontract","forceprotocol":"the-force-protocol","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","library-credit":"library-credits","neutrino-dollar":"neutrino-usd","shroom-finance":"niftyx-protocol","nss":"nss-coin","paccoin":"pac-protocol","xcrypt":"xcrypt-token","perl-eco":"perlin","internet-node-token":"int-chain","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","probit":"probit-token","stone":"stone-token","p-ixt-token":"ix-token","monolith":"tokencard","yobit":"yobit-token","exmr":"exmr-fdn","reddcoin":"redd","yamv3":"yamv1"};
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
