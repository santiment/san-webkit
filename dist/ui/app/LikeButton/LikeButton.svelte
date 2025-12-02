<script lang="ts">
  import { cn } from '../../utils/index.js'
  import Button from '../../core/Button/Button.svelte'

  import Rocket from './Rocket.svelte'
  import Moon from './Moon.svelte'

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

  let rocketNode: HTMLElement | undefined = $state()
  let moonNode: HTMLElement | undefined = $state()
  let mooned = $state(false)

  let timer: number
  let votingInterval: number

  function startVote(e: any) {
    e.preventDefault()

    if (disabled) return

    if (e.button === 2) {
      return
    }

    clearTimeout(timer)
    clearInterval(votingInterval)

    vote()
    votingInterval = window.setInterval(vote, voteInterval)
    window.addEventListener(e.type === 'mousedown' ? 'mouseup' : 'touchend', stopVote, {
      once: true,
    })
  }

  function vote() {
    if (userVotes < maxVotesPerUser) {
      userVotes += 1
      totalVotes += 1
      onVote()
    }

    if (rocketNode) {
      resetAnimation(rocketNode)

      const child = rocketNode.lastChild

      if (child instanceof HTMLElement) {
        resetAnimation(child)
      }
    }

    if (mooned && moonNode) resetAnimation(moonNode)

    mooned = true
  }

  function stopVote() {
    clearInterval(votingInterval)
    timer = window.setTimeout(() => (mooned = false), 1000)
  }

  function resetAnimation(node: HTMLElement) {
    if (node) {
      node.style.animation = 'none'
      node.offsetWidth
      node.style.animation = ''
    }
  }

  $effect(() => {
    return () => {
      clearTimeout(timer)
      clearInterval(votingInterval)
    }
  })
</script>

<Button
  class={cn(
    'btn v-center txt-m group relative rounded-full px-2.5 py-[5px] row',
    'ease-vote transition-all disabled:cursor-not-allowed disabled:opacity-50',
    userVotes > 0
      ? 'border-green bg-green-light-1 fill-green text-green hover:border-green-hover hover:bg-green-light-1 hover:fill-green-hover hover:text-green-hover'
      : 'fill-waterloo text-waterloo',
    className,
  )}
  variant={hasBorder ? 'border' : undefined}
  onmousedown={startVote}
  ontouchstart={startVote}
  {disabled}
>
  <Moon bind:moonNode {mooned} votes={userVotes} />

  <Rocket
    bind:rocketNode
    class={userVotes > 0 ? 'group-hover:[&_div]:bg-green' : 'group-hover:[&_div]:bg-waterloo'}
  />

  <span
    style="--digits:{totalVotes.toString().length}"
    class="w-[calc(var(--digits)*1ch)] text-left">{totalVotes}</span
  >
</Button>
