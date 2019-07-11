import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/login.vue'
import City from './views/city.vue'
import Jinnang from './views/jinnang.vue'
import Location from './views/location.vue'
import Jnlist from './components/home/jnlist.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
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

      children: [{
        path: "",
        name: "hot",
        component: Jnlist,
      },
      {
        path: "asia",
        name: "asia",
        component: Jnlist,
      },
      {
        path: "europe",
        name: "europe",
        component: Jnlist,
      },

      {
        path: "north-america",
        name: "north-america",
        component: Jnlist,
      },
      {
        path: "south-america",
        name: "south-america",
        component: Jnlist,
      },
      {
        path: "oceania",
        name: "oceania",
        component: Jnlist,
      },
      {
        path: "africa",
        name: "africa",
        component: Jnlist,
      },
      {
        path: "antarctica",
        name: "antarctica",
        component: Jnlist,
      },
      ]


    },
    {
      path: '/city',
      name: 'city',
      component: City,
    }, {
      path:'/aaa',
      name:'aaa',
      component: Aaa,
    },
    {
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
