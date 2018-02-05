import api from '@/services/Api'
import { GET_PLACES } from '../types'

// actions
const actions = {
  async getPlaces({ dispatch, commit, rootGetters }) {
    try {
      await dispatch('getLocation', null, { root: true })
      const place = await api('/places', {
        params: rootGetters.location
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
