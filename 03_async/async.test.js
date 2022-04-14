const Ajax = require('./async')
const axios = require('axios')

jest.mock('axios')  //Мокает модуль ... хз

describe('Ajax: echo', () => {
    test('Should return value async', async () => {
        const data = 'some data'
        const result = await Ajax.echo(data)
        expect(result).toBe(data)
    })
    test('Should return value with promise', () => {
        const data = 'some data'
        return Ajax.echo(data).then(retData => {    //return, чтоб jest знал, что ему нужно дождаться результата
            expect(retData).toBe(data)
        })
    })
    test('Should catch error with promise', () => {
        const data = 'some data'
        return Ajax.echo().catch(err => {    //не передает данные, чтоб была ошибка
            expect(err).toBeInstanceOf(Error)
        })
    })
    test('Should catch error with promise', async () => { //Работа с async/await
        try {
            await Ajax.echo()   //Сгенерирует ошибку без данных
        } catch(e) {
            expect(e.message).toBe('error')
        }
    })
})

describe('Ajax: get', () => {

    let responce, todos

    beforeEach(() => {
        todos = [
            {id: 1, title: 'Todo 1', completed: false}
        ]

        responce = {
            data: {
                todos
            }
        }

    })

    test('Should return date from backend', async () => {
        axios.get.mockReturnValue(responce) //Когда будем делать запрос через axios (в тесте именно), то jest отловит этот момент, не будет делать запрос, а просто вернет заданный здесь responce
        return Ajax.get().then(data => {
            expect(data.todos).toEqual(todos)
        })
    })
})