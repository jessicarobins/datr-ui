<template>
  <div class="home">
    <Places />
  </div>
</template>

<script>
import Places from '@/components/Places.vue'

export default {
  name: 'home',
  components: {
    Places
  }
}
</script>

<style scoped lang="scss">
@import '../styles/variables';

.home {
  display: flex;
  justify-content: center;
  background-color: $accent-lighten-5;
}
</style>
