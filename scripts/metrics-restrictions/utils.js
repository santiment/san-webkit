// NOTE: This is .js file since it will be used during build process, which doesn't support TS

import { TODO_DELETE_LEGACY_DESCRIPTION } from './TODO_DELETE_LEGACY_DESCRIPTION.js'

/**
 * @typedef {{
  name: string
  minInterval: string
  restrictedFrom: null | string
  restrictedTo: null | string
  docs: { description?: string; links: string }
  availableVersions: string[]
}} _TMetricRestrictions
 */

/**
 *
 * @param {{getAccessRestrictions: {
 * n: string
 * mi: string
 * rf: null | string
 * rt: null | string
 * d: { l: string }[]
 * av: { v: string }[]
 * }[]}} gql - GQL data response
 *
 * @returns {Record<string, undefined | {
 * minInterval: string,
 * restrictedFrom: null | string,
 * restrictedTo: null | string,
 * docs: {
 *  description?: string
 *  academyLinks: string[]
 * },
 * availableVersions: string[]
 * }>}
 */
export function mapAccessRestrictionsData(gql) {
  const MetricsRestrictions = gql.getAccessRestrictions.reduce((acc, item) => {
    return Object.assign(acc, {
      [item.n]: {
        minInterval: item.mi,
        restrictedFrom: item.rf,
        restrictedTo: item.rt,
        availableVersions: item.av.map((item) => item.v),
        docs: {
          // TODO: Remove after moving to Metrics Registry description
          // @ts-ignore
          description: TODO_DELETE_LEGACY_DESCRIPTION[item.n],
          academyLinks:
            item.d?.map((item) => item.l.replace('https://academy.santiment.net', '')) || [],
        },
      },
    })
  }, {})

  return MetricsRestrictions
}
