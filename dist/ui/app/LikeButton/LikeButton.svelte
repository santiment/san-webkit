<script lang="ts">
  import { on } from 'svelte/events'
  import { noop } from 'rxjs'

  import Button from '../../core/Button/index.js'
  import { showLoginToUseFeatureDialog$ } from '../LoginToUseFeatureDialog/index.js'
  import Svg from '../../core/Svg/Svg.svelte'
  import { cn } from '../../utils/index.js'
  import { useCustomerCtx } from '../../../ctx/customer/index.svelte.js'
  import { Query } from '../../../api/executor.js'
  import { trackEvent } from '../../../analytics/index.js'

  import { mutateVote, normalizeFeatureType, type TVoteType } from './api.js'

  type TProps = {
    id: number | null | undefined
    type: TVoteType
    source: string
    class?: string
    totalVotes?: number
    userVotes?: number
    disabled?: boolean
    onVote?: () => void
    onVoted?: () => void
    hasBorder?: boolean
    maxVotesPerUser?: number
    voteInterval?: number
  }

  let {
    id,
    type,
    source,
    class: className = '',
    totalVotes = $bindable(0),
    userVotes = $bindable(0),
    disabled = false,
    onVote = noop,
    onVoted = noop,
    hasBorder = true,
    maxVotesPerUser = 20,
    voteInterval = 370,
  }: TProps = $props()

  const { currentUser } = useCustomerCtx()
  const showLoginToUseFeatureDialog = showLoginToUseFeatureDialog$()

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
    if (!currentUser.$$) return showLoginToUseFeatureDialog()
    if (!id) return
    if (userVotes >= maxVotesPerUser) return

    userVotes += 1
    totalVotes += 1
    onVote()

    trackEvent('vote', { id, feature: normalizeFeatureType(type), source })

    mutateVote(Query)(id, type)
      .then((res) => {
        console.log({ res })
        onVoted()
      })
      .catch(() => {
        totalVotes -= 1
        userVotes -= 1
      })
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
  <Svg id="rocket-active" h="20" class="group-hover:animate-shake group-disabled:animate-none" />

  <span
    style="--digits:{totalVotes.toString().length}"
    class="w-[calc(var(--digits)*1ch)] text-left"
  >
    {totalVotes}
  </span>
</Button>
