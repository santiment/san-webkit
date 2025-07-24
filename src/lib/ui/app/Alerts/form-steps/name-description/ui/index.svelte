<script lang="ts">
  import type { TBaseSchema, TState } from '../schema.js'
  import type { TBaseState } from '../../index.svelte.js'

  import { onMount } from 'svelte'

  import { Textarea } from '$ui/core/Input/index.js'
  import { useAlertFormCtx } from '$ui/app/Alerts/ctx/index.svelte.js'

  type TProps = {
    state: TBaseState<TBaseSchema>
  }

  const { state }: TProps = $props()

  const { schema, steps } = useAlertFormCtx.get()

  async function suggestTitleAndDesc() {
    if (!state.$$.title) {
      state.$$.title = await schema.suggestTitle(steps)
    }

    if (!state.$$.description) {
      state.$$.description = await schema.suggestDescription(steps)
    }
  }

  onMount(() => {
    suggestTitleAndDesc()
  })
</script>

<section class="flex flex-col gap-6">
  {@render textarea('Alert name', 'title', 2)}
  {@render textarea('Description', 'description', 4)}
</section>

{#snippet textarea(title: string, name: keyof TState, rows: number)}
  <label class="title flex flex-col rounded border px-4 py-3">
    <p class="text-xs text-waterloo">{title}</p>
    <Textarea
      class="border-none px-0"
      inputClass="pb-0 resize-none"
      {rows}
      value={state.$$[name]}
      oninput={(e) => (state.$$[name] = e.currentTarget.value)}
    />
  </label>
{/snippet}
