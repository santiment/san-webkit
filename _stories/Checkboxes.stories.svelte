<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Checkbox from '@/ui/Checkbox.svelte'

  let isActive = false
</script>

<Meta title="Example/Checkboxes" />

<Story name="Checkboxes">
  <main>
    <div class="row">
      Regular
      <Checkbox {isActive} on:click={() => (isActive = !isActive)} />
    </div>

    <div class="row">
      Active
      <Checkbox isActive={true} />
    </div>

    <div class="row">
      Disabled - not active
      <Checkbox disabled isActive={false} />
    </div>

    <div class="row">
      Disabled - active
      <Checkbox disabled isActive />
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
    gap: 8px;
  }
</style>
