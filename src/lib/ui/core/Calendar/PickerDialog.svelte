<script lang="ts" module>
  import Component from './PickerDialog.svelte'

  export const showPickerDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import type { ComponentProps } from 'svelte'

  import Dialog from '../Dialog/Dialog.svelte'
  import { dialogs$, type TDialogProps } from '../Dialog/dialogs.js'
  import Calendar from './Calendar.svelte'
  import Button from '../Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'

  type TProps = TDialogProps &
    Omit<ComponentProps<typeof Calendar>, 'class'> & {
      class?: string
      calendarClass?: string
    }

  const {
    Controller,
    onChange,
    date: initialDate,
    class: className,
    calendarClass,
    ...rest
  }: TProps = $props()

  let date = $state(initialDate)

  const close = () => Controller.close()
</script>

<Dialog class={cn('h-auto', className)}>
  <h2
    class="flex items-center justify-between fill-waterloo px-5 py-3 text-base font-medium text-fiord"
  >
    Choose a date

    <Button icon="close" iconSize="12" class="h-6" onclick={close} />
  </h2>

  <Calendar class={cn('max-w-full', calendarClass)} {date} onChange={(d) => (date = d)} {...rest} />

  <Button
    variant="fill"
    size="lg"
    class="mx-5 mb-5 mt-6 justify-center"
    onclick={() => {
      onChange?.(date)
      close()
    }}
  >
    Apply
  </Button>
</Dialog>
