import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/login.vue'
import City from './views/city.vue'
import Search from './views/search_l.vue'
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
      path: '/city',
      name: 'city',
      component: City,
    }, {
      path: '/',
      redirect: { path: '/home' }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
    }
  ]
})
