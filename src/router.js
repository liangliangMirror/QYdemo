import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/login.vue'
import City from './views/city.vue'
import Jinnang from './views/jinnang.vue'
import Location from './views/location.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/jinnang',
      name: 'jinnang',
      component: Jinnang,
    },
    {
      path: '/city',
      name: 'city',
      component: City,
    }, {
      path: '/',
      redirect: { path: '/home' }
    }, {
      path: '/location',
      name: 'location',
      component: Location,
      beforeEnter(to, from, next) {
        next({
          params: {
            xianame: from.name,
          }
        })
      }
    }
  ]
})
