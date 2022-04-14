class Lodash {
    compact(array) {
        return array.filter(val => !!val)
    }
    groupBy(array, prop) {
        return array.reduce((acc, i) => {
            const key = typeof prop === 'function' ? prop(i) : i[prop]
            if (!acc[key]) acc[key] = []
            acc[key].push(i)
            return acc
        }, {})
    }
}

const _ = new Lodash()
// console.log(_.groupBy([2.2, 2.5, 3.6], Math.floor))

module.exports = Lodash