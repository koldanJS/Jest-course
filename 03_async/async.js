const { default: axios } = require("axios");

class Ajax {
    static echo(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data)
                } else {
                    reject(new Error('error'))
                }
            }, 100);
        })
    }

    static async get() {
        try {
            const responce = await axios.get('https://jsonplaceholder.typicode.com/todos')
            return responce.data
        } catch(e) {
            console.log(e)
        }
    }
}

module.exports = Ajax