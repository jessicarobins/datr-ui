import router from '@/router'
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
      commit(types.SET_SYSTEM_ERROR, err)
    }
  },
  async getZipcode({ state, dispatch, commit }) {
    try {
      await dispatch('getLocation')
      const { zipcode } = await api('/geo/zipcode', {
        params: { ...state.coords }
      })
      await dispatch('setZipcode', { zipcode })
    } catch (err) {
      commit(types.SET_SYSTEM_ERROR, err)
    }
  },
  setZipcode({ commit }, { zipcode, updateRouter = true }) {
    commit(types.SET_ZIPCODE, zipcode)
    if (updateRouter) {
      router.push({ params: { zipcode } })
    }
    commit(types.SET_SYSTEM_MESSAGE, 'pull handle to play')
  }
}

// getters
const getters = {
  hasValidLocation: state => !!((state.coords.latitude && state.coords.longitude) || state.zipcode)
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
  getters,
  mutations
}
