import type { TRegistryMetric } from './api.js'

export function getMetricsCategoryGroupGraph(metrics: TRegistryMetric[]): TRegistryMetric[][][] {
  const result = [] as TRegistryMetric[][][]

  if (!metrics.length) {
    return result
  }

  let lastCategory = metrics[0]?.category
  let lastGroup = metrics[0]?.group

  let groups = [] as TRegistryMetric[][]
  let groupStart = 0

  for (let i = 0; i < metrics.length; i++) {
    const metric = metrics[i]

    const { category, group } = metric
    const isNewCategory = lastCategory !== category

    if (lastGroup !== group || isNewCategory) {
      groups.push(metrics.slice(groupStart, i))
      lastGroup = group
      groupStart = i
    }

    if (isNewCategory) {
      result.push(groups)
      lastCategory = category

      groups = []
    }
  }

  groups.push(metrics.slice(groupStart)) // NOTE: Appending last group
  result.push(groups)

  return result
}
