<script>
  let className
  export { className as class }
  export let columns
  export let items
  export let keyProp
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
              <svelte:component this={Component} {item} {...item} />
            {:else}
              {format(item, i)}
            {/if}
          </td>
        {/each}
      </tr>
    {/each}
  </tbody>
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
</style>
