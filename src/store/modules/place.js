import api from '@/services/Api'
import { GET_PLACE } from '../types'

// actions
const actions = {
  async getPlace({ commit }, type) {
    try {
      const place = await api(`/places/${type}`)
      commit(GET_PLACE, { place, type })
    } catch (err) {
      console.log(err)
    }
  }
}

// mutations
const mutations = {
  [GET_PLACE](state, { place, type }) {
    state[type] = place[type]
  }
}

// initial state
const state = {
  activity: {},
  food: {},
  night: {}
}

export default {
  state,
  actions,
  mutations
}
