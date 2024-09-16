<script module lang="ts">const CHAIN_REGEX = /^((a|o|p|arb|bnb)-)/;
const STATIC_ASSET_LOGO = {"binance-coin":"bnb","blockstack":"stacks","crypto-com-coin":"cronos","file-coin":"filecoin","hedera-hashgraph":"hedera","o-optimism":"optimism-ethereum","p-matic-network":"polygon","floki-inu-v2":"floki-inu","mantra-dao":"mantra","gatechain-token":"gatetoken","gala-v2":"gala","luna":"terra-luna","o-synthetix-network-token":"synthetix","arb-curve":"curve-dao-token","curve":"curve-dao-token","kickico":"kick-token","nexus-mutual":"nxm","wrapped-nxm":"nxm","arb-sushi":"sushiswap","bnb-sushi":"bsc-sushi","sushi":"sushiswap","terra-virtua-kolekt":"vanar","stasis-euro":"stasis-eurs","bnb-swipe":"sxp","swipe":"sxp","zencash":"horizen","ton-crystal":"everscale","zb":"zb-token","small-love-potion":"smooth-love-potion","BTRST":"braintrust","bounce":"bounce-token","noia-network":"syntropy","hive":"hive-blockchain","rif-token":"rsk-infrastructure-framework","uquid_coin":"uquid-coin","aavegotchi-ghst-token":"aavegotchi","omisego":"omg","melon":"enzyme","amino":"amino-network","funfair":"funtoken","dia-data":"dia","smart-bitcoin":"rsk-smart-bitcoin","machine-xchange-coin":"mxc","super-zero":"super-zero-protocol","zcoin":"firo","ethos":"voyager-token","chronotech":"chrono-tech","gridplus":"grid","p-klima-dao":"klimadao","emirex":"emirex-token","sun-contract":"suncontract","bitcoin-standard-hashrate-token":"btc-standard-hashrate-token","forceprotocol":"the-force-protocol","neutrino-dollar":"neutrino-usd","library-credit":"library-credits","shroom-finance":"niftyx-protocol","paccoin":"pac-protocol","nss":"nss-coin","perl-eco":"perlin","xcrypt":"xcrypt-token","internet-node-token":"int-chain","blue-whale-token":"blue-whale-exchange","lukki":"lukki-operating-token","probit":"probit-token","stone":"stone-token","p-ixt-token":"ix-token","monolith":"tokencard","yobit":"yobit-token","exmr":"exmr-fdn","reddcoin":"redd","yamv3":"yamv1"};
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
