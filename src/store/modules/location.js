import getLocation from '@/services/Geo'
import { GET_LOCATION, SET_ZIPCODE } from '../types'

// actions
const actions = {
  async getLocation({ commit }) {
    try {
      const location = await getLocation()
      commit(GET_LOCATION, location)
    } catch (err) {
      console.log(err)
    }
  }
}

// mutations
const mutations = {
  [GET_LOCATION](state, { latitude, longitude }) {
    state.coords = { latitude, longitude }
  },
  [SET_ZIPCODE](state, zipcode) {
    state.zipcode = zipcode
  }
}

// initial state
const state = {
  coords: {},
  zipcode: null
}

export default {
  state,
  actions,
  mutations
}
