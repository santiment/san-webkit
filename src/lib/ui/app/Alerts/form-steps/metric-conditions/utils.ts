import type { TConditionsState } from './schema.js'

import { parseRangeString } from '$lib/utils/dates/index.js'

import { TimeModifiers } from '../../time.js'
import { isComparisonOperation, Operations, type TOperationType } from './operations.js'

function checkIsUsdMetric(metric: string) {
  return ['price_usd', 'marketcap_usd'].includes(metric)
}

export function getOperationSign(metric: string, operation: TOperationType): '' | '%' | '$' {
  if (operation.includes('percent')) return '%'

  if (checkIsUsdMetric(metric)) return '$'

  return ''
}

export function describeConditions(metric: null | string, conditions: TConditionsState) {
  const { operation } = conditions
  const sign = metric ? getOperationSign(metric, operation.type) : ''

  const description = Operations[operation.type].describe(
    operation.values.map((v) => (v || 1) + sign) as [string, string],
  )

  return description + getTimeDescription(conditions)
}

function getTimeDescription({ operation, time }: TConditionsState) {
  if (!isComparisonOperation(operation.type)) return ''

  const { amount, modifier } = parseRangeString(time)

  return ` compared to ${amount || 1} ${TimeModifiers[modifier].label.toLowerCase()} ago`
}
