const {map} = require('./mock')

describe('Map function', () => {

    let array, fn

    beforeEach(() => {  //Если нужен тут асинхронный код, то либо вернуть промис, либо исп. async/await
        array = [1, 1, 2, 3, 5, 8, 13]
        fn = jest.fn(x => x ** 2)   //Создаем свою какую угодно ф/ю, чтоб воспользоваться м/дами ниже
        map(array, fn)  //Должна вызываться ф/я, чтоб проверить что при вызове происходило

    })

    test('Should call callback', () => {
        expect(fn).toBeCalled() //Проверка, что ф/я была вызвана
    })
    test('Should call callback 7 times', () => {
        expect(fn).toBeCalledTimes(7) //Проверка, что ф/я была вызвана 7 раз
        expect(fn.mock.calls.length).toBe(7)    //То же самое
    })
    test('Should pow 2 each element', () => {
        expect(fn.mock.results[1].value).toBe(1)
        expect(fn.mock.results[2].value).toBe(4)
        expect(fn.mock.results[3].value).toBe(9)
    })
    test('Should fn work', () => {
        fn
            .mockReturnValueOnce(100)   //Заставить ф/ю 1й раз вернуть 100
            .mockReturnValueOnce(200)   //Заставить ф/ю 2й раз вернуть 200
            .mockReturnValue('x')   //Заставить ф/ю далее всегда возвращать 'x'

            expect(fn()).toBe(100)
            expect(fn()).toBe(200)
            expect(fn()).toBe('x')
            expect(fn()).toBe('x')
    })
})