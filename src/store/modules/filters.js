import cloneDeep from 'lodash/cloneDeep'
import without from 'lodash/without'
import * as types from '../types'

const defaultRadius = 2000
const metersInAMile = 1609.34

export const categories = {
  restaurant: [
    'bakery',
    'cafe',
    'restaurant'
  ],
  activity: [
    'amusement_park',
    'aquarium',
    'art_gallery',
    'bowling_alley',
    'casino',
    'movie_theater',
    'museum',
    'park',
    'stadium',
    'zoo'
  ],
  bar: [
    'bar',
    'night_club'
  ]
}

// initial state
const initialState = {
  categories,
  radius: defaultRadius,
  open: false
}

// getters
const getters = {
  radius: state => (Math.round((state.radius / metersInAMile) * 2) / 2),
  category: state => name => state.categories[name],
  categories: state => state.categories,
  selected: state => ({ category, type }) => state.categories[category].includes(type)
}

// mutations
const mutations = {
  [types.CHANGE_RADIUS](state, radius) {
    state.radius = radius * metersInAMile
  },
  [types.SET_TYPES](state, newCategories) {
    state.categories = cloneDeep(newCategories)
  },
  [types.TOGGLE_TYPE](state, { type, category }) {
    if (state.categories[category].includes(type)) {
      state.categories[category] = without(state.categories[category], type)
    } else {
      state.categories[category].push(type)
    }
  },
  [types.TOGGLE_OVERLAY](state) {
    state.open = !state.open
  }
}

export default {
  state: initialState,
  getters,
  mutations
}
