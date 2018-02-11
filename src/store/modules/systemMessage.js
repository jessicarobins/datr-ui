import * as types from '../types'

// initial state
const initialState = { text: 'insert zip code to play' }

// mutations
const mutations = {
  [types.SET_SYSTEM_MESSAGE](state, message) {
    state.text = message
  },
  [types.SET_SYSTEM_ERROR](state, message) {
    state.text = `${message}. Try again`
  },
  [types.RESET_SYSTEM_MESSAGE](state) {
    state.text = initialState.text
  }
}

export default {
  state: initialState,
  mutations
}
