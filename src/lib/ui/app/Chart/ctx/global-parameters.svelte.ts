import type { TInterval, TMetricTargetSelectorInputObject } from '../api/index.js'
import type { TAssetSlug } from '$lib/ctx/assets/index.svelte.js'

import { createCtx } from '$lib/utils/index.js'
import { parseAsStartEndDate } from '$lib/utils/dates/index.js'

export type TGlobalParameters = {
  from: string
  to: string
  interval: TInterval
  selector: TMetricTargetSelectorInputObject
  includeIncompleteData: boolean
}

export const useChartGlobalParametersCtx = createCtx(
  'webkit_useChartGlobalParametersCtx',
  (defaultCtxValue?: Partial<TGlobalParameters>) => {
    const parameters = $state<TGlobalParameters>({
      from: 'utc_now-60d',
      to: 'utc_now',
      interval: '4h',
      selector: { slug: 'bitcoin' as TAssetSlug },
      includeIncompleteData: true,
      ...defaultCtxValue,
    })

    const dates = $derived({
      from: parameters.from,
      to: parameters.to,
      fromUtcDate: parseAsStartEndDate(parameters.from, { dayStart: true, utc: true }),
      toUtcDate: parseAsStartEndDate(parameters.to, { dayStart: true, utc: true }),
    })

    return {
      globalParameters: {
        get $$() {
          return parameters
        },

        get dates$() {
          return dates
        },
      },
    }
  },
)
