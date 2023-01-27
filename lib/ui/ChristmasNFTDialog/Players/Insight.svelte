<script context="module">const SIGNAL_INSIGHT_QUERY = id => `{
    insight(id:${id}) { id title }
  }`;

const querySignalInsight = insightId => query(SIGNAL_INSIGHT_QUERY(insightId));</script>

<script>import { trackNftBattleLinkClick } from './../../../analytics/events/nftbattle';
import { query } from './../../../api';
import { getSEOLinkFromIdAndTitle } from './../../../utils/url';
export let value; // sanbaseInsight

let id = 0;
let title = '';

$: querySignalInsight(value).then(({
  insight
}) => {
  id = insight.id;
  title = insight.title;
});</script>

{#if id}
  <div class="single-line">
    <a
      href="https://insights.santiment.net/read/{getSEOLinkFromIdAndTitle(id, title)}"
      target="_blank"
      rel="noopener noreferrer"
      on:click={trackNftBattleLinkClick}
      data-source="players_table">{title}</a
    >
  </div>
{:else}
  <div class="skeleton" />
{/if}

<style>
  div {
    max-width: 175px;
  }
</style>
