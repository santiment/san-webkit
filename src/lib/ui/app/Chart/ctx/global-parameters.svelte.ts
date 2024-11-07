import { createCtx } from '$lib/utils/index.js'
import type { TInterval, TMetricTargetSelectorInputObject } from '../api/index.js'

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
      selector: { slug: 'bitcoin' },
      includeIncompleteData: true,
      ...defaultCtxValue,
    })

    return {
      globalParameters: {
        get $$() {
          return parameters
        },
      },
    }
  },
)
