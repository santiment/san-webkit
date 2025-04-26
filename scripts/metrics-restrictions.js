import { fetchGql } from './fetch.js'
import { mapAccessRestrictionsData } from '../src/lib/ctx/metrics-registry/restrictions/utils.js'

export const fetchMetricsRestrictions = () =>
  fetchGql(`{ getAccessRestrictions  {
  n:name
  mi:minInterval
  d:docs { l:link }
}}`).then(mapAccessRestrictionsData)

/**
 *
 * @param {string} src - Source code
 * @param {string} data - Stringified JSON object
 * @returns {string}
 */
export const replaceDefaultMetricsRestrictionsSource = (src, data) =>
  src.replace('DEFAULT_METRICS_RESTRICTIONS = {}', `DEFAULT_METRICS_RESTRICTIONS = ${data}`)
