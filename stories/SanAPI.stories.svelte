<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Dialogs from '@/ui/Dialog/Dialogs.svelte'
  import { showBanner } from '@/ui/SanAPI/Banner.svelte'
  import { showQuestionnaire } from '@/ui/SanAPI/Questionnaire/Questionnaire.svelte'
  import OnMount from './PaymentDialog/OnMount.svelte'
</script>

<Meta title="Example/SanAPI" />

<Template>
  <button on:click={showQuestionnaire}>Show dialog</button>
</Template>

<Story name="Banner">
  <OnMount run={showBanner} />
</Story>

<Story name="Intro - 0">
  <OnMount run={() => showQuestionnaire()} />
</Story>

<Story name="Do - 1">
  <OnMount run={() => showQuestionnaire({ page: 1 })} />
</Story>

<Story name="Time - 2">
  <OnMount run={() => showQuestionnaire({ page: 2 })} />
</Story>

<Story name="Data - 3">
  <OnMount run={() => showQuestionnaire({ page: 3 })} />
</Story>

<Story name="SQL - 4">
  <OnMount run={() => showQuestionnaire({ page: 4 })} />
</Story>

<Story name="Charts - 5">
  <OnMount run={() => showQuestionnaire({ page: 5 })} />
</Story>

<Story name="Amount - 6">
  <OnMount run={() => showQuestionnaire({ page: 6 })} />
</Story>

<Story name="Provider - 7">
  <OnMount run={() => showQuestionnaire({ page: 7 })} />
</Story>

<Story name="Final - 8">
  <OnMount run={() => showQuestionnaire({ page: 8 })} />
</Story>

<Dialogs />
