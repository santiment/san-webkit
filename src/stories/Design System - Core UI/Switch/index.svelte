<script lang="ts">
  import Switch from '$ui/core/Switch/index.js'
</script>

<main class="flex flex-col gap-6 px-6 py-10">
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
</main>
