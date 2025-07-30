export function createTransformableMathFunction(name, controller) {
    const fnScopeId = `__${name}_id`;
    const getTempId = (id) => `__${name}_${id}`;
    function fn(args, _math, scope) {
        const id = scope.get(fnScopeId) ?? 0;
        const processedArgs = controller.processArgs(args, scope);
        scope.set(getTempId(id), processedArgs);
        scope.set(fnScopeId, id + 1);
        return controller.processResult(processedArgs);
    }
    fn.rawArgs = true;
    fn.tempId = fnScopeId;
    fn.getTransformationVariableName = (scope) => {
        const id = scope.get(fnScopeId) ?? 0;
        scope.set(fnScopeId, id + 1);
        return getTempId(id);
    };
    return fn;
}
