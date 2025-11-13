import type { ConstantNode, FunctionNode, SymbolNode } from 'mathjs'

import { Timeseries } from './core.js'

export function createTransformableMathFunction<GName extends string, GProcessedArgs = any>(
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

// TODO(vanguard): Write tests before release
export function alignTimeseries(a: Timeseries, b: Timeseries): [Timeseries, Timeseries] {
  const isASmaller = a.timestamps.length < b.timestamps.length
  const [base, target] = isASmaller ? [a, b] : [b, a]

  const baseValues = new Array<number>(base.values.length)
  const targetValues = new Array<number>(target.values.length)
  const alignedTimestamps = base.timestamps.slice()

  let targetIndex = 0
  let alignedSize = 0

  baseLoop: for (let baseIndex = 0; baseIndex < base.timestamps.length; baseIndex++) {
    const baseTimestamp = base.timestamps[baseIndex]

    while (true) {
      const targetTimestamp = target.timestamps[targetIndex]

      if (baseTimestamp > targetTimestamp) {
        targetIndex += 1
      } else if (baseTimestamp < targetTimestamp) {
        break
      } else {
        // baseTimestamp === targetTimestamp

        baseValues[alignedSize] = base.values[baseIndex]
        targetValues[alignedSize] = target.values[targetIndex]
        alignedTimestamps[alignedSize] = baseTimestamp

        alignedSize += 1
        targetIndex += 1

        break
      }

      if (targetIndex >= target.timestamps.length) {
        break baseLoop
      }
    }
  }

  baseValues.length = alignedSize
  targetValues.length = alignedSize
  alignedTimestamps.length = alignedSize

  const [aAlignedValues, bAlignedValues] = isASmaller
    ? [baseValues, targetValues]
    : [targetValues, baseValues]

  return [
    new Timeseries(aAlignedValues, alignedTimestamps),
    new Timeseries(bAlignedValues, alignedTimestamps),
  ]
}
