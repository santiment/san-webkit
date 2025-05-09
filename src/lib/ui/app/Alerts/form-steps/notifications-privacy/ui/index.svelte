<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TAlertStep } from '../../index.svelte.js'

  import Notifications from './Notifications.svelte'
  import Frequencies from './Frequencies.svelte'
  import Privacy from './Privacy.svelte'

  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()

  const state = $derived(step.state)
</script>

<section class="flex flex-col gap-4">
  <Notifications {state} />
  <Frequencies {state} />
  <Privacy {state} />
</section>
