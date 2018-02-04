<template>
  <div>
    <div v-if="hasData">
      <Place type="food" step="1" :place="place('food')" />
      <Place type="activity" step="2" :place="place('activity')"/>
      <Place type="night" step="3" :place="place('night')" />
    </div>
    <button @click="getPlaces">Go!</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Place from './Place.vue'

export default {
  name: 'Places',
  components: {
    Place
  },
  computed: {
    hasData() {
      return this.place('food') && this.place('activity') && this.place('night')
    },
    place() {
      return type => this.$store.getters.place(type)
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
