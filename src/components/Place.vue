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
h1 {
  font-weight: normal;
  line-height: 1;
}
a {
  text-decoration: none
}
</style>
