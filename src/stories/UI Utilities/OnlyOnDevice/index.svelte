<script lang="ts">
  import { useDeviceCtx } from '$lib/ctx/device/index.svelte.js'
  import OnlyOnDevice from '$ui/utils/OnlyOnDevice/index.js'

  const { device } = useDeviceCtx.get()
</script>

<main class="flex flex-col justify-center gap-10 p-5">
  <h3>Current device - {device.$.type}</h3>

  <section class="flex gap-6">
    <div class="flex flex-col gap-4">
      <h2 class="text-lg font-medium">Js mode</h2>

      {@render section('js')}
    </div>

    <div class="flex flex-col gap-4">
      <h2 class="text-lg font-medium">css mode</h2>

      {@render section('css')}
    </div>
  </section>
</main>

{#snippet section(mode: 'js' | 'css')}
  {@const css = mode === 'css'}

  <section>
    <OnlyOnDevice desktop tablet phone {css}>
      <div>desktop, tablet and phone (all)</div>
    </OnlyOnDevice>

    <OnlyOnDevice desktop tablet {css}>
      <div>desktop and tablet</div>
    </OnlyOnDevice>

    <OnlyOnDevice desktop {css}>
      <div>desktop only</div>
    </OnlyOnDevice>

    <OnlyOnDevice tablet phone {css}>
      <div>tablet and phone</div>
    </OnlyOnDevice>

    <OnlyOnDevice tablet {css}>
      <div>tablet only</div>
    </OnlyOnDevice>

    <OnlyOnDevice phone {css}>
      <div>phone only</div>
    </OnlyOnDevice>
  </section>
{/snippet}
