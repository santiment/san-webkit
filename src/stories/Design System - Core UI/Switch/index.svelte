<script lang="ts">
  import Button from '$ui/core/Button/Button.svelte'
  import Switch, { PrivacySwitch } from '$ui/core/Switch/index.js'
</script>

<main class="flex flex-col items-start gap-6 px-6 py-10">
  <section>
    <h3>Off - Normal</h3>
    <Switch />
  </section>

  <section>
    <h3>On - Normal</h3>
    <Switch checked />
  </section>

  <section>
    <h3>Off - Disabled</h3>
    <Switch disabled />
  </section>

  <section>
    <h3>On - Disabled</h3>
    <Switch checked disabled />
  </section>

  <section>
    <h3>Switch Button</h3>

    <Button as="label">
      Text sample
      <Switch />
    </Button>

    <Button as="label">
      <Switch />
      Text sample
    </Button>
  </section>

  <section>
    <h3>Privacy Switch</h3>
    <PrivacySwitch />
  </section>
</main>
