<template>
  <div>
    <SlotMachine
      :items="items"
      :getPlaces="getPlaces"
      :placeItems="placeItems"
      :resetItems="resetItems"
      :canSpin="hasValidLocation">
      <AppHeader slot="header" />
      <Zipcode slot="footer" />
    </SlotMachine>
  </div>
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
    placeItems() {
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
