const defaultCompare = (a, b) => a - b;
export function binSearch(items, target, compare = defaultCompare) {
    let start = 0;
    let stop = items.length - 1;
    let value = undefined;
    let mid = 0;
    while (start < stop) {
        mid = Math.floor((start + stop) / 2);
        value = items[mid];
        const dir = compare(value, target);
        if (dir === 0 || value === undefined)
            break;
        if (dir < 0)
            stop = mid - 1;
        else
            start = mid + 1;
    }
    return { value, mid };
}
//# sourceMappingURL=search.js.map