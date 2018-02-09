import api from '@/services/Api'
import { GET_PLACES } from '../types'

// actions
const actions = {
  async getPlaces({ commit, rootState }) {
    try {
      const place = await api('/places', {
        params: rootState.location.coords || { zipcode: rootState.location.zipcode }
      })
      commit(GET_PLACES, place)
    } catch (err) {
      console.log(err)
    }
  }
}

// mutations
const mutations = {
  [GET_PLACES](state, { activity, food, night }) {
    state.activity = activity
    state.food = food
    state.night = night
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
