<script>import { trackNftBattleLinkClick } from './../../../analytics/events/nftbattle';
export let value;

$: ({
  address,
  username = address
} = value);</script>

<div class="single-line">
  <a
    href="https://sanr.app/user/{username}"
    target="_blank"
    rel="noopener noreferrer"
    on:click={trackNftBattleLinkClick}
    data-source="players_table"
  >
    {username}
  </a>
</div>

<style>
  div {
    max-width: 100px;
  }
</style>
