import { onMount, untrack } from 'svelte'

import { createCtx } from '$lib/utils/index.js'

import { useTimeZoneCtx } from './timezone.svelte.js'

export const useClockCtx = createCtx('utils_useClockCtx', () => {
  const { timeZone, applyTimeZoneOffset } = useTimeZoneCtx()

  let date = $state.raw(new Date())
  let time = $state(createTime(date))

  $effect.pre(() => {
    const offset = timeZone.$?.utcMinutesOffset || 0

    untrack(() => {
      date = applyTimeZoneOffset(new Date(), offset)
      time = createTime(date)
    })
  })

  onMount(() => {
    const interval = setInterval(() => {
      if (++time[2] === 60) {
        time[2] = 0
        if (++time[1] === 60) {
          time[1] = 0
          if (++time[0] === 24) {
            time[0] = 0
          }
        }
      }
    }, 1000)

    return () => clearInterval(interval)
  })

  return {
    time: {
      get $() {
        return `${pad(time[0])}:${pad(time[1])}:${pad(time[2])} (${timeZone.utcLabel$})`
      },
    },
  }
})

function pad(value: number) {
  return value.toString().padStart(2, '0')
}

function createTime(date: Date) {
  return [date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()]
}
