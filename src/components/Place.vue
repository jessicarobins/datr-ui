<template>
  <div>
    <h1><a :href="place.website" target="_blank">{{ place.name }}</a></h1>
    <p>{{ place.formatted_address }}</p>
  </div>
</template>

<script>
export default {
  name: 'Place',
  props: {
    place: Object,
    step: String,
    type: String
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
