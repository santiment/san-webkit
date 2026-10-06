import { parseRangeString } from '../../../../../utils/dates/index.js';
import { TimeModifiers } from '../../time.js';
import { isComparisonOperation, Operations, } from './operations.js';
function checkIsUsdMetric(metric) {
    return ['price_usd', 'marketcap_usd'].includes(metric);
}
export function getOperationSign(metric, operation) {
    if (operation.includes('percent'))
        return '%';
    if (metric && checkIsUsdMetric(metric))
        return '$';
    return '';
}
export function describeConditions(metric, { operation, time }) {
    return describeOperation(metric, operation) + describeOperationTime(operation.type, time);
}
function describeOperation(metric, operation) {
    const sign = getOperationSign(metric, operation.type);
    return Operations[operation.type].describe(operation.values.map((v) => (v || 1) + sign));
}
function describeOperationTime(operationType, time) {
    if (!isComparisonOperation(operationType))
        return '';
    const { amount, modifier } = parseRangeString(time);
    return ` compared to ${amount || 1} ${TimeModifiers[modifier].label.toLowerCase()} ago`;
}
