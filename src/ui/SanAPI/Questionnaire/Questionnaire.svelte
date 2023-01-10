<script context="module" lang="ts">
  import { dialogs } from '@/ui/Dialog'
  import Questionnaire from './Questionnaire.svelte'
  import { checkIsQuestionnaireStarted, saveDialogClose } from './api'
  export const showQuestionnaire = (props?: any) => dialogs.showOnce(Questionnaire, props)
</script>

<script lang="ts">
  import { onDestroy } from 'svelte'
  import Dialog from '@/ui/Dialog'
  import Form from './Form.svelte'
  import Intro from './Intro.svelte'
  import Final from './Final.svelte'
  import { Page } from './types'
  export let page = checkIsQuestionnaireStarted() ? Page.Do : Page.Intro

  const pages = {
    [Page.Do]: {
      title: 'I do:',
      variants: [
        'Work at a fund, or a trading firm, or a VC firm',
        'Manage my own portfolio',
        'Create trading strategies or bots for others',
        'Use the data in my app',
        'Research or journalism',
        'Other',
      ],
    },
    [Page.Time]: {
      title: 'Time horizon of my strategy mainly is:',
      variants: [
        'Longer term (daily and above)',
        'Shorter term (hourly and below)',
        'Somewhere in the middle (between hourly and daily)',
        'I do all of them',
        'No strategy, research purposes only',
      ],
    },
    [Page.Data]: {
      title: 'I’d like to get data via:',
      variants: ['Python library', 'HTTP requests', 'Other'],
    },
    [Page.SQL]: {
      title: 'I’d like to use SQL for data exploration:️',
      variants: ['Yes', 'No'],
    },
    [Page.Charts]: {
      title: 'I’d like to explore the data visually through charts:',
      variants: ['Yes', 'No'],
    },
    [Page.Amount]: {
      title: 'I have interest in the following amount of cryptocurrencies:',
      variants: [
        'Only up to 5-10 top coins',
        'Coins traded on major exchanges',
        'As many coins as possible',
      ],
    },
    [Page.Provider]: {
      title: 'Before Santiment, the crypto data provider I used most is:',
      variants: [
        'Cryptocompare',
        'Nansen',
        'Glassnode',
        'Cryptoquant',
        'Messari',
        'Token terminal',
        'None',
        'Other',
      ],
    },
  }

  onDestroy(() => {
    if (process.browser) {
      saveDialogClose()
    }
  })
</script>

<Dialog
  {...$$props}
  noTitle={page !== Page.Final}
  title={page === Page.Final ? 'Thank you!' : undefined}
  class="$style.dialog {page === Page.Final ? '$style.final' : ''}"
  let:closeDialog
>
  {#if page === Page.Intro}
    <Intro {closeDialog} bind:page />
  {:else if page === Page.Final}
    <Final {closeDialog} bind:page />
  {:else}
    {@const { title, variants } = pages[page]}
    <Form {title} {variants} bind:page />
  {/if}
</Dialog>

<style lang="scss">
  .dialog {
    max-width: 600px !important;
  }

  .final {
    max-width: 960px !important;
  }
</style>
