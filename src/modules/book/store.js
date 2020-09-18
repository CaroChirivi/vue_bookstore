import BookServices from './services'

const SET_ALL_BOOKS = 'book/SET_ALL_BOOKS'
const SET_BOOK = 'book/SET_BOOK'
const UPDATE_BOOK = 'book/UPDATE_BOOK'
const CREATE_BOOK = 'book/CREATE_BOOK'
const DELETE_BOOK = 'book/DELETE_BOOK'

export const BookStore = {
    namespaced: true,
    state: {
        book: '',
        books: []
    },
    actions: {
        createBook: async ( {commit}, payload ) => {
            const response = await BookServices.createBook(payload)
            commit(CREATE_BOOK, response.data.book)
        },
        getAllBooks: async ( {commit} ) => {
            const response = await BookServices.getAllBooks()
            commit(SET_ALL_BOOKS, response.data.books)
        },
        getBookById: async ( {commit}, payload) => {
            const response = await BookServices.getBook(payload)
            commit(SET_BOOK, response.data.book)
        },
        updateBook: async ( {commit, state}, payload) => {
            const { id } = payload 
            const response = await BookServices.updateBook(id, state.book)
            commit(UPDATE_BOOK, response.data.book)
        },
        deleteBook: async ( {commit}, payload) => {
            await BookServices.deleteBook(payload)
            commit(DELETE_BOOK, payload)
        }
    },
    mutations: {
        [CREATE_BOOK] (state, payload) {
            state.books.push(payload)
        },
        [SET_ALL_BOOKS] (state, payload) {
            state.books = payload
        },
        [SET_BOOK] (state, payload) {
            state.book = payload
        },
        [UPDATE_BOOK] (state, payload) {
            const { books } = state
            const newState = books.map(book => {
                if(book.id === payload.id) {
                    book = payload
                }
                return book
            })

            state.books = newState
        },
        [DELETE_BOOK] (state, payload) {
            const { books } = state
            
            const newState = books.filter(book => book.id !== payload)

            state.books = newState
        }
    }
}