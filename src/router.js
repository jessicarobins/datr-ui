import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/:zipcode?',
      name: 'home',
      component: Home,
      beforeEnter(to, from, next) {
        const { zipcode } = to.params
        store.dispatch('setZipcode', { zipcode, updateRouter: false })
        next()
      }
    }
  ]
})
