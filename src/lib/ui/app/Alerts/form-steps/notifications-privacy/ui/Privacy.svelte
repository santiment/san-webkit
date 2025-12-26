<script lang="ts">
  import type { TNotificationsState } from '../schema.js'

  import Switch from '$ui/core/Switch/Switch.svelte'

  import Section from './Section.svelte'

  type TProps = {
    state: { $$: TNotificationsState }
  }

  const { state }: TProps = $props()
</script>

<Section title="Privacy settings">
  <label class="flex gap-2 px-4 py-3.5">
    <span>Public</span>

    <Switch
      bind:checked={state.$$.isPublic}
      icon={{ active: { id: 'checkmark', w: 12 }, inactive: { id: 'eye-crossed', w: 10 } }}
    />
  </label>
</Section>
