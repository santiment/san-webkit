<script lang="ts" module>
  import Component from './PickerDialog.svelte'

  export const showPickerDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import type { DateValue } from '@internationalized/date'

  import Dialog from '../Dialog/Dialog.svelte'
  import { dialogs$ } from '../Dialog/dialogs.js'
  import Calendar from './Calendar.svelte'
  import Button from '../Button/Button.svelte'

  type TProps = {
    date: Date
    class?: string
    minValue: DateValue
    maxValue: DateValue
    timeZone: string
  }

  let { date, ...rest }: TProps = $props()
</script>

<Dialog class="h-auto">
  <h2
    class="flex items-center justify-between fill-waterloo px-5 py-3 text-base font-medium text-fiord"
  >
    Choose a date

    <Button icon="close" iconSize="12" class="h-6" />
  </h2>

  <Calendar bind:date class="max-w-full" {...rest} />

  <Button variant="fill" size="lg" class="mx-5 mb-5 mt-6 justify-center">Apply</Button>
</Dialog>
