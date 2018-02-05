import getLocation from '@/services/Geo'
import { GET_LOCATION } from '../types'

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
    state.latitude = latitude
    state.longitude = longitude
  }
}

// initial state
const state = {
  latitude: undefined,
  longitude: undefined
}

export default {
  state,
  actions,
  mutations
}
