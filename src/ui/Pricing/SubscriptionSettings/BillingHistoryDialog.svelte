<script context="module" lang="ts">
  import { dialogs } from '@/ui/Dialog'
  import BillingHistoryDialog from './BillingHistoryDialog.svelte'

  export const showBillingHistoryDialog = (props?: any) => dialogs.show(BillingHistoryDialog, props)
</script>

<script lang="ts">
  import Dialog from '@/ui/Dialog'
  import Table from '@/ui/Table/svelte'
  import { getDateFormats } from '@/utils/dates'
  import { getPrice, priceFormatter } from '@/utils/plans'

  export let history = []

  const columns = [
    {
      title: '#',
      className: 'cell-min c-waterloo',
      format: (_, i) => i + 1,
    },
    {
      title: 'Date',
      format: ({ createdAt }) => {
        const { MMM, DD, YYYY } = getDateFormats(new Date(createdAt))
        return `${MMM} ${DD}, ${YYYY}`
      },
    },
    {
      title: 'Plan',
      format: ({ description }) => description,
    },
    {
      title: 'Action',
      format: ({ status }) => status,
    },
    {
      title: 'Amount',
      format: ({ amount }) => (amount ? priceFormatter(getPrice(amount)) : '-'),
    },
  ]
</script>

<Dialog {...$$props} title="Billing history">
  <div class="dialog-body">
    <Table {columns} items={history} class="border $style.table" />
  </div>
</Dialog>

<style>
  .dialog-body {
    padding: 20px 24px;
    width: 600px;
    max-width: 100%;
    overflow: auto;
  }

  .table :global(thead) {
    position: sticky;
    top: -21px;
  }
</style>
