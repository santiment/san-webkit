import { TimeZones } from '$lib/utils/dates/timezone.js'
import { createCtx } from '$lib/utils/index.js'
import { useUiCtx } from '$lib/ctx/ui/index.js'

export const useTimeZoneCtx = createCtx('webkit_useTimeZoneCtx', () => {
  const { ui } = useUiCtx.get()

  const timeZone = $derived(TimeZones[ui.$$.timeZone])
  const utcLabel = $derived(timeZone?.utcLabel || 'UTC')

  function applyTimeZoneOffset(date: Date, utcMinutesOffset = timeZone?.utcMinutesOffset || 0) {
    date.setUTCMinutes(date.getUTCMinutes() + utcMinutesOffset)
    return date
  }

  return {
    timeZone: {
      get $() {
        return timeZone
      },
      get utcLabel$() {
        return utcLabel
      },
    },

    applyTimeZoneOffset,
  }
})
