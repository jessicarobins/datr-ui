import api from '@/services/Api'
import { GET_ACTIVITY } from '../types'

// actions
const actions = {
  async getActivity({ commit }) {
    try {
      const activity = await api('/places/activity')
      commit(GET_ACTIVITY, activity)
    } catch (err) {
      console.log(err)
    }
  }
}

// mutations
const mutations = {
  [GET_ACTIVITY](state, { activity }) {
    state.name = activity.name
  }
}

// initial state
const state = {
  name: ''
}

export default {
  state,
  actions,
  mutations
}
