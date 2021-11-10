<script>
  let className
  export { className as class }
  export let columns
  export let items
  export let keyProp
  export let minRows = undefined
  export let isLoading = false

  $: rowsPadding = minRows ? getMinRows(items.length, columns.length) : ''

  const COLUMN_PADDING = '<td></td>'
  function getMinRows(itemsLength, columnsLength) {
    const rowsAmount = minRows - itemsLength
    if (rowsAmount <= 0) return ''

    const columnsPadding = ''.padStart(
      columnsLength * COLUMN_PADDING.length,
      COLUMN_PADDING
    )

    let rows = ''
    for (let i = 0; i < rowsAmount; i++) {
      rows += '<tr>' + columnsPadding + '</tr>'
    }
    return rows
  }
</script>

<table class="panel {className}">
  <thead>
    <tr>
      {#each columns as { title, className } (title)}
        <th class={className || ''}>{title}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each items as item, i (item[keyProp])}
      <tr>
        {#each columns as { title, className, format, Component } (title)}
          <td class={className || ''}>
            {#if Component}
              <svelte:component this={Component} {item} />
            {:else}
              {format(item, i)}
            {/if}
          </td>
        {/each}
      </tr>
    {/each}
    {#if rowsPadding}
      {@html rowsPadding}
    {/if}
  </tbody>
  <caption>
    {#if isLoading}
      <div class="loader">Loading...</div>
    {/if}
  </caption>
</table>

<style>
  :global(.cell-auto) {
    max-width: 0;
    width: 100%;
  }

  :global(.cell-min) {
    width: 1px;
  }

  table {
    width: 100%;
    border-spacing: 0;
    text-align: left;
    position: relative;
  }

  table :global(th),
  table :global(td) {
    white-space: nowrap;
  }

  table :global(th) {
    font-weight: 500;
    padding: 5px 15px;
    color: var(--casper);
    background: var(--athens);
    border-bottom: 1px solid var(--porcelain);
  }

  table :global(td) {
    padding: 8px 15px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  table :global(tbody tr:hover td) {
    background: var(--athens);
  }

  .loader {
    padding: 10px 20px;
    color: var(--casper);
    background: var(--athens);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    border-radius: 4px;
  }
</style>
