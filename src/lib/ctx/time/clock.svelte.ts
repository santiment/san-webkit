import { onMount, untrack } from 'svelte'

import { createCtx } from '$lib/utils/index.js'
import { TimeZones } from '$lib/utils/dates/index.js'
import { useUiCtx } from '$lib/ctx/ui/index.js'

export const useClockCtx = createCtx('utils_useClockCtx', () => {
  const { ui } = useUiCtx.get()

  const timeZone = $derived(TimeZones[ui.$$.timeZone])
  const utcLabel = $derived(timeZone?.utcLabel || 'UTC')

  let date = $state.raw(new Date())
  let time = $state(createTime(date))

  $effect.pre(() => {
    const offset = timeZone?.utcMinutesOffset || 0

    untrack(() => {
      const updated = new Date()
      updated.setUTCMinutes(updated.getUTCMinutes() + offset)

      date = updated
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
        return `${pad(time[0])}:${pad(time[1])}:${pad(time[2])} (${utcLabel})`
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
