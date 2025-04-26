import type { TMetricRestrictions } from './api.js'

export const mapAccessRestrictionsData = (gql: {
  getAccessRestrictions: {
    n: string
    mi: string
    rf: null | string
    rt: null | string
    d: { l: string }[]
  }[]
}) => {
  const MetricsRestrictions = gql.getAccessRestrictions.reduce(
    (acc, item) => {
      return Object.assign(acc, {
        [item.n]: {
          minInterval: item.mi,
          restrictedFrom: item.rf,
          restrictedTo: item.rt,
          docs: {
            academyLinks:
              item.d?.map((item) => item.l.replace('https://academy.santiment.net', '')) || [],
          },
        },
      })
    },
    {} as Record<string, TMetricRestrictions>,
  )

  return MetricsRestrictions
}
