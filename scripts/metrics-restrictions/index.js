import { mapAccessRestrictionsData } from './utils.js'
import { fetchGql } from '../fetch.js'

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
