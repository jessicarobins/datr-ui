<template>
  <SlotMachine
    :items="items"
    :getPlaces="getPlaces"
    :selectedItems="selectedItems"
    :resetItems="resetItems"
    :canSpin="hasValidLocation">
    <AppHeader slot="header" />
    <div slot="footer-left">
      <ActionButton
        label="filters"
        :on-click="openOverlay" />
    </div>
    <Zipcode slot="footer-right" />
  </SlotMachine>
</template>

<script>
import shuffle from 'lodash/shuffle'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import * as types from '@/store/types'
import AppHeader from './AppHeader.vue'
import Place from './Place.vue'
import SlotMachine from './SlotMachine/SlotMachine.vue'
import Zipcode from './Zipcode.vue'
import ActionButton from './ActionButton.vue'
import { foodIcons, activityIcons } from './SlotMachine/icons'

const barIcons = shuffle(foodIcons)

export default {
  name: 'Places',
  components: {
    AppHeader,
    ActionButton,
    Place,
    SlotMachine,
    Zipcode
  },
  data() {
    return {
      items: [
        [...foodIcons],
        [...activityIcons],
        [...barIcons]
      ]
    }
  },
  computed: {
    hasData() {
      return this.place('restaurant') && this.place('activity') && this.place('bar')
    },
    place() {
      return type => this.$store.getters.place(type)
    },
    ...mapGetters([
      'hasValidLocation'
    ])
  },
  methods: {
    ...mapActions([
      'getPlaces'
    ]),
    ...mapMutations({
      openOverlay: types.TOGGLE_OVERLAY
    }),
    selectedItems() {
      if (this.hasData) {
        return [
          this.place('restaurant'),
          this.place('activity'),
          this.place('bar')
        ]
      }

      return []
    },
    resetItems() {
      this.items = [
        [...foodIcons],
        [...activityIcons],
        [...barIcons]
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
  text-decoration: none
}
</style>
