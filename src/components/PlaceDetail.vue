<template>
  <div class="place-detail mb-2 mt-2 hidden-sm-and-down">
    <div class="header">
      <v-chip
        :selected="selected"
        @click="setSelected"
        color="blue"
        text-color="white">
        <v-icon left v-if="icon">{{ icon }}</v-icon>{{ type }}
      </v-chip>
      <h2 class="title">
        <a :href="details.website" target="_blank" v-if="details.website">{{ details.name }}</a>
        <span v-html="details.name" v-else />
      </h2>
      <div class="price-level ml-2" v-if="details.price_level">
        (<span
          v-for="n in details.price_level"
          :key="n">$</span>)
      </div>
      <div class="rating" v-if="details.rating">
        <div
          v-for="n in 5"
          :key="n">
          <v-icon v-if="n <= details.rating">star</v-icon>
          <v-icon v-else-if="n > details.rating && n === Math.ceil(details.rating)">
            star_half</v-icon>
          <v-icon v-else>star_border</v-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { humanize } from 'inflection'

export default {
  name: 'PlaceDetail',
  props: {
    details: Object,
    icon: String,
    svgPath: String,
    selected: Boolean,
    setSelected: Function
  },
  computed: {
    type() {
      return humanize(this.details.type)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/variables';
.header {
  display: flex;
  align-items: center;
}

.place-detail {
  overflow-x: hidden;
}

.chip,
h3 {
  flex-shrink: 0;
}

.rating {
  display: flex;
  flex: 1;
  justify-content: flex-end;
}
</style>
