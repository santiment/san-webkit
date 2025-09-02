<script lang="ts">
  import type { TAiChatbotMessage } from '../../types.js'

  import Svg from '$ui/core/Svg/Svg.svelte'
  import Picture from '$ui/app/Picture/Picture.svelte'
  import { cn } from '$ui/utils/index.js'

  import { formatChatTime } from '../../utils.js'

  type TProps = Pick<TAiChatbotMessage, 'role' | 'content' | 'insertedAt'> & {
    suggestions?: any
    feedback?: any
    sources?: any
  }

  const { role, content, insertedAt, sources, suggestions, feedback }: TProps = $props()
</script>

<div class={cn('flex gap-4 rounded-md px-8 py-4', role === 'USER' ? 'bg-athens' : 'bg-white')}>
  <Picture class="h-8 w-8 flex-shrink-0 border border-transparent bg-white fill-rhino">
    <Svg id={role === 'ASSISTANT' ? 'turtoshi' : 'user'} w={role === 'USER' ? 16 : 32} />
  </Picture>

  <div>
    <header class="mb-1.5 flex items-center gap-2">
      <h4 class="text-base font-semibold text-rhino">{role === 'USER' ? 'You' : 'Turtoshi'}</h4>
      <p class="text-xs text-waterloo">Today {formatChatTime(insertedAt)}</p>
    </header>

    {@render sources?.()}

    <p class="content w-fit break-words text-base text-rhino">
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
