<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import Toggle from '@/ui/Toggle.svelte'
  import ToggleVisibility from '@/ui/ToggleVisibility.svelte'

  let isActive = false
</script>

<Meta title="Example/Toggles" />

<Story name="Toggles">
  <main>
    <div class="row">
      Regular
      <Toggle {isActive} on:click={() => (isActive = !isActive)} class="mrg-s mrg--l" />
    </div>

    <div class="row">
      Big
      <Toggle big {isActive} on:click={() => (isActive = !isActive)} class="mrg-s mrg--l" />
    </div>

    <div class="row">
      Visibility - Regular
      <ToggleVisibility {isActive} on:click={() => (isActive = !isActive)} class="mrg-s mrg--l" />
    </div>

    <div class="row">
      BiVisibility - big
      <ToggleVisibility
        big
        {isActive}
        on:click={() => (isActive = !isActive)}
        class="mrg-s mrg--l"
      />
    </div>
  </main>
</Story>

<style>
  main {
    padding: 30px;
  }

  .row {
    align-items: center;
    margin: 0 0 16px;
  }
</style>
