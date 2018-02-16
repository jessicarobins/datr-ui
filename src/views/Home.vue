<template>
  <div :class="classes">
    <Places />
    <FiltersOverlay v-if="filtersOpen" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Places from '@/components/Places.vue'
import FiltersOverlay from '@/components/FiltersOverlay.vue'

export default {
  name: 'home',
  components: {
    Places,
    FiltersOverlay
  },
  computed: {
    classes() {
      return {
        home: true,
        'with-overlay': this.filtersOpen
      }
    },
    ...mapState({
      filtersOpen: state => state.filters.open
    })
  }
}
</script>

<style scoped lang="scss">
@import '../styles/variables';

.home {
  display: flex;
  justify-content: center;
  background-color: $accent-lighten-5;
  overflow-x: hidden;
}

.with-overlay {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

</style>
