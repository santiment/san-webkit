export function keyify(object, keyName = 'key') {
    for (const key in object) {
        const value = object[key];
        value[keyName] = key;
    }
    return object;
}
