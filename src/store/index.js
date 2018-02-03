import Vue from 'vue'
import Vuex from 'vuex'

import place from './modules/place'

Vue.use(Vuex)

const getters = {
  place: state => type => state.place[type]
}

export default new Vuex.Store({
  getters,
  modules: {
    place
  }
})
