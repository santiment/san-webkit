export function parseFormulaChartVariables(expr: string) {
  const vars = expr.match(/(m)\d+/g) || []

  return vars.map((item) => ({
    name: item,
    metricIndex: +item.slice(1) - 1,
  }))
}
