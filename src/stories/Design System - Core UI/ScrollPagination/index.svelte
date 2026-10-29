<script lang="ts">
  import { randomNum, randomString } from '$lib/utils/random/index.js'
  import ScrollPagination from '$ui/core/ScrollPagination/index.js'

  const generateItem = () => ({ title: randomString(), value: randomNum(0, 200, 10) })

  const loadItems = (page: number, pageSize: number) =>
    Array<void>(pageSize)
      .fill(undefined)
      .map(() => ({ ...generateItem(), page }))

  let items = $state(loadItems(1, 1))

  let hasMore = $state(true)
</script>

<main class="flex justify-center gap-10 py-40">
  <section class="flex min-w-48 flex-col gap-4">
    <h2>Regular</h2>

    <ScrollPagination bind:items loadMore={(page) => Promise.resolve(loadItems(page, 2))} {hasMore}>
      {#each items as item, i}
        <div>page: {item.page}, index: {i} | {item.title} - {item.value}</div>
      {/each}
    </ScrollPagination>
  </section>
</main>
