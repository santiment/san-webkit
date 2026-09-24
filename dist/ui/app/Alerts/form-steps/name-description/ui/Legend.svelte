<script lang="ts">
  import type { TBaseState } from '../../index.svelte.js'
  import type { TBaseSchema } from '../schema.js'

  type TProps = {
    state: TBaseState<TBaseSchema>
  }

  let { state }: TProps = $props()

  const { title } = $derived(state.$$)
</script>

<span class="single-line">{title}</span>
