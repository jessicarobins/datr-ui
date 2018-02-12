import Vue from 'vue'
import Vuetify from 'vuetify'
import VueAnalytics from 'vue-analytics'
import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.use(Vuetify)

if (process.env.NODE_ENV === 'production') {
  Vue.use(VueAnalytics, {
    id: process.env.VUE_APP_GA_ID,
    router,
    autoTracking: {
      exception: true
    }
  })
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
