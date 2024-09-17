<script module lang="ts">const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/;
const STATIC_ASSET_LOGO = {"binance-coin":"bnb","blockstack":"stacks","crypto-com-coin":"cronos","file-coin":"filecoin","hedera-hashgraph":"hedera","o-optimism":"optimism-ethereum","p-matic-network":"polygon","floki-inu-v2":"floki-inu","mantra-dao":"mantra","gatechain-token":"gatetoken","gala-v2":"gala","luna":"terra-luna","o-synthetix-network-token":"synthetix","curve":"curve-dao-token","arb-curve":"curve-dao-token","kickico":"kick-token","wrapped-nxm":"nxm","nexus-mutual":"nxm","arb-sushi":"sushiswap","sushi":"sushiswap","bnb-sushi":"bsc-sushi","terra-virtua-kolekt":"vanar","stasis-euro":"stasis-eurs","bnb-swipe":"sxp","swipe":"sxp","zencash":"horizen","ton-crystal":"everscale","zb":"zb-token","small-love-potion":"smooth-love-potion","BTRST":"braintrust","bounce":"bounce-token","noia-network":"syntropy","hive":"hive-blockchain","rif-token":"rsk-infrastructure-framework","uquid_coin":"uquid-coin","omisego":"omg","aavegotchi-ghst-token":"aavegotchi","melon":"enzyme","dia-data":"dia","amino":"amino-network","funfair":"funtoken","smart-bitcoin":"rsk-smart-bitcoin","machine-xchange-coin":"mxc","zcoin":"firo","ethos":"voyager-token","super-zero":"super-zero-protocol","chronotech":"chrono-tech","gridplus":"grid","p-klima-dao":"klimadao","emirex":"emirex-token","sun-contract":"suncontract","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","forceprotocol":"the-force-protocol","library-credit":"library-credits","neutrino-dollar":"neutrino-usd","shroom-finance":"niftyx-protocol","paccoin":"pac-protocol","nss":"nss-coin","perl-eco":"perlin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","stone":"stone-token","p-ixt-token":"ix-token","probit":"probit-token","monolith":"tokencard","yobit":"yobit-token","exmr":"exmr-fdn","reddcoin":"redd","yamv3":"yamv1"};
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
