<template>
  <div>
    <SlotMachine
      :items="items"
      :getPlaces="getPlaces"
      :placeItems="placeItems" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Place from './Place.vue'
import SlotMachine from './SlotMachine/SlotMachine.vue'
import { foodIcons, activityIcons } from './SlotMachine/icons'

export default {
  name: 'Places',
  components: {
    Place,
    SlotMachine
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
    }
  },
  methods: mapActions([
    'getPlaces'
  ])
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
