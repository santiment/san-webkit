// NOTE: This is .js file since it will be used during build process, which doesn't support TS

/**
 *
 * @param {{getAccessRestrictions: {
 * n: string
 * mi: string
 * rf: null | string
 * rt: null | string
 * d: { l: string }[]
 * }[]}} gql - GQL data response
 *
 * @returns {Record<string, undefined | import("./api.js").TMetricRestrictions>}
 */
export function mapAccessRestrictionsData(gql) {
  const MetricsRestrictions = gql.getAccessRestrictions.reduce((acc, item) => {
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
  }, {})

  return MetricsRestrictions
}
