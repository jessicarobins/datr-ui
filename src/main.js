import Vue from 'vue'
import Vuetify from 'vuetify'
import VueAnalytics from 'vue-analytics'
import * as VueGoogleMaps from 'vue2-google-maps'
import bugsnag from 'bugsnag-js'
import bugsnagVue from 'bugsnag-vue'

import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS_EMBED_API_KEY,
    libraries: 'places'
  }
})

Vue.use(Vuetify)

if (process.env.NODE_ENV === 'production') {
  const bugsnagClient = bugsnag(process.env.VUE_APP_BUGSNAG_ID)
  bugsnagClient.use(bugsnagVue(Vue))
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
