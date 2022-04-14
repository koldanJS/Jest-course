const Lodash = require('./sync')

let _ = new Lodash()

describe('Lodash: compact', () => {

    let array   //Не определяем его здесь, т.к. какой-то тест может изменить данные (но так быть не должно, они д.б. чистыми)

    beforeEach(() => {  //Делать перед каждым тестом
        array = [false, 42, 0, '', true, null, 'hello', undefined]
    })
    afterAll(() => {    //Делать после каждого теста
        _ = new Lodash()
    })

    test('should be defined', () => {
        expect(_.compact).toBeDefined()
    })
    test('should remove falsy values from array', () => {
        const result = [42, true, 'hello']
        // expect(_.compact(array)).toBe(result)    Подходит только для примитивов, не сравнит объекты
        expect(_.compact(array)).toEqual(result)    //Подходит для объектов
    })
    test('should not contains falsy values', () => {
        expect(_.compact(array)).not.toContain(false)
        expect(_.compact(array)).not.toContain(0)
        expect(_.compact(array)).not.toContain('')
        expect(_.compact(array)).not.toContain(false)
        expect(_.compact(array)).not.toContain(undefined)
    })
})

describe('Lodash: groupBy', () => {

    test('should be defined', () => {
        expect(_.groupBy).toBeDefined()
    })
    test('should group array items by math.floor', () => {
        const array = [2.2, 2.4, 4.2, 3.1]
        const result = {
            2: [2.2, 2.4],
            4: [4.2],
            3: [3.1]
        }
        expect(_.groupBy(array, Math.floor)).toEqual(result)
    })
    test('should group array items by length', () => {
        const array = ['one', 'two', 'three']
        const result = {
            5: ['three'],
            3: ['one', 'two']
        }
        expect(_.groupBy(array, 'length')).toEqual(result)
    })
    test('should not return array', () => {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
    })
})