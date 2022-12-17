export const checkIsObject = (value) => value !== null && typeof value === 'object';
export const checkAreDiffObjects = (base, target) => !checkIsSameObject(base, target);
export function checkIsSameObject(base, target) {
    // null === null | ref === ref
    if (base === target)
        return true;
    // !null->(true) !== !ref->(false)
    if (!base !== !target)
        return false;
    const baseKeys = Object.keys(base);
    const targetKeys = Object.keys(target);
    if (baseKeys.length !== targetKeys.length)
        return false;
    for (let i = 0; i < baseKeys.length; i++) {
        const baseKey = baseKeys[i];
        const baseValue = base[baseKey];
        const targetValue = target[baseKey];
        if (Array.isArray(baseValue) && Array.isArray(targetValue)) {
            if (checkIsObject(baseValue[0])) {
                for (let j = 0; j < baseValue.length; j++) {
                    if (checkAreDiffObjects(baseValue[j], targetValue[j])) {
                        return false;
                    }
                }
            }
            else if (JSON.stringify(baseValue) !== JSON.stringify(targetValue)) {
                return false;
            }
            continue;
        }
        else if (checkIsObject(baseValue) &&
            checkIsObject(targetValue) &&
            checkIsSameObject(baseValue, targetValue)) {
            continue;
        }
        if (baseValue !== targetValue)
            return false;
    }
    return true;
}
//# sourceMappingURL=objects.js.map