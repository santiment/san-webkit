import { parseRangeString } from '../../../../../utils/dates/index.js';
import { TimeModifiers } from '../../time.js';
import { Operations } from './operations.js';
function checkIsUsdMetric(metric) {
    return ['price_usd', 'marketcap_usd'].includes(metric);
}
export function getOperationSign(metric, operation) {
    if (operation.includes('percent'))
        return '%';
    if (checkIsUsdMetric(metric))
        return '$';
    return '';
}
export function describe(metric, conditions) {
    const { time, operation } = conditions;
    const sign = metric ? getOperationSign(metric, operation.type) : '';
    let description = operation.type.includes('percent') ? 'moving ' : 'goes ';
    description += Operations[operation.type].describe(operation.values.map((v) => (v || 1) + sign));
    const { amount, modifier } = parseRangeString(time);
    return (description +
        ` compared to ${amount || 1} ${TimeModifiers[modifier].label.toLowerCase()} earlier`);
}
