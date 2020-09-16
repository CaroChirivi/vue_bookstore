export const SET_TOKEN = 'login/SET_TOKEN'

export const LoginStore = {
  namespaced: true,
  state: {
    token: '',
  },
  actions: {
    signIn: ({ commit }, payload) => {
      commit(SET_TOKEN, payload)
    },
    signUp: ({ commit }, payload) => {
      commit(SET_TOKEN, payload)
    },
  },
  mutations: {
    [SET_TOKEN](state, payload) {
      localStorage.token = payload
      state.token = payload
    },
  },
  getters: {
    isUserConnected: (state) => {
      return state.token ? true : false
    }
  }
}

//import LoginServices from './services'

//export const SET_TOKEN = 'login/SET_TOKEN'
/* export const SET_TOKEN = 'login/SET_TOKEN'

export const LoginStore = {
    namespaced: true, /*como estos son modulos de vuex con esta instrucción le estamos diciendo que no 
                      mergee todo este objeto en el otro, sino que cree una propiedad y ahí ponga este
                      objeto. Una propiedad cuyo nombre es el nombre del módulo*/
    /*state:{
        token: '',
    },
    actions: {
        signIn: ( {commit}, payload) => {
        //signIn: async ( {commit}, payload) => {
            
           // const response = await LoginServices.signIn(payload)
            //const token = response.data.token

            commit(SET_TOKEN, payload)
            //commit(SET_TOKEN, token)

        },
        //signUp: async ( { commit }, payload ) => {
        signUp: ( { commit }, payload ) => {
            // const response = await LoginServices.signUp(payload)
            // const token = response.data.token

            commit(SET_TOKEN, payload)
            //commit(SET_TOKEN, token)
        }
    },
    mutations: {
        [SET_TOKEN] (state, payload) {
            localStorage.token = payload
            state.token = payload
        }
    },
    getters: {
        isUserConnected: (state) => {
            console.log(state);
            console.log(state.token ? true : false);
            return state.token ? true : false
        }
    }
} */