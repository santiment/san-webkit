<script lang="ts">
  import Table from '@/ui/Table/Paged.svelte'
  import { Item, columns, generateItems } from './mock'

  let items: Item[] = []

  async function onPageChange(page: number, pageSize: number) {
    console.log(`Fetching ${pageSize} items for page ${page}...`)
    items = await fetchItems(pageSize)
  }

  async function fetchItems(pageSize: number) {
    return new Promise<Item[]>((resolve) => {
      setTimeout(() => {
        resolve(generateItems(pageSize))
      }, 300)
    })
  }
</script>

<section>
  <Table {items} {columns} totalItems={20} pageSize={5} rows={[5, 10, 20]} {onPageChange} />
</section>
