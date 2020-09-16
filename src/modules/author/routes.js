import AuthorPage from './pages/AuthorPage'
import CreateAuthor from './components/CreateAuthor'
import ListAuthors from './components/ListAuthors'
import EditAuthor from './components/EditAuthor'

export const AuthorRoutes = [
    {
        path: '/author',
        component: AuthorPage,
        meta: {
            requiresAuth: true
        }
        // children: [
        //     {
        //         path: '/author/create',
        //         component: CreateAuthor
        //     }
        // ]
    },
    {
        path: '/author/create',
        component: CreateAuthor,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/author/list',
        component: ListAuthors,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/author/:id',
        name: 'editauthor',
        component: EditAuthor,
        meta: {
            requiresAuth: true
        }
    }
]