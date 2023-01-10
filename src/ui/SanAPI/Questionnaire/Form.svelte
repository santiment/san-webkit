<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import Pagination from './Pagination.svelte'
  import { Page } from './types'

  export let page: Page
  export let title: string
  export let variants: string[]
  export let closeDialog

  let answer = ''
  let other = ''
</script>

<button class="btn close row hv-center" on:click={closeDialog}>
  <Svg id="close" w="12" />
</button>

<main class="wrapper column">
  <h4 class="h4 mrg-xl mrg--b">{title}</h4>

  <div class="column variants body-2">
    {#each variants as variant}
      <label class="row v-center">
        <input type="radio" bind:group={answer} value={variant} />
        {variant}
      </label>
      {#if variant === 'Other'}
        <textarea
          placeholder="Write your text here..."
          bind:value={other}
          on:focus={() => (answer = 'Other')}
        />
      {/if}
    {/each}
  </div>

  {#if page < Page.Final}
    <Pagination bind:page answer={other || answer} />
  {/if}
</main>

<style lang="scss">
  .close {
    --fill: var(--waterloo);
    position: absolute;
    right: 24px;
    top: 24px;
    height: 12px;
  }

  .wrapper {
    width: 600px;
    padding: 64px 120px 80px;
  }

  .variants {
    gap: 12px;
  }

  label {
    gap: 12px;
    cursor: pointer;
  }

  input[type='radio'] {
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--form-background);
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 16px;
    height: 16px;
    border: 1px solid var(--porcelain);
    border-radius: 4px;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }

  input[type='radio']::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    border-radius: 2px;
    transform: scale(0);
    transition: 100ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--blue);
  }

  input[type='radio']:checked {
    border-color: var(--blue);

    &::before {
      transform: scale(1);
    }
  }

  label:hover {
    input[type='radio'] {
      border-color: var(--blue-hover);
    }
  }

  textarea {
    height: 80px;
    padding: 10px 12px;
    border: 1px solid var(--porcelain);
    border-radius: 4px;
    resize: none;
  }
</style>
