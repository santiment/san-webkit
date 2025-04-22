<script lang="ts">
  import type { TState } from '../schema.js'

  import Switch from '$ui/core/Switch/Switch.svelte'

  import Section from './Section.svelte'

  type TProps = {
    state: { $$: TState }
  }

  const { state }: TProps = $props()
</script>

<Section title="Privacy settings">
  <label class="flex gap-2 px-4 py-3.5">
    <span>Public</span>

    <Switch
      checked={state.$$.isPublic}
      onCheckedChange={(v) => (state.$$.isPublic = v)}
      icon={{ active: { id: 'checkmark', w: 8 }, inactive: { id: 'eye-crossed', w: 10 } }}
    />
  </label>
</Section>
