<script lang="ts">
  import type { TAlertStep } from '../../index.svelte.js'
  import type { TBaseSchema } from '../schema.js'

  type TProps = {
    step: TAlertStep<TBaseSchema>
  }

  let { step }: TProps = $props()

  const { title } = $derived(step.state.$$)
</script>

<span class="single-line">{title}</span>
