<script lang="ts">
  import type { TNotificationsState } from '../schema.js'

  import { PrivacySwitch } from '../../../../../core/Switch/index.js'

  import Section from './Section.svelte'

  type TProps = {
    state: { $$: TNotificationsState }
  }

  const { state }: TProps = $props()
</script>

<Section title="Privacy settings">
  <label class="flex w-min gap-2 px-4 py-3.5">
    <span>Public</span>

    <PrivacySwitch bind:checked={state.$$.isPublic} />
  </label>
</Section>
