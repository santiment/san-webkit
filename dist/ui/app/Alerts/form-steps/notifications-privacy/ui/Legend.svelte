<script lang="ts">
  import type { TBaseState } from '../../index.svelte.js'
  import type { TBaseSchema } from '../schema.js'

  import StepValue from '../../../Dialog/StepValue.svelte'
  import Svg from '../../../../../core/Svg/Svg.svelte'

  import { formatChannels } from '../utils.js'

  type TProps = { state: TBaseState<TBaseSchema> }

  const { state }: TProps = $props()

  const { channel, isPublic } = $derived(state.$$)

  const formattedChannels = $derived(formatChannels(channel))
</script>

<section class="flex flex-col items-start gap-2">
  <StepValue>
    <Svg id="eye" w="16" />
    {isPublic ? 'Public' : 'Private'} alert
  </StepValue>

  {#if formattedChannels}
    <StepValue>
      {formattedChannels}
    </StepValue>
  {/if}
</section>
