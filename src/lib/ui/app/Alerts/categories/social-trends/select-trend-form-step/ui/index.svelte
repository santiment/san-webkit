<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TAlertStep } from '$ui/app/Alerts/form-steps/index.svelte.js'

  import Checkbox from '$ui/core/Checkbox/index.js'
  import Button from '$ui/core/Button/index.js'

  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()
</script>

<Button as="label" class="gap-2 text-fiord">
  Assets
  <Checkbox
    isActive={'slug' in step.state.$$.target}
    onCheckedChange={() => {
      step.state.$$ = { target: { slug: [] }, operation: { trending_project: true } }
    }}
  ></Checkbox>
</Button>

<Button as="label" class="gap-2 text-fiord">
  Trending words
  <Checkbox
    isActive={'word' in step.state.$$.target}
    onCheckedChange={() => {
      step.state.$$ = { target: { word: [] }, operation: { trending_word: true } }
    }}
  ></Checkbox>
</Button>

<Button as="label" class="gap-2 text-fiord">
  Watchlist
  <Checkbox
    isActive={'watchlist_id' in step.state.$$.target}
    onCheckedChange={() => {
      step.state.$$ = { target: { watchlist_id: 0 }, operation: { trending_project: true } }
    }}
  ></Checkbox>
</Button>
