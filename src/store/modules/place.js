import api from '@/services/Api'
import * as types from '../types'

// actions
const actions = {
  async getPlaces({ commit, rootState }) {
    const { coords, zipcode } = rootState.location
    let params

    if (coords.latitude && coords.longitude) {
      params = coords
    } else {
      params = { zipcode }
    }

    try {
      const place = await api('/places', {
        params
      })
      commit(types.GET_PLACES, place)
    } catch (err) {
      commit(types.RESET_PLACES)
      commit(types.SET_SYSTEM_ERROR, err)
    }
  }
}

// mutations
const mutations = {
  [types.GET_PLACES](state, { activity, food, night }) {
    state.activity = activity
    state.food = food
    state.night = night
  },
  [types.RESET_PLACES](state) {
    state.activity = undefined
    state.food = undefined
    state.night = undefined
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
