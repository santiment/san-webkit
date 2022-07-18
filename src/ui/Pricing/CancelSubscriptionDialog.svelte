<script context="module" lang="ts">
  import { dialogs } from '@/ui/Dialog'
  import CancelSubscriptionDialog from './CancelSubscriptionDialog.svelte'

  export const showCancelSubscriptionDialog = (props?: any) =>
    dialogs.show(CancelSubscriptionDialog, props)

  const REASONS = [
    'Found other tool that fits my needs better',
    'I don’t need all the features',
    'Too difficult to use',
    'Too expensive',
    'Other',
  ]

  enum Screen {
    Suggestions,
    Feedback,
  }
</script>

<script lang="ts">
  import Dialog from '@/ui/Dialog'
  import Svg from '@/ui/Svg/svelte'
  import Checkbox from '@/ui/Checkbox.svelte'
  import { showIntercom } from '@/analytics/intercom'
  import Suggestions from '../Editor/Suggestions/Suggestions.svelte'

  export let DialogPromise: SAN.DialogController
  export let plan

  let screen = Screen.Feedback
  let closeDialog
  let reasons = new Set()
  let feedback = ''

  $: disabled = screen === Screen.Feedback && (reasons.size === 0 || !feedback)

  function onCancellationClick() {
    if (screen === Screen.Suggestions) return (screen = Screen.Feedback)
  }

  function onReasonSelect(reason) {
    if (reasons.has(reason)) reasons.delete(reason)
    else reasons.add(reason)
    reasons = reasons
  }
</script>

<Dialog {...$$props} bind:closeDialog>
  <svelte:fragment slot="title">
    {#if screen === Screen.Feedback}
      <button class="back btn row v-center" on:click={() => (screen = 0)}>
        <Svg id="arrow-right" w="8" h="14" class="mrg-m mrg--r" />
        Cancel
      </button>
    {:else}
      Subscription cancelling
    {/if}
  </svelte:fragment>

  <div class="dialog-body row">
    <section class="txt-center">
      <h2 class="h4 txt-m mrg-xl mrg--b">
        {#if screen === Screen.Feedback}
          We’re sorry to see you go 😔
        {:else}
          Cancel subscription?
        {/if}
      </h2>
      <div class="help column">
        <h3 class="c-waterloo txt-b mrg-xs mrg--b">
          {#if screen === Screen.Feedback}
            Help us understand why:
          {:else}
            Before you go, give us a chance to help you:
          {/if}
        </h3>

        {#if screen === 1}
          <div class="reasons column mrg-l mrg--t mrg--b nowrap">
            {#each REASONS as reason}
              <button class="btn row v-center" on:click={() => onReasonSelect(reason)}>
                <Checkbox class="mrg-s mrg--r" isActive={reasons.has(reason)} />
                {reason}
              </button>
            {/each}
          </div>

          {#if reasons.size}
            <h3 class="c-waterloo txt-b mrg-s mrg--b">Just one last thing</h3>
            <textarea
              cols="30"
              rows="3"
              placeholder="Tell us how we can make Santiment better for you in the future"
              class="input"
              bind:value={feedback}
            />
          {/if}
        {:else}
          <a
            class="suggestion btn-2"
            target="_blank"
            href="https://academy.santiment.net/education-and-use-cases/"
            >Discover use cases on our Academy</a
          >
          <a
            class="suggestion btn-2"
            target="_blank"
            href="https://www.youtube.com/c/SantimentNetwork"
            >Gain insights on our Youtube channel</a
          >
          <button class="suggestion btn-2" on:click={showIntercom}
            >Request a custom subscription plan</button
          >
        {/if}
      </div>

      {#if screen === Screen.Suggestions || reasons.size > 0}
        <div class="column mrg-xxl mrg--t">
          <button class="cancel btn-2 btn-1 btn--l" class:disabled on:click={onCancellationClick}
            >Continue cancellation</button
          >
          <button
            class="contact btn-2 btn--l mrg-m mrg--t"
            class:disabled
            on:click={() => {
              showIntercom()
              closeDialog()
            }}>Contact Customer Service</button
          >
        </div>
      {/if}
    </section>

    {#if screen === Screen.Feedback}
      <section class="cat row hv-center">
        <Svg id="sad-cat" illus w="296" />
      </section>
    {/if}
  </div>
</Dialog>

<style lang="scss">
  .dialog-body {
    padding: 32px 56px;
  }

  section {
    flex: 1;
  }

  .help {
    padding: 24px 32px;
    background: var(--athens);
    border-radius: 4px;
  }

  .suggestion {
    padding: 14px;
    margin-top: 12px;
    --bg: var(--white);
  }

  .contact {
    background: none;
  }

  .cancel {
    --border: var(--green);
    --color-hover: var(--green-hover);

    &.disabled {
      --border: var(--porcelain);
      background: var(--athens);
    }
  }

  .back {
    --fill: var(--waterloo);
    --color-hover: var(--green);

    :global(svg) {
      transform: rotate(180deg);
    }
  }

  .reasons {
    gap: 12px;
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
</style>
