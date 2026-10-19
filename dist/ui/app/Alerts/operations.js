export function isNumericOperation(value) {
    return typeof value === 'number' || (Array.isArray(value) && typeof value[0] === 'number');
}
