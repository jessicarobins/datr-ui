import api from '@/services/Api'
import { GET_PLACES } from '../types'

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
