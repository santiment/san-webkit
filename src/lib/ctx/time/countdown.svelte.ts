import { onMount } from 'svelte'
import { on } from 'svelte/events'

type TCountdownProps = {
  deadline?: Date
  durationSec?: number
}

export function useCountdown(props: TCountdownProps) {
  let interval: NodeJS.Timeout

  let deadline = $state(initDeadline(props))
  let secondsLeft = $derived(getSecLeft())

  function getSecLeft() {
    return Math.max(0, Math.ceil((deadline - Date.now()) / 1000))
  }

  function updateTimer() {
    secondsLeft = getSecLeft()

    if (secondsLeft === 0) {
      clearInterval(interval)
    }
  }

  function initDeadline({ durationSec, deadline }: TCountdownProps) {
    return deadline?.getTime() ?? Date.now() + (durationSec ?? 0) * 1000
  }

  function start() {
    interval = setInterval(updateTimer, 1000)
  }

  onMount(() => {
    start()

    const removeListener = on(window, 'visibilitychange', () => {
      if (document.hidden) return
      updateTimer()
    })

    return () => {
      removeListener()
      clearInterval(interval)
    }
  })

  function reset(props: TCountdownProps) {
    deadline = initDeadline(props)
    start()
  }

  return {
    secondsLeft: {
      get $() {
        return secondsLeft
      },
    },

    reset,
  }
}
