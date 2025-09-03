<script lang="ts">
  import type { TAiChatbotMessage } from '../../types.js'

  import Svg from '$ui/core/Svg/Svg.svelte'
  import Picture from '$ui/app/Picture/Picture.svelte'
  import { cn } from '$ui/utils/index.js'
  import { useDeviceCtx } from '$lib/ctx/device/index.svelte.js'

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

<div
  class={cn(
    'flex gap-4 rounded-md px-8 py-4 sm:gap-2.5 sm:px-3',
    role === 'USER' ? 'bg-athens' : 'bg-white',
  )}
>
  <Picture
    class="h-8 w-8 flex-shrink-0 border border-transparent bg-white fill-rhino sm:h-6 sm:w-6"
  >
    <Svg id={role === 'ASSISTANT' ? 'turtoshi' : 'user'} w={iconSize} />
  </Picture>

  <div>
    <header class="mb-1.5 flex items-center gap-2">
      <h4 class="text-base font-semibold text-rhino sm:text-sm">
        {role === 'USER' ? 'You' : 'Turtoshi'}
      </h4>
      <p class="text-xs text-waterloo sm:text-2xs">Today {formatChatTime(insertedAt)}</p>
    </header>

    {@render sources?.()}

    <p class="content w-fit break-all text-base text-rhino">
      {#if role === 'USER'}
        {content}
      {:else}
        {#await import('marked') then { marked }}
          {@html marked(content, { breaks: true })}
        {/await}
      {/if}
    </p>

    {@render feedback?.()}

    {@render suggestions?.()}
  </div>
</div>

<style lang="postcss">
  :global(.content) {
    & ul {
      @apply mb-2 list-disc pl-6;
    }

    & ol {
      @apply mb-2 list-decimal pl-6;
    }

    & li {
      @apply mb-1;
    }

    & pre {
      @apply overflow-x-auto rounded-md bg-porcelain p-3 text-rhino;
    }

    & code {
      @apply whitespace-normal break-words;
    }

    & a {
      @apply link-pointer;
    }
  }
</style>
