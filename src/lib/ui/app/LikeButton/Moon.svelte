<script lang="ts">
  import { cn } from '$ui/utils/index.js'

  import moonPath from './moon.svg'

  type TProps = {
    votes: number
    moonNode: HTMLElement | undefined
    mooned?: boolean
  }
  let { mooned = false, votes, moonNode = $bindable() }: TProps = $props()

  let visible = $state(false)
  let enter = $state(false)

  $effect(() => {
    let timer: NodeJS.Timeout

    if (mooned) {
      visible = true

      requestAnimationFrame(() => {
        enter = true
      })
    } else {
      enter = false

      timer = setTimeout(() => {
        visible = false
      }, 400)
    }

    return () => {
      clearTimeout(timer)
    }
  })
</script>

{#if visible}
  <div
    bind:this={moonNode}
    class={cn(
      'pointer-events-none absolute left-0 top-[-36px] flex',
      'w-full animate-[scale_0.2s_ease-in-out] items-center justify-center',
      'whitespace-nowrap rounded-full bg-white p-[6px] text-sm',
      'text-black shadow transition-[transform,opacity] ease-out',
      enter
        ? 'translate-y-0 opacity-100 duration-[200ms]'
        : '-translate-y-[12px] opacity-0 duration-[400ms]',
    )}
  >
    <img src={moonPath} alt="moon" class="mr-1" />
    + {votes}
  </div>
{/if}

<style lang="postcss">
  :global {
    @keyframes scale {
      0% {
        transform: scale(1);
      }
      70% {
        transform: scale(1.06);
      }
      100% {
        transform: scale(1);
      }
    }
  }
</style>
