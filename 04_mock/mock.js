function map(array, callback) {
    const result = []
    for (element of array) {
        result.push(callback(element))
    }
    return result
}

module.exports = {map}