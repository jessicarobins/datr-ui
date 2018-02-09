import getLocation from '@/services/Geo'
import api from '@/services/Api'
import * as types from '../types'

// actions
const actions = {
  async getLocation({ commit }) {
    try {
      const location = await getLocation()
      commit(types.GET_LOCATION, location)
    } catch (err) {
      console.log(err)
    }
  },
  async getZipcode({ state, dispatch, commit }) {
    try {
      await dispatch('getLocation')
      const { zipcode } = await api('/geo/zipcode', {
        params: { ...state.coords }
      })
      commit(types.SET_ZIPCODE, zipcode)
    } catch (err) {
      console.log(err)
    }
  }
}

// mutations
const mutations = {
  [types.GET_LOCATION](state, { latitude, longitude }) {
    state.coords = { latitude, longitude }
  },
  [types.RESET_LOCATION](state) {
    state.coords = {}
  },
  [types.SET_ZIPCODE](state, zipcode) {
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
