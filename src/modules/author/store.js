import AuthorServices from './services'

// export const SET_ALL_AUTHORS = 'author/SET_ALL_AUTHORS'
// export const SET_AUTHOR = 'author/SET_AUTHOR'
// export const UPDATE_AUTHOR = 'author/UPDATE_AUTHOR'
// export const CREATE_AUTHOR = 'author/CREATE_AUTHOR'

const SET_ALL_AUTHORS = 'author/SET_ALL_AUTHORS'
const SET_AUTHOR = 'author/SET_AUTHOR'
const UPDATE_AUTHOR = 'author/UPDATE_AUTHOR'
const CREATE_AUTHOR = 'author/CREATE_AUTHOR'

export const AuthorStore = {
    namespaced: true,
    state: {
        author: '',
        authors: []
    },
    actions: {
        createAuthor: async ( {commit}, payload) => {
            const response = await AuthorServices.createAuthor(payload)
            commit (CREATE_AUTHOR, response.data)
        },
        getAllAuthors: async ( {commit}) => {
            console.log("getAllAuthors");
            const response = await AuthorServices.getAllAuthors()
            console.log(response);
            commit (SET_ALL_AUTHORS, response.data.authors)
        },
        getAuthorById: async ( {commit}, payload) => {
            console.log("getAuthorById");
            const response = await AuthorServices.getAuthor(payload)
            console.log(response);
            commit (SET_AUTHOR, response.data.author)
        },
        updateAuthor: async ( {commit, state}, payload) => {
            const {id} = payload
            const response = await AuthorServices.updateAuthor(id, state.author)
            commit (UPDATE_AUTHOR, response.data)
        }
    },
    mutations: {
        [CREATE_AUTHOR] (state, payload) {
            state.authors.push(payload)
        },
        [SET_ALL_AUTHORS] (state, payload) {
            state.authors = payload
        },
        [SET_AUTHOR] (state, payload) {
            state.author = payload
        },
        [UPDATE_AUTHOR] (state, payload) {
            const { authors } = state

            const newState = authors.map( (author) => {
                if ( author._id === payload._id){
                    author = payload
                } 
                return author
            })

            state.authors = newState
        }
    }
}