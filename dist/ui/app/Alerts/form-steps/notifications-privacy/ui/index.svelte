<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TBaseState } from '../../index.svelte.js'

  import Notifications from './Notifications.svelte'
  import Frequencies from './Frequencies.svelte'
  import Privacy from './Privacy.svelte'

  type TProps = { state: TBaseState<TBaseSchema> }

  const { state }: TProps = $props()
</script>

<section class="flex flex-col gap-4">
  <Notifications {state} />
  <Frequencies {state} />
  <Privacy {state} />
</section>
