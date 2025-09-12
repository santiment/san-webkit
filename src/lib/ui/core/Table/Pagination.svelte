<script lang="ts">
  import type { ChangeEventHandler } from 'svelte/elements'

  import { noop } from '@melt-ui/svelte/internal/helpers'

  import Button from '$ui/core/Button/Button.svelte'
  import Input from '$ui/core/Input/Input.svelte'
  import Popover from '$ui/core/Popover/Popover.svelte'
  import { cn } from '$ui/utils/index.js'

  type TProps = {
    class?: string
    page?: number
    pageSize?: number
    rows?: number[]
    onPageChange?: (page: number, pageSize: number) => void
    totalItems: number
  }

  const {
    class: className,
    page = 1,
    pageSize = 25,
    rows = [10, 25, 50],
    onPageChange = noop,
    totalItems,
  }: TProps = $props()

  let isPageSizeOpened = $state(false)

  $effect(() => {
    if (!process.env.IS_DEV_MODE) return

    if (rows.length > 0 && !rows.includes(pageSize)) {
      console.error('[pageSize] value should be present in [rows] array or it should be empty')
    }
  })

  const pagesAmount = $derived(Math.ceil(totalItems / pageSize))
  const maxPage = $derived(pagesAmount)

  function adjustPageNumber(page: number) {
    if (!page || page < 1) return 1
    if (page > pagesAmount) return maxPage
    return page
  }

  const onPageInput: ChangeEventHandler<HTMLInputElement> = ({ currentTarget }) => {
    const value = +currentTarget.value
    const page = adjustPageNumber(value)

    onPageChange(page, pageSize)
  }

  function onPageSizeChange(size: number) {
    isPageSizeOpened = false
    onPageChange(1, size)
  }

  function onNextPage() {
    onPageChange(adjustPageNumber(page + 1), pageSize)
  }

  function onPrevPage() {
    onPageChange(adjustPageNumber(page - 1), pageSize)
  }
</script>

<section class={cn('flex items-center gap-4 whitespace-nowrap', className)}>
  {#if rows.length > 1}
    <Popover bind:isOpened={isPageSizeOpened}>
      {#snippet children({ props })}
        <Button
          {...props}
          class="sm:hidden"
          variant="border"
          size="md"
          icon="arrow-down"
          iconSize="8"
          iconHeight="5"
          iconOnRight
        >
          {pageSize} rows
        </Button>
      {/snippet}

      {#snippet content()}
        <section class="flex flex-col">
          {#each rows as option}
            <Button
              class={cn(option === pageSize && 'text-green')}
              onclick={() => onPageSizeChange(option)}
            >
              {option} rows
            </Button>
          {/each}
        </section>
      {/snippet}
    </Popover>
  {/if}

  <section class="flex items-center gap-2 text-waterloo">
    <span>Page</span>

    <Input
      class="text-center"
      inputClass="[appearance:textfield]"
      type="number"
      min="1"
      max={maxPage}
      value={page}
      onchange={onPageInput}
    />

    <section>
      <span>of {pagesAmount}</span>
    </section>
  </section>

  <section class="ml-auto flex gap-2">
    <Button
      class="[&>svg]:rotate-180"
      variant="border"
      disabled={page <= 1}
      size="md"
      icon="arrow-right"
      iconSize="5"
      iconHeight="8"
      iconOnRight
      onclick={onPrevPage}
    >
      Prev
    </Button>

    <Button
      variant="border"
      disabled={page >= maxPage}
      size="md"
      icon="arrow-right"
      iconSize="5"
      iconHeight="8"
      onclick={onNextPage}
    >
      Next
    </Button>
  </section>
</section>
