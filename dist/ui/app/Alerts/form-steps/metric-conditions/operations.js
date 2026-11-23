import { assertNever } from '../../../../../utils/assert.js';
import { keyify } from '../../../../../utils/object.js';
import { isNumericOperation } from '../../operations.js';
const SimpleOperations = keyify({
    above: {
        label: 'Above',
        describe: ([value]) => `goes above ${value}`,
        icon: 'condition/above',
    },
    below: {
        label: 'Below',
        describe: ([value]) => `goes below ${value}`,
        icon: 'condition/below',
    },
    inside_channel: {
        label: 'In range',
        describe: ([left, right]) => `goes above ${left} and below ${right}`,
        icon: 'condition/in-range',
    },
    outside_channel: {
        label: 'Out of range',
        describe: ([left, right]) => `goes below ${left} or above ${right}`,
        icon: 'condition/out-of-range',
    },
    percent_up: {
        label: 'Increase %',
        describe: ([value]) => `increased ${value} or more`,
        icon: 'condition/percent-up',
    },
    percent_down: {
        label: 'Decrease %',
        describe: ([value]) => `decreased ${value} or more`,
        icon: 'condition/percent-down',
    },
});
const CombinedOperations = keyify({
    percent_up_or_down: {
        label: 'Change %',
        describe: ([value]) => `changed ${value} or more`,
        icon: 'condition/percent-change',
    },
});
export const Operations = { ...SimpleOperations, ...CombinedOperations };
export function isSimpleOperationKey(key) {
    return key in SimpleOperations;
}
export function getOperationFromApi(operation) {
    if (!operation)
        return null;
    const key = Object.keys(operation)[0];
    const stateKey = compatLegacyOperations(key);
    if (isSimpleOperationKey(stateKey)) {
        const value = operation[key];
        if (!isNumericOperation(value))
            return null;
        return { type: stateKey, values: Array.isArray(value) ? value : [value, value] };
    }
    if (operation.some_of && Array.isArray(operation.some_of)) {
        const [first, second] = operation.some_of;
        if (typeof first === 'number' || typeof second === 'number')
            return null;
        const percent_up = first.percent_up ?? second.percent_up;
        const percent_down = first.percent_down ?? second.percent_down;
        if (typeof percent_up !== 'number' || typeof percent_down !== 'number')
            return null;
        return { type: 'percent_up_or_down', values: [percent_up, percent_down] };
    }
    return null;
}
function compatLegacyOperations(key) {
    switch (key) {
        case 'above_or_equal':
            return 'above';
        case 'below_or_equal':
            return 'below';
        default:
            return key;
    }
}
const DUPLEX_OPERATIONS = new Set(['inside_channel', 'outside_channel']);
export function isDuplexOperation(type) {
    return DUPLEX_OPERATIONS.has(type);
}
const COMPARISON_OPERATIONS = new Set([
    'percent_up',
    'percent_down',
    'percent_up_or_down',
]);
export const isComparisonOperation = (operation) => COMPARISON_OPERATIONS.has(operation);
export function reduceOperationToApi({ type, values }) {
    if (isSimpleOperationKey(type)) {
        return { [type]: isDuplexOperation(type) ? values : values[0] };
    }
    if (type === 'percent_up_or_down') {
        const [upValue, downValue] = isDuplexOperation(type) ? values : [values[0], values[0]];
        return { some_of: [{ percent_up: upValue }, { percent_down: downValue }] };
    }
    assertNever(type);
}
