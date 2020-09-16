import { httpClient } from '@/plugins/axios'

const token = localStorage.getItem('token')

const config = {
    headers: {
        authorization: token
    }
}

//httpClient.defaults.headers.common['authorization'] = token

export default {
    createAuthor (author) {
        return httpClient.post('/author', author, config)
    },
    getAllAuthors () {
        return httpClient.get('/author/list', config)
    },
    getAuthor (id) {
        return httpClient.get('/author/' + id, config)
    },
    updateAuthor (id, author) {
        return httpClient.put('/author/' + id, author, config)
    }
}