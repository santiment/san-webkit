<script lang="ts">
  import type { TChatMessageFeedback } from '../../types.js'

  import Button from '../../../../core/Button/Button.svelte'
  import { cn } from '../../../../utils/index.js'
  import Svg from '../../../../core/Svg/Svg.svelte'

  type TProps = {
    feedbackType?: TChatMessageFeedback | null
    messageId?: string
    class?: string
    onFeedbackSelect: (feedbackType: TChatMessageFeedback) => void
  }

  const { feedbackType, onFeedbackSelect, class: className = '' }: TProps = $props()

  let isThankOpen = $state(false)
  let hasShownOnce = $state(false)
  let prevFeedback: TChatMessageFeedback | null | undefined = $state(feedbackType)

  const isThumbUp = $derived(feedbackType === 'THUMBS_UP')
  const isThumbDown = $derived(feedbackType === 'THUMBS_DOWN')

  $effect(() => {
    const cameFromNull = prevFeedback === null && feedbackType !== null

    if (!hasShownOnce && cameFromNull) {
      isThankOpen = true
      hasShownOnce = true
    }

    prevFeedback = feedbackType
  })

  function handleSelect(type: TChatMessageFeedback) {
    onFeedbackSelect(type)
  }
</script>

<div class={cn('border-t border-porcelain pt-1', className)}>
  <div class="flex items-center justify-end gap-5">
    <p class="text-sm text-waterloo">Did Turtoshi answer correctly?</p>

    <div class="flex gap-2">
      <Button
        icon={isThumbUp ? 'thumb-up-filled' : 'thumb-up'}
        class="hover:fill-rhino"
        explanation="Good answer"
        onclick={() => handleSelect('THUMBS_UP')}
      />
      <Button
        icon={isThumbDown ? 'thumb-down-filled' : 'thumb-down'}
        class="hover:fill-rhino"
        explanation="Bad answer"
        onclick={() => handleSelect('THUMBS_DOWN')}
      />
    </div>
  </div>

  {#if isThankOpen}
    <div
      class={cn(
        'relative mt-5 flex items-center justify-center gap-[90px]',
        'rounded-md border border-porcelain bg-whale px-6 py-5',
        'sm:!gap-8 xs:!flex-col xs:!text-center',
      )}
    >
      <Button
        icon="close"
        iconSize={12}
        class="absolute right-[18px] top-[14px] h-6 w-6 hover:fill-rhino"
        onclick={() => (isThankOpen = false)}
      />
      <Svg illus id="turtle" w={116} h={136} />
      <h4 class="max-w-[313px] text-sm font-semibold text-fiord">
        Thank you, feedback received!<br />Adding it to my personal blockchain of wisdom. 📚
      </h4>
    </div>
  {/if}
</div>
