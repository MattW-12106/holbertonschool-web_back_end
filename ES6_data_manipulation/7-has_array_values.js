export default function hasValuesFromArray (set, array) {
    if (set.size !== array.length) {
        return false;
    }

    for (const item of array) {
        if (!set.has(item)) {
            return false;
        }
    }

    return true;
}