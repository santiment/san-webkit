<script>
  import Table from '@/ui/Table/index.svelte'

  const columns = [
    {
      title: 'Price',
      format: ({ value }) => '$' + value,
      sortAccessor: ({ value }) => value,
    },
    {
      title: 'Tokens',
      format: ({ volume }) => volume + ' VOL',
      sortAccessor: ({ volume }) => volume,
    },
  ]

  const items = [
    { id: 0, value: 300, volume: 2000 },
    { id: 1, value: 100, volume: 4000 },
    { id: 2, value: 800, volume: 90 },
    { id: 3, value: 50, volume: 1000 },
    { id: 4, value: 2000, volume: 30 },
    { id: 5, value: 150, volume: 5000 },
  ]
</script>

<Table {items} {columns} keyProp="id" />
