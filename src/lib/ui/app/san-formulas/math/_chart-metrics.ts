import type { ConstantNode, FunctionNode, SymbolNode } from 'mathjs'

import { math, Timeseries } from './core.js'

const selector_from = math.typed('selector_from', {
  Timeseries: ({ selector }: Timeseries) => {
    if (!selector) {
      throw new Error("Chart metric doesn't have a selector")
    }

    return selector
  },
})

const _asset_metric = math.typed('asset_metric', {
  'string, any': (_apiMetricName: string, selector: string | { slug: string }, ...args) => {
    console.log(...args, 132)
    if (
      !selector ||
      !(typeof selector === 'string' || (typeof selector === 'object' && 'slug' in selector))
    ) {
      throw new Error('Invalid asset selector was passed to "asset_metric" function')
    }

    return new Timeseries([], null)
  },
})

function __asset_metric(
  args: (ConstantNode | SymbolNode | FunctionNode)[],
  _math: any,
  scope: Map<any, any>,
) {
  // evaluate the arguments
  const [apiMetricName, selector] = args.slice(0, 2).map((arg) => arg.compile().evaluate(scope))

  if (
    !selector ||
    !(typeof selector === 'string' || (typeof selector === 'object' && 'slug' in selector))
  ) {
    throw new Error('Invalid asset selector was passed to "asset_metric" function')
  }

  scope.set(args[0].toString() + ',' + args[1].toString(), [apiMetricName, selector])

  console.log(scope)

  return new Timeseries([], null)
}
//__asset_metric.rawArgs = true

const asset_metric = createTransformableMathFunction('asset_metric', {
  processArgs(args, scope) {
    if (args.length > 2) {
      throw new Error('Function "asset_metric" accepts only two arguments')
    }

    // eslint-disable-next-line prefer-const
    let [apiMetricName, selector] = args.slice(0, 2).map((arg) => arg.compile().evaluate(scope))

    if (typeof selector === 'string') {
      selector = { slug: selector }
    } else if (selector?.slug) {
      // All good
    } else {
      throw new Error('Invalid asset selector was passed to "asset_metric" function')
    }

    return [apiMetricName, selector] as [string, { slug: string }]
  },

  processResult() {
    return new Timeseries([], null)
  },
})

export const MathChartMetrics = {
  selector_from,
  asset_metric,
}

function createTransformableMathFunction<GName extends string, GProcessedArgs = any>(
  name: GName,
  controller: {
    processArgs: (
      args: (ConstantNode | SymbolNode | FunctionNode)[],
      scope: Map<any, any>,
    ) => GProcessedArgs
    processResult: (processedArgs: GProcessedArgs) => unknown
  },
) {
  const fnScopeId = `__${name}_id` as const
  const getTempId = (id: number) => `__${name}_${id}`

  function fn(
    args: (ConstantNode | SymbolNode | FunctionNode)[],
    _math: any,
    scope: Map<any, any>,
  ) {
    const id = scope.get(fnScopeId) ?? 0
    const processedArgs = controller.processArgs(args, scope)

    scope.set(getTempId(id), processedArgs)
    scope.set(fnScopeId, id + 1)

    return controller.processResult(processedArgs)
  }

  fn.rawArgs = true
  fn.tempId = fnScopeId
  fn.getTransformationVariableName = (scope: Map<any, any>) => {
    const id = scope.get(fnScopeId) ?? 0
    scope.set(fnScopeId, id + 1)

    return getTempId(id)
  }

  return fn
}
