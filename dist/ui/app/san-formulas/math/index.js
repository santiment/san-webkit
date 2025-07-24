import { math, Timeseries } from './core.js';
import { MathOperators } from './_operators.js';
import { MathIndicators } from './_indicators.js';
import { MathChartMetrics } from './_chart-metrics.js';
export const DEFINITIONS = {
    ...MathOperators,
    ...MathIndicators,
    ...MathChartMetrics,
};
export const TRANSFORMABLE_FNS = new Map(Object.entries(DEFINITIONS)
    .map(([key, item]) => ('tempId' in item ? [key, item] : null))
    .filter(Boolean));
math.import(DEFINITIONS, { override: true });
export { math as SanFormulas, Timeseries } from './core.js';
export function evaluateTransformationScope(formulaExpr, scopeSetup) {
    const scope = new Map(scopeSetup.map(([varName, selector]) => [varName, new Timeseries([], selector)]));
    math.evaluate(formulaExpr, scope);
    for (const [, controller] of TRANSFORMABLE_FNS) {
        scope.set(controller.tempId, 0);
    }
    return scope;
}
