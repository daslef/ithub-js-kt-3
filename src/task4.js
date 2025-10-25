export function hasCorrectElement(data, callback) {
    for (let i = 0; i < data.length; i += 1) {
        if (callback(data[i])) return true
    }
    return false
}
