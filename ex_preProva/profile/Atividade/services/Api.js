import axius from 'axios'

const Api = axius.create({
    baseURL: 'https://dummyjson.com/',
})

export default Api