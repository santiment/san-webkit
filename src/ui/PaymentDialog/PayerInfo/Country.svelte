<script>
  import Input from '../Input.svelte'
  import { COUNTRIES } from './countries.ts'

  let isOpened = false
  let value
</script>

<Input
  class="relative"
  title="Country"
  placeholder="US"
  on:input={console.log}
  on:focus={() => (isOpened = true)}
>
  {#if isOpened}
    <suggestions class="column border box">
      {#each COUNTRIES as country}
        <button
          class="btn-ghost"
          on:click={() => {
            value = country[0]
            isOpened = false
          }}
        >
          {country[1]}
        </button>
      {/each}
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
