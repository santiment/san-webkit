<script context="module" lang="ts">
  import { dialogs } from '@/ui/Dialog'
  import CancelSubscriptionDialog from './CancelSubscriptionDialog.svelte'

  export const showCancelSubscriptionDialog = () => dialogs.show(CancelSubscriptionDialog)

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
  enum Event {
    SelectReason = 'cancel_subscribtion_select_reason',
    GiveFeedback = 'cancel_subscribtion_give_feedback',
  }
</script>

<script lang="ts">
  import Dialog from '@/ui/Dialog'
  import Svg from '@/ui/Svg/svelte'
  import Checkbox from '@/ui/Checkbox.svelte'
  import { track } from '@/analytics'
  import { showIntercom } from '@/analytics/intercom'
  import { mutateCancelSubscription } from '@/api/subscription'
  import { notifications$ } from '@/ui/Notifications'
  import { subscription$ } from '@/stores/subscription'

  let screen = Screen.Suggestions
  let closeDialog
  let reasons = new Set()
  let feedback = ''

  $: subscription = $subscription$
  $: disabled = screen === Screen.Feedback && (reasons.size === 0 || !feedback)

  const formatError = (msg) => msg.replace('GraphQL error: ', '')
  function onCancellationClick() {
    if (screen === Screen.Suggestions) return (screen = Screen.Feedback)

    if (!subscription) return

    track.event(Event.GiveFeedback, { feedback })

    mutateCancelSubscription(subscription.id)
      .then(() => {
        closeDialog()
        subscription$.refetch()
        notifications$.show({
          type: 'success',
          title: 'You have successfully canceled your subscription.',
          description: 'We will miss you!',
        })
      })
      .catch((e) => {
        const { message } = e[0] || e
        notifications$.show({
          type: 'error',
          title: 'Error during the cancellation',
          description: formatError(message),
          // actions: contactAction,
        })
      })
  }

  function onReasonSelect(reason) {
    if (reasons.has(reason)) {
      reasons.delete(reason)
    } else {
      track.event(Event.SelectReason, { reason })
      reasons.add(reason)
    }

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

          <div class="collapsable" class:visible={reasons.size}>
            <h3 class="c-waterloo txt-b mrg-s mrg--b">Just one last thing</h3>
            <textarea
              cols="30"
              rows="3"
              placeholder="Tell us how we can make Santiment better for you in the future"
              class="input"
              bind:value={feedback}
            />
          </div>
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

      <div
        class="column mrg-xxl mrg--t"
        class:collapsable={screen === Screen.Feedback}
        class:visible={screen === Screen.Feedback && reasons.size > 0}
      >
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

  .collapsable {
    max-height: 0;
    overflow: hidden;
    transition: max-height 400ms ease-in-out;
  }

  .visible {
    max-height: 300px;
  }
</style>
