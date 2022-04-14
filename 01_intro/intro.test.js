const {sum, nativeNull} = require('./intro')

describe('Sum function:', () => {
    test('Should return sum of two values', () => {
        expect(sum(41, 1)).toBe(42)
        expect(sum(41, 1)).toEqual(42)
    })
    test('Should return value correctly to other', () => {
        expect(sum(4, 3)).toBeGreaterThan(4)
        expect(sum(4, 3)).toBeGreaterThanOrEqual(7)
        expect(sum(4, 3)).toBeLessThan(8)
        expect(sum(4, 3)).toBeLessThanOrEqual(7)
    })
    test('Should sum 2 float values correctly', () => {
        // expect(sum(0.1, 0.2)).toBe(0.3)
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3)  //Близок к 0.3
    })

    describe('Native null function:', () => {   //Для примера, что м.б. вложенность
        test('Should return false value null', () => {
            expect(nativeNull()).toBe(null)
        })
    })

})

describe('Native null function:', () => {
    test('Should return false value null', () => {
        expect(nativeNull()).toBe(null)
        expect(nativeNull()).toBeNull()
        // expect(nativeNull()).toBeNaN()
        expect(nativeNull()).toBeFalsy()    //undefined, null, 0, ''
        expect(nativeNull()).toBeDefined()
        expect(nativeNull()).not.toBeTruthy()   //Не true
        expect(nativeNull()).not.toBeUndefined()   //Не неопределен (определен)

    })
})
