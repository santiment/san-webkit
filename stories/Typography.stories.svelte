<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'

  const fonts = ['h2', 'h3', 'h4', 'body-1', 'body-2', 'body-3', 'caption']
</script>

<Meta title="Example/Typography" />

<Template let:args>
  <div class="mrg-xl mrg--b">
    Medium = <span class="class mrg-l mrg--r">.txt-m</span> Bold =
    <span class="class">.txt-b</span>
  </div>
  {#each fonts as font}
    <div class="row {font}">
      <span class="class body-3">.{font}</span> Regular
      <span class="txt-m">Medium</span>
      <span class="txt-b">Bold</span>
    </div>
  {/each}
</Template>

<Story name="Typography" />

<style>
  .btn-1,
  .btn-2 {
    display: inline-flex;
  }

  .row {
    gap: 22px;
    margin: 0 0 16px;
    border-top: 1px solid var(--porcelain);
    padding: 16px 0 0;
  }

  .class {
    font-family: monospace;
    border-radius: 4px;
    background: var(--porcelain);
    padding: 2px 4px;
    align-self: center;
  }
</style>
