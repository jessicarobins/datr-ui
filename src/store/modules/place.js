import router from '@/router'
import api from '@/services/Api'
import * as types from '../types'

// actions
const actions = {
  async getPlaces({ commit, rootState }) {
    const { coords, zipcode } = rootState.location
    const { categories, radius } = rootState.filters

    let params = { categories, radius }

    if (coords.latitude && coords.longitude) {
      params = { ...params, ...coords }
    } else {
      params = { ...params, zipcode }
    }

    try {
      const place = await api('/places', {
        params
      })
      commit(types.GET_PLACES, place)
      router.push({ params: { zipcode } })
    } catch (err) {
      commit(types.RESET_PLACES)
      commit(types.SET_SYSTEM_ERROR, err)
    }
  }
}

// mutations
const mutations = {
  [types.GET_PLACES](state, { activity, restaurant, bar }) {
    state.activity = activity
    state.restaurant = restaurant
    state.bar = bar
  },
  [types.RESET_PLACES](state) {
    state.activity = undefined
    state.restaurant = undefined
    state.bar = undefined
  }
}

// initial state
const state = {
  activity: undefined,
  restaurant: undefined,
  bar: undefined
}

export default {
  state,
  actions,
  mutations
}
