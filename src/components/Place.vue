<template>
  <div>
    <h1>
      <a :href="place.website" target="_blank" v-if="place.website">{{ place.name }}</a>
      <span v-else>{{ place.name }}</span>
    </h1>
    <p class="address">{{ place.formatted_address }}</p>
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
<style scoped lang="scss">
@import '../styles/variables';

h1 {
  font-weight: normal;
  line-height: 1;
}
a {
  text-decoration: none
}

@media (max-width: $tablet-breakpoint) {
  .address {
    display: none;
  }

  h1 {
    font-size: 3vh;
  }
}

@media (max-width: $phone-breakpoint) {
  h1 {
    word-break: break-all;
    word-wrap: break-word;
  }
}
</style>
