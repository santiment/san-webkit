<script lang="ts">
  import Selector from '../Selector.svelte'

  const OPTIONS = [{ name: 'Monthly' }, { name: 'Annually' }]
</script>

<Selector name="Billing period" options={OPTIONS} onSelect={console.log}>
  {#snippet children(option)}
    <h3 class="flex h-[26px] w-full items-center justify-between">
      {option.name}

      {#if option.name === 'Annually'}
        <div class="rounded-md bg-white px-2 py-[5px] text-xs font-medium text-green">
          <span class="mr-2">🎉</span>SAVE 10%
        </div>
      {/if}
    </h3>

    <h4 class="align-bottom">
      $49

      <span class="text-sm font-normal text-waterloo">/ Month</span>
    </h4>
  {/snippet}
</Selector>
