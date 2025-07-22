import type { ConstantNode, FunctionNode, SymbolNode } from 'mathjs'

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
