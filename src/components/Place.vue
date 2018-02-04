<template>
  <div>
    <h1>{{ step }}: <a :href="place.website" target="_blank">{{ place.name }}</a></h1>
    <p>{{ place.formatted_address }}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Place',
  computed: {
    place() {
      return this.$store.getters.place(this.type)
    }
  },
  methods: mapActions([
    'getPlace'
  ]),
  props: {
    step: String,
    type: String
  },
  created() {
    this.$store.dispatch('getPlace', this.type)
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
