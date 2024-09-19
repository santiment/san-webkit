<script module lang="ts">const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/;
const STATIC_ASSET_LOGO = {"binance-coin":"bnb","blockstack":"stacks","crypto-com-coin":"cronos","file-coin":"filecoin","hedera-hashgraph":"hedera","o-optimism":"optimism-ethereum","floki-inu-v2":"floki-inu","p-matic-network":"polygon","mantra-dao":"mantra","gatechain-token":"gatetoken","gala-v2":"gala","o-synthetix-network-token":"synthetix","luna":"terra-luna","arb-curve":"curve-dao-token","curve":"curve-dao-token","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","bnb-sushi":"bsc-sushi","arb-sushi":"sushiswap","sushi":"sushiswap","terra-virtua-kolekt":"vanar","bnb-swipe":"sxp","swipe":"sxp","stasis-euro":"stasis-eurs","zencash":"horizen","ton-crystal":"everscale","zb":"zb-token","small-love-potion":"smooth-love-potion","bounce":"bounce-token","noia-network":"syntropy","rif-token":"rsk-infrastructure-framework","BTRST":"braintrust","hive":"hive-blockchain","uquid_coin":"uquid-coin","omisego":"omg","aavegotchi-ghst-token":"aavegotchi","melon":"enzyme","dia-data":"dia","amino":"amino-network","funfair":"funtoken","smart-bitcoin":"rsk-smart-bitcoin","machine-xchange-coin":"mxc","zcoin":"firo","ethos":"voyager-token","chronotech":"chrono-tech","super-zero":"super-zero-protocol","gridplus":"grid","p-klima-dao":"klimadao","emirex":"emirex-token","sun-contract":"suncontract","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","forceprotocol":"the-force-protocol","neutrino-dollar":"neutrino-usd","library-credit":"library-credits","shroom-finance":"niftyx-protocol","paccoin":"pac-protocol","nss":"nss-coin","perl-eco":"perlin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","p-ixt-token":"ix-token","stone":"stone-token","probit":"probit-token","monolith":"tokencard","yobit":"yobit-token","exmr":"exmr-fdn","reddcoin":"redd","yamv3":"yamv1"};
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
