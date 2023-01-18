<script>import Dialog from './../../../ui/Dialog';
import Svg from './../../../ui/Svg/svelte';
import { showIntercom } from './../../../analytics/intercom';
import { subscription$ } from './../../../stores/subscription';
import { Screen, startCancellationFlow } from './flow';
import SuggestionsScreen from './SuggestionsScreen.svelte';
import FeedbackScreen from './FeedbackScreen.svelte';
let screen = Screen.Suggestions;
let closeDialog;
let reasons = new Set();
let feedback = '';
let loading = false;
let error = false;
$: subscription = $subscription$;
$: isFeedbackScreen = screen === Screen.Feedback;
$: DialogScreen = isFeedbackScreen ? FeedbackScreen : SuggestionsScreen;
function onCancellationClick() {
  if (screen === Screen.Suggestions) {
    screen = Screen.Feedback;
    return;
  }
  if (!subscription) return;
  if (reasons.size === 0 || !feedback) {
    error = true;
    return;
  }
  loading = true;
  startCancellationFlow(subscription, feedback, closeDialog).then(() => {
    loading = false;
  });
}
function onServiceClick() {
  showIntercom();
  closeDialog();
}</script>

<Dialog {...$$props} bind:closeDialog>
  <svelte:fragment slot="title">
    {#if isFeedbackScreen}
      <button class="back btn row v-center" on:click={() => (screen = 0)}>
        <Svg id="arrow-right" w="8" h="14" class="mrg-m mrg--r" />
        Cancel
      </button>
    {:else}
      Subscription cancelling
    {/if}
  </svelte:fragment>

  <div class="dialog-body row">
    <svelte:component
      this={DialogScreen}
      bind:reasons
      bind:feedback
      {error}
      {loading}
      {onCancellationClick}
      {onServiceClick}
    />
  </div>
</Dialog>

<style >.dialog-body {
  padding: 32px 16px;
}
:global(.desktop) .dialog-body {
  padding: 32px 56px;
}

.back {
  --fill: var(--waterloo);
  --color-hover: var(--green);
}
.back :global(svg) {
  transform: rotate(180deg);
}

.dialog-body :global(section) {
  flex: 1;
}</style>
