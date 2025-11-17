<script lang="ts">
  import { on } from 'svelte/events'

  import { cn } from '$ui/utils/index.js'
  import Button from '$ui/core/Button/Button.svelte'

  import Rocket from './Rocket.svelte'

  type TProps = {
    class?: string
    totalVotes?: number
    userVotes?: number
    disabled?: boolean
    onVote?: () => void
    hasBorder?: boolean
    maxVotesPerUser?: number
    voteInterval?: number
  }

  let {
    class: className = '',
    totalVotes = $bindable(0),
    userVotes = $bindable(0),
    disabled = false,
    onVote = () => {},
    hasBorder = true,
    maxVotesPerUser = 20,
    voteInterval = 370,
  }: TProps = $props()

  const isActive = $derived(userVotes > 0)

  let votingInterval: number

  function startVote(e: MouseEvent | TouchEvent) {
    e.preventDefault()

    if (disabled) return

    if ('button' in e && e.button === 2) {
      return
    }

    clearInterval(votingInterval)

    vote()
    votingInterval = window.setInterval(vote, voteInterval)
    on(window, e.type === 'mousedown' ? 'mouseup' : 'touchend', stopVote, {
      once: true,
    })
  }

  function stopVote() {
    clearInterval(votingInterval)
  }

  function vote() {
    if (userVotes < maxVotesPerUser) {
      userVotes += 1
      totalVotes += 1
      onVote()
    }
  }

  $effect(() => {
    return stopVote
  })
</script>

<Button
  class={cn(
    'group gap-1.5 px-[9px] text-fiord',
    isActive && 'border-casper bg-athens text-rhino',
    disabled && 'border-porcelain text-mystic',
    className,
  )}
  variant={hasBorder ? 'border' : undefined}
  size="md"
  onmousedown={startVote}
  ontouchstart={startVote}
  {disabled}
  circle
>
  <Rocket />

  <span
    style="--digits:{totalVotes.toString().length}"
    class="w-[calc(var(--digits)*1ch)] text-left"
  >
    {totalVotes}
  </span>
</Button>
