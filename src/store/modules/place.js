import api from '@/services/Api'
import { GET_PLACE } from '../types'

// actions
const actions = {
  async getPlaces({ commit }) {
    try {
      const place = await api('/places')
      commit(GET_PLACE, { place })
    } catch (err) {
      console.log(err)
    }
  }
}

// mutations
const mutations = {
  [GET_PLACE](state, { place }) {
    state.activity = place.activity
    state.food = place.food
    state.night = place.night
  }
}

// initial state
const state = {
  activity: undefined,
  food: undefined,
  night: undefined
}

export default {
  state,
  actions,
  mutations
}
