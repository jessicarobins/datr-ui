<template>
  <div class="filters-overlay">
    <Filters />
  </div>
</template>

<script>
import Filters from './Filters.vue'

export default {
  name: 'FiltersOverlay',
  components: {
    Filters
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/variables';

.filters-overlay {
  position: fixed;
  top: 0;
  background: rgba($gray-darken-4, .9);
  z-index: 100;
  height: 100vh;
  width: 100vw;
}

</style>
