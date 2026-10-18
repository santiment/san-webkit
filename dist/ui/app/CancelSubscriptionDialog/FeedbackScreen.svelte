<script lang="ts">
  import { SvelteSet } from 'svelte/reactivity'

  import { useDeviceCtx } from '../../../ctx/device/index.js'
  import Button from '../../core/Button/index.js'
  import Checkbox from '../../core/Checkbox/index.js'
  import Svg from '../../core/Svg/index.js'
  import { trackEvent } from '../../../analytics/index.js'

  import Layout from './Layout.svelte'

  type TProps = {
    loading: boolean
    onSubscriptionCancel: (reasons: Set<string>, feedback: string) => void
  }
  let { loading = false, onSubscriptionCancel }: TProps = $props()

  const REASONS = [
    'Found other tool that fits my needs better',
    'I don’t need all the features',
    'Too difficult to use',
    'Too expensive',
    'Other',
  ]

  const { device } = useDeviceCtx()

  let reasons = new SvelteSet<string>()
  let textareaNode: HTMLTextAreaElement

  function toggleReason(reason: string) {
    const isActive = reasons.has(reason)

    trackEvent('cancel_subscribtion_select_reason', { reason, action: isActive ? 'off' : 'on' }) // NOTE: Old event with a typo
    trackEvent('cancel_subscription_select_reason', { reason, action: isActive ? 'off' : 'on' })

    if (isActive) reasons.delete(reason)
    else reasons.add(reason)
  }

  function onContinueClick() {
    onSubscriptionCancel(reasons, textareaNode?.value.trim() || '')
  }
</script>

<div class="flex">
  <Layout title="We’re sorry to see you go 😔" {loading} {onContinueClick}>
    <section class="mb-5 text-left">
      <h4 class="mb-4 font-medium">Help us understand why*</h4>

      <div class="gap-3 whitespace-nowrap column">
        {#each REASONS as item}
          <Button as="label" class="gap-2 text-fiord">
            <Checkbox isActive={reasons.has(item)} onCheckedChange={() => toggleReason(item)}
            ></Checkbox>
            {item}
          </Button>
        {/each}
      </div>
    </section>

    <section class="text-left">
      <h4 class="mb-4 font-medium">Just one last thing</h4>
      <textarea
        bind:this={textareaNode}
        cols="30"
        rows="3"
        placeholder="Tell us how we can make Santiment better for you in the future"
        class="min-h-[72px] w-full rounded border bg-white px-2 py-1.5 outline-none hover:border-green focus:border-green"
      ></textarea>
    </section>
  </Layout>

  {#if device.$.isDesktop}
    <section class="ml-14 flex border-l pl-[106px] pr-[50px] center">
      <Svg id="sad-cat" illus w="296" />
    </section>
  {/if}
</div>
