import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/login.vue'
import City from './views/city.vue'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
<<<<<<< HEAD
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
=======
      path: '/city',
      name: 'city',
      component: City,
    }, {
      path: '/',
      redirect: { path: '/home' }
>>>>>>> f433049d07f7b26e7c3e292e0bdb30c4cf1b70b9
    }
  ]
})
