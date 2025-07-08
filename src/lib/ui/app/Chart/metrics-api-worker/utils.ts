export function parseFormulaVariables(expr: string) {
  const vars = expr.match(/(x|m)\d+/g) || []

  return vars.map((item) => ({
    name: item,
    metricIndex: +item.slice(1) - 1,
  }))
}
