import Vue from 'vue'
import VueRouter from 'vue-router'
import { LoginRoutes } from '@/modules/login/routes'
import { AuthorRoutes } from '@/modules/author/routes'
import { BookRoutes } from '@/modules/book/routes'

import HomePage from '@/pages/Home'
import store from '../store'

Vue.use(VueRouter)

  const routes = [{
    path: '/',
    component: HomePage,
    meta: {
      requiresAuth: true
    }
    //redirect: '/signin',
  },
    ...LoginRoutes,
    ...AuthorRoutes,
    ...BookRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => { //validación de rutas antes de to: a donde va,
                                      //from: de donde viene, next: permite continuar navegacion
  console.log(from);
  console.log(to);
  if(to.matched.some(record => record.meta.requiresAuth )) { //matched retorna array toda informacion de la ruta
                                                //alguno tiene metaequita llamada requiresAuth
    console.log("tiene requiresAuth");                                                                                    
    console.log(store);                                                                                    
    if(store.getters['login/isUserConnected']) { //getters en login
      console.log("está conectado");
      next()

      return 
    }
    console.log("no está conectado");
    next('/signin') //no ha iniciado sesion vuelva a form iniciar sesión
  }else{
    next() //rutas que no necesitan autenticación
  }
})

export default router

