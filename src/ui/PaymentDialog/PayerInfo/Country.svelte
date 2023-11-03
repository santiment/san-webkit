<script lang="ts">
  import VirtualList from '@/ui/VirtualList/svelte'
  import { COUNTRIES } from './countries'
  import Input from '../Input.svelte'

  let isOpened = false
  let value = ''
  let searchTerm = ''
  let inputNode: any

  $: filtered = searchTerm ? filter(searchTerm) : COUNTRIES

  function filter(searchTerm: string) {
    const value = searchTerm.toLowerCase()

    return COUNTRIES.filter(
      ([code, name]) => code.toLowerCase().includes(value) || name.toLowerCase().includes(value),
    ).sort((a, b) => {
      if (a[0].toLowerCase() === value) return -1
      if (b[0].toLowerCase() === value) return 1
      return 0
    })
  }

  function onInput({ currentTarget }: any) {
    if (!inputNode) inputNode = currentTarget
    searchTerm = currentTarget.value.trim()
  }
</script>

<Input
  class="relative"
  title="Country"
  placeholder="US"
  on:input={onInput}
  on:focus={() => (isOpened = true)}
>
  {#if isOpened}
    <suggestions class="border box">
      <VirtualList items={filtered} maxFluidHeight={200} itemHeight={32} let:item>
        <button
          class="btn-ghost"
          on:click={() => {
            if (inputNode) inputNode.value = item[1]
            value = item[0]
            isOpened = false
          }}
        >
          {item[1]}
        </button>
      </VirtualList>
    </suggestions>
  {/if}

  <input type="text" class="hide" required name="address_country" {value} />
</Input>

<style>
  suggestions {
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    padding: 8px;
  }
</style>
