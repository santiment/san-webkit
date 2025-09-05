<script lang="ts">
  import type { TAiChatbotMessage } from '../../types.js'

  import Svg from '../../../../core/Svg/Svg.svelte'
  import Picture from '../../../Picture/Picture.svelte'
  import { cn } from '../../../../utils/index.js'
  import { useDeviceCtx } from '../../../../../ctx/device/index.svelte.js'

  import { formatChatTime } from '../../utils.js'

  type TProps = Pick<TAiChatbotMessage, 'role' | 'content' | 'insertedAt'> & {
    suggestions?: any
    feedback?: any
    sources?: any
  }

  const { device } = useDeviceCtx()

  const { role, content, insertedAt, sources, suggestions, feedback }: TProps = $props()

  const isPhone = $derived(device.$.isPhone)
  const userIcon = $derived(isPhone ? 12 : 16)
  const assistantIcon = $derived(isPhone ? 24 : 32)
  const iconSize = $derived(role === 'USER' ? userIcon : assistantIcon)
</script>

<div class={cn('rounded-md px-8 py-4 sm:px-3', role === 'USER' ? 'bg-athens' : 'bg-white')}>
  <header class="mb-1.5 flex items-center gap-4 sm:gap-2.5">
    <Picture
      class="h-8 w-8 flex-shrink-0 border border-transparent bg-white fill-rhino sm:h-6 sm:w-6"
    >
      <Svg id={role === 'ASSISTANT' ? 'turtoshi' : 'user'} w={iconSize} />
    </Picture>

    <div class="flex items-center gap-2">
      <h4 class="text-base font-semibold text-rhino sm:text-sm">
        {role === 'USER' ? 'You' : 'Turtoshi'}
      </h4>
      <p class="text-xs text-waterloo sm:text-2xs">Today {formatChatTime(insertedAt)}</p>
    </div>
  </header>

  <div class="gap-8 pl-12 md:pl-9">
    <div class="flex flex-col-reverse sm:flex-col">
      <p class="ai-chatbot-content w-fit break-all text-base text-rhino">
        {#if role === 'USER'}
          {content}
        {:else}
          {#await import('marked') then { marked }}
            {@html marked(content, { breaks: true })}
          {/await}
        {/if}
      </p>

      {@render sources?.()}
    </div>

    {@render feedback?.()}

    {@render suggestions?.()}
  </div>
</div>
