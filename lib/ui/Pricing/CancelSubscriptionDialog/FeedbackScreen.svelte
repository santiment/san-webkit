<script>import Svg from './../../../ui/Svg/svelte';
import Checkbox from './../../../ui/Checkbox.svelte';
import { track } from './../../../analytics';
import { Event, REASONS } from './flow';
import Screen from './Screen.svelte';
import { IsMobile as isMobile$ } from './../../../stores/responsive';
import FieldRequired from './FieldRequired.svelte';
export let feedback;
export let reasons;
export let error = false;
$: isMobile = $isMobile$;
function onReasonSelect(reason) {
  if (reasons.has(reason)) {
    reasons.delete(reason);
  } else {
    track.event(Event.SelectReason, {
      reason
    });
    reasons.add(reason);
  }
  reasons = reasons;
}</script>

<Screen {...$$props}>
  <svelte:fragment slot="title">We’re sorry to see you go 😔</svelte:fragment>

  <svelte:fragment slot="help">
    <h3 class="txt-m row v-center nowrap" class:error={error && reasons.size === 0}>
      Help us understand why*
      <FieldRequired />
    </h3>

    <div class="reasons column nowrap">
      {#each REASONS as reason}
        <button class="btn row v-center c-fiord" on:click={() => onReasonSelect(reason)}>
          <Checkbox class="mrg-s mrg--r" isActive={reasons.has(reason)} />
          {reason}
        </button>
      {/each}
    </div>

    <div>
      <h3 class="txt-m mrg-m mrg--b row v-center nowrap" class:error={error && !feedback}>
        Just one last thing*
        <FieldRequired />
      </h3>
      <textarea
        cols="30"
        rows="3"
        placeholder="Tell us how we can make Santiment better for you in the future"
        class="input fluid"
        bind:value={feedback}
      />
    </div>
  </svelte:fragment>

  <svelte:fragment slot="right">
    {#if !isMobile}
      <section class="cat row hv-center">
        <Svg id="sad-cat" illus w="296" />
      </section>
    {/if}
  </svelte:fragment>
</Screen>

<style >.reasons {
  gap: 12px;
  margin: 12px 0 20px;
}

textarea {
  resize: vertical;
  min-height: 72px;
}

.cat {
  border-left: 1px solid var(--porcelain);
  margin-left: 56px;
  padding: 0 50px 0 106px;
}

.error {
  --error: visible;
}</style>
