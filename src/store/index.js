import Vue from 'vue'
import Vuex from 'vuex'

import location from './modules/location'
import place from './modules/place'
import message from './modules/systemMessage'

Vue.use(Vuex)

const getters = {
  location: state => state.location,
  place: state => type => state.place[type]
}

export default new Vuex.Store({
  getters,
  modules: {
    location,
    message,
    place
  }
})
