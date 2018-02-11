<template>
  <SlotMachine
    :items="items"
    :getPlaces="getPlaces"
    :selectedItems="selectedItems"
    :resetItems="resetItems"
    :canSpin="hasValidLocation">
    <AppHeader slot="header" />
    <Zipcode slot="footer" />
  </SlotMachine>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AppHeader from './AppHeader.vue'
import Place from './Place.vue'
import SlotMachine from './SlotMachine/SlotMachine.vue'
import Zipcode from './Zipcode.vue'
import { foodIcons, activityIcons } from './SlotMachine/icons'

export default {
  name: 'Places',
  components: {
    AppHeader,
    Place,
    SlotMachine,
    Zipcode
  },
  data() {
    return {
      items: [
        [...foodIcons],
        [...activityIcons],
        [...foodIcons]
      ]
    }
  },
  computed: {
    hasData() {
      return this.place('food') && this.place('activity') && this.place('night')
    },
    place() {
      return type => this.$store.getters.place(type)
    },
    selectedItems() {
      if (this.hasData) {
        return [
          this.place('food'),
          this.place('activity'),
          this.place('night')
        ]
      }

      return []
    },
    ...mapGetters([
      'hasValidLocation'
    ])
  },
  methods: {
    ...mapActions([
      'getPlaces'
    ]),
    resetItems() {
      this.items = [
        [...foodIcons],
        [...activityIcons],
        [...foodIcons]
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
