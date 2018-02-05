import Vue from 'vue'
import Vuex from 'vuex'

import location from './modules/location'
import place from './modules/place'

Vue.use(Vuex)

const getters = {
  location: state => state.location,
  place: state => type => state.place[type]
}

export default new Vuex.Store({
  getters,
  modules: {
    location,
    place
  }
})
