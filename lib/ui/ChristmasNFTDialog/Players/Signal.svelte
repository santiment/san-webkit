<script>import { trackNftBattleLinkClick } from './../../../analytics/events/nftbattle';
export let item;

$: ({
  symbol,
  direction,
  closeDate,
  signalID,
  contractAddress
} = item);</script>

<a
  href="https://sanr.app/?signal={signalID}*{contractAddress}"
  target="_blank"
  rel="noopener noreferrer"
  on:click={trackNftBattleLinkClick}
  data-source="players_table"
  >{symbol} | {direction === 'up' ? 'SanRise' : 'SanSet'} | {closeDate ? 'Closed' : 'Open'}</a
>
