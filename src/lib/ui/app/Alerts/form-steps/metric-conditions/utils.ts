import type { TConditionsState } from './schema.js'

import { parseRangeString } from '$lib/utils/dates/index.js'

import { TimeModifiers } from '../../time.js'
import { Operations, type TOperationType } from './operations.js'

function checkIsUsdMetric(metric: string) {
  return ['price_usd', 'marketcap_usd'].includes(metric)
}

export function getOperationSign(metric: string, operation: TOperationType): '' | '%' | '$' {
  if (operation.includes('percent')) return '%'

  if (checkIsUsdMetric(metric)) return '$'

  return ''
}

export function describe(metric: null | string, conditions: TConditionsState) {
  const { time, operation } = conditions
  const sign = metric ? getOperationSign(metric, operation.type) : ''

  let description = operation.type.includes('percent') ? 'moving ' : 'goes '

  description += Operations[operation.type].describe(
    operation.values.map((v) => (v || 1) + sign) as [string, string],
  )

  const { amount, modifier } = parseRangeString(time)

  return (
    description +
    ` compared to ${amount || 1} ${TimeModifiers[modifier].label.toLowerCase()} earlier`
  )
}
