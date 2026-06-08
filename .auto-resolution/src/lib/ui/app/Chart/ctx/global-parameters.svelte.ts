import type { TInterval, TMetricTargetSelectorInputObject } from '../api/index.js'
import type { TAssetSlug } from '$lib/ctx/assets/index.js'

import { createCtx } from '$lib/utils/index.js'
import {
  CRYPTO_ERA_START_ISO,
  parseAsStartEndDate,
  suggestPeriodInterval,
} from '$lib/utils/dates/index.js'

export type TGlobalParameters = {
  from: string
  to: string
  interval?: null | TInterval
  selector: TMetricTargetSelectorInputObject
  includeIncompleteData: boolean
}

export const useChartGlobalParametersCtx = createCtx(
  'webkit_useChartGlobalParametersCtx',
  (defaultCtxValue?: Partial<TGlobalParameters>) => {
    const parameters = $state<TGlobalParameters>({
      from: 'utc_now-60d',
      to: 'utc_now',
      selector: { slug: 'bitcoin' as TAssetSlug },
      includeIncompleteData: true,
      ...defaultCtxValue,
    })

    const dates = $derived({
      from: parameters.from,
      to: parameters.to,
      fromUtcDate: parseAsStartEndDate(parameters.from, { dayStart: true, utc: true }),
      toUtcDate: parseAsStartEndDate(parameters.to, { dayStart: false, utc: true }),
    })

    const autoInterval = $derived(
      suggestPeriodInterval(dates.fromUtcDate, dates.toUtcDate) as TInterval,
    )

    return {
      globalParameters: {
        get $$() {
          return parameters
        },

        get dates$() {
          return dates
        },

        get autoInterval$() {
          return autoInterval
        },

        changeDates(from: string, to: string) {
          parameters.from = from
          parameters.to = to
        },

        applyDateRange(dateRange: string) {
          let from = dateRange

          if (from.toLowerCase() === 'all') {
            from = CRYPTO_ERA_START_ISO
          } else if (Number.isNaN(Date.parse(dateRange))) {
            from = `utc_now-${dateRange}`
          }

          this.changeDates(from, 'utc_now')
        },
      },
    }
  },
)
